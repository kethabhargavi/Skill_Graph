import os

from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
from neo4j import GraphDatabase

load_dotenv()

app = Flask(__name__)
CORS(app)

URI = os.getenv("COGNODB_URI")
USERNAME = os.getenv("COGNODB_USERNAME")
PASSWORD = os.getenv("COGNODB_PASSWORD")

driver = GraphDatabase.driver(
    URI,
    auth=(USERNAME, PASSWORD)
)


def run_query(query, parameters=None):
    with driver.session() as session:
        result = session.run(query, parameters or {})
        return [record.data() for record in result]


@app.route("/")
def home():
    return jsonify({
        "message": "SkillGraph API and CognoDB are connected",
        "status": "success"
    })


@app.route("/api/skills", methods=["GET"])
def get_skills():
    query = """
    MATCH (s:Skill)
    RETURN s.name AS name
    ORDER BY s.name
    """

    return jsonify(run_query(query))


@app.route("/api/roles", methods=["GET"])
def get_roles():
    query = """
    MATCH (r:Role)
    RETURN r.name AS name,
           r.category AS category
    ORDER BY r.name
    """

    return jsonify(run_query(query))


@app.route("/api/domains", methods=["GET"])
def get_domains():
    query = """
    MATCH (d:Domain)
    RETURN d.name AS name
    ORDER BY d.name
    """

    return jsonify(run_query(query))


@app.route("/api/skills/<skill_name>", methods=["GET"])
def get_skill(skill_name):
    query = """
    MATCH (s:Skill {name: $name})
    OPTIONAL MATCH (s)-[r]-(connected)
    RETURN
        s.name AS skill,
        collect(DISTINCT {
            name: connected.name,
            type: labels(connected)[0],
            relationship: type(r)
        }) AS connections
    """

    result = run_query(query, {"name": skill_name})

    if not result:
        return jsonify({"error": "Skill not found"}), 404

    return jsonify(result[0])


@app.route("/api/search", methods=["GET"])
def search():
    query_text = request.args.get("q", "").strip()

    if not query_text:
        return jsonify([])

    query = """
    MATCH (n)
    WHERE toLower(n.name) CONTAINS toLower($q)
    RETURN
        n.name AS name,
        labels(n)[0] AS type
    ORDER BY n.name
    LIMIT 30
    """

    return jsonify(run_query(query, {"q": query_text}))


@app.route("/api/graph/<name>", methods=["GET"])
def graph(name):
    query = """
    MATCH (n {name: $name})-[r]-(connected)
    RETURN
        n.name AS source,
        labels(n)[0] AS sourceType,
        type(r) AS relationship,
        connected.name AS target,
        labels(connected)[0] AS targetType
    """

    return jsonify(run_query(query, {"name": name}))


if __name__ == "__main__":
    print("=" * 44)
    print("SkillGraph Backend API")
    print("=" * 44)
    print("Server: http://localhost:5000")

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )