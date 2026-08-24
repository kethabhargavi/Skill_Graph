import os

from dotenv import load_dotenv
from neo4j import GraphDatabase


load_dotenv()

URI = os.getenv("COGNODB_URI")
USERNAME = os.getenv("COGNODB_USERNAME")
PASSWORD = os.getenv("COGNODB_PASSWORD")


if not URI or not USERNAME or not PASSWORD:
    raise RuntimeError(
        "Missing CognoDB environment variables. "
        "Check your backend/.env file."
    )


driver = GraphDatabase.driver(
    URI,
    auth=(USERNAME, PASSWORD)
)


def test_connection():
    with driver.session() as session:
        result = session.run(
            "RETURN 'SkillGraph connected to CognoDB!' AS message"
        )

        record = result.single()

        print(record["message"])


try:
    test_connection()
except Exception as error:
    print("❌ Connection failed:")
    print(error)

finally:
    driver.close()