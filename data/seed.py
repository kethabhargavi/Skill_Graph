import os
from pathlib import Path

from dotenv import load_dotenv
from neo4j import GraphDatabase


# ============================================
# Configuration
# ============================================

BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / "backend" / ".env")

URI = os.getenv("COGNODB_URI")
USERNAME = os.getenv("COGNODB_USERNAME", "cognodb")
PASSWORD = os.getenv("COGNODB_PASSWORD")

if not URI or not PASSWORD:
    raise RuntimeError(
        "Missing CognoDB environment variables. "
        "Check backend/.env"
    )


# ============================================
# Connection
# ============================================

driver = GraphDatabase.driver(
    URI,
    auth=(USERNAME, PASSWORD)
)


# ============================================
# Data
# ============================================

DOMAINS = [
    ("Software Development",),
    ("Data & Analytics",),
    ("Cloud Computing",),
    ("DevOps & Platform Engineering",),
    ("Artificial Intelligence",),
    ("Cybersecurity",),
    ("Web Development",),
]


SKILLS = [
    ("Python", "Programming"),
    ("Java", "Programming"),
    ("JavaScript", "Programming"),
    ("TypeScript", "Programming"),
    ("C", "Programming"),
    ("C++", "Programming"),
    ("C#", "Programming"),
    ("Go", "Programming"),

    ("SQL", "Data"),
    ("Statistics", "Data"),
    ("Data Analysis", "Data"),
    ("Data Visualization", "Data"),
    ("ETL", "Data"),
    ("Data Modeling", "Data"),

    ("Machine Learning", "AI/ML"),
    ("Deep Learning", "AI/ML"),
    ("Natural Language Processing", "AI/ML"),
    ("Computer Vision", "AI/ML"),
    ("Generative AI", "AI/ML"),
    ("Prompt Engineering", "AI/ML"),

    ("HTML", "Web"),
    ("CSS", "Web"),
    ("React", "Web"),
    ("Node.js", "Web"),
    ("Express.js", "Web"),
    ("Django", "Web"),
    ("Flask", "Web"),
    ("REST APIs", "Web"),

    ("AWS", "Cloud"),
    ("Microsoft Azure", "Cloud"),
    ("Google Cloud", "Cloud"),
    ("EC2", "Cloud"),
    ("S3", "Cloud"),
    ("IAM", "Cloud"),
    ("VPC", "Cloud"),

    ("Linux", "DevOps"),
    ("Git", "DevOps"),
    ("GitHub", "DevOps"),
    ("Docker", "DevOps"),
    ("Kubernetes", "DevOps"),
    ("CI/CD", "DevOps"),
    ("Jenkins", "DevOps"),
    ("Terraform", "DevOps"),

    ("MySQL", "Database"),
    ("PostgreSQL", "Database"),
    ("MongoDB", "Database"),
    ("Redis", "Database"),
    ("Graph Databases", "Database"),
    ("Cypher", "Database"),

    ("Networking", "Infrastructure"),
]


TECHNOLOGIES = [
    ("Python", "Language"),
    ("Java", "Language"),
    ("JavaScript", "Language"),
    ("TypeScript", "Language"),

    ("React", "Frontend"),
    ("Node.js", "Backend"),
    ("Django", "Backend"),
    ("Flask", "Backend"),

    ("AWS", "Cloud"),
    ("Microsoft Azure", "Cloud"),
    ("Google Cloud", "Cloud"),

    ("Docker", "DevOps"),
    ("Kubernetes", "DevOps"),
    ("Jenkins", "DevOps"),
    ("Terraform", "DevOps"),

    ("MySQL", "Database"),
    ("PostgreSQL", "Database"),
    ("MongoDB", "Database"),

    ("CognoDB", "Graph Database"),
]


ROLES = [
    ("Python Developer", "Entry Level", "Software Development"),
    ("Full Stack Developer", "Entry Level", "Web Development"),
    ("Backend Developer", "Entry Level", "Software Development"),
    ("Frontend Developer", "Entry Level", "Web Development"),
    ("Software Engineer", "Entry Level", "Software Development"),

    ("Data Analyst", "Entry Level", "Data & Analytics"),
    ("Business Analyst", "Entry Level", "Data & Analytics"),
    ("BI Analyst", "Entry Level", "Data & Analytics"),
    ("Data Scientist", "Mid Level", "Artificial Intelligence"),
    ("Data Engineer", "Entry Level", "Data & Analytics"),

    ("Machine Learning Engineer", "Mid Level", "Artificial Intelligence"),
    ("AI Engineer", "Entry Level", "Artificial Intelligence"),
    ("MLOps Engineer", "Mid Level", "Artificial Intelligence"),

    ("DevOps Engineer", "Entry Level", "DevOps & Platform Engineering"),
    ("Cloud Engineer", "Entry Level", "Cloud Computing"),
    ("Cloud Architect", "Senior", "Cloud Computing"),
    ("Site Reliability Engineer", "Mid Level", "DevOps & Platform Engineering"),

    ("Database Administrator", "Mid Level", "Data & Analytics"),

    ("Cybersecurity Analyst", "Entry Level", "Cybersecurity"),
    ("Security Engineer", "Mid Level", "Cybersecurity"),
]


PROJECTS = [
    (
        "E-Commerce Platform",
        "A web application for browsing products, carts and orders.",
        "Web Development",
    ),
    (
        "Customer Churn Analytics",
        "Analytics platform for identifying customer churn patterns.",
        "Data & Analytics",
    ),
    (
        "AI Resume Screening Platform",
        "AI-powered resume analysis and candidate matching platform.",
        "Artificial Intelligence",
    ),
    (
        "Cloud Infrastructure Platform",
        "Cloud infrastructure deployment and monitoring solution.",
        "Cloud Computing",
    ),
    (
        "CI/CD Deployment Pipeline",
        "Automated build, testing and deployment pipeline.",
        "DevOps & Platform Engineering",
    ),
    (
        "Recommendation Engine",
        "Machine learning recommendation system.",
        "Artificial Intelligence",
    ),
]


CERTIFICATIONS = [
    "AWS Certified Cloud Practitioner",
    "Microsoft Azure Fundamentals",
    "Google Cloud Digital Leader",
    "Python Programming Certification",
    "SQL Certification",
    "Docker Certification",
]


ROLE_SKILLS = {
    "Python Developer": [
        "Python", "SQL", "Git", "REST APIs", "Django", "Flask"
    ],

    "Full Stack Developer": [
        "JavaScript", "TypeScript", "React", "Node.js",
        "HTML", "CSS", "SQL", "Git", "REST APIs"
    ],

    "Backend Developer": [
        "Python", "Java", "SQL", "REST APIs", "Docker", "Git"
    ],

    "Frontend Developer": [
        "HTML", "CSS", "JavaScript", "TypeScript", "React", "Git"
    ],

    "Software Engineer": [
        "Python", "Java", "C++", "SQL", "Git", "REST APIs"
    ],

    "Data Analyst": [
        "Python", "SQL", "Statistics",
        "Data Analysis", "Data Visualization"
    ],

    "Business Analyst": [
        "SQL", "Statistics", "Data Analysis",
        "Data Visualization"
    ],

    "BI Analyst": [
        "SQL", "Data Analysis",
        "Data Visualization", "Data Modeling"
    ],

    "Data Scientist": [
        "Python", "SQL", "Statistics",
        "Machine Learning", "Deep Learning",
        "Data Analysis"
    ],

    "Machine Learning Engineer": [
        "Python", "Machine Learning",
        "Deep Learning", "SQL", "Docker", "Git"
    ],

    "AI Engineer": [
        "Python", "Machine Learning",
        "Generative AI",
        "Natural Language Processing",
        "Computer Vision", "Git"
    ],

    "DevOps Engineer": [
        "Linux", "Git", "Docker", "Kubernetes",
        "CI/CD", "Jenkins", "Terraform", "AWS"
    ],

    "Cloud Engineer": [
        "AWS", "EC2", "S3", "IAM",
        "VPC", "Linux", "Docker", "Terraform"
    ],

    "Cloud Architect": [
        "AWS", "Microsoft Azure", "Google Cloud",
        "VPC", "IAM", "Terraform"
    ],

    "Site Reliability Engineer": [
        "Linux", "Docker", "Kubernetes",
        "CI/CD", "Git", "AWS"
    ],

    "Database Administrator": [
        "SQL", "MySQL", "PostgreSQL",
        "MongoDB", "Redis", "Data Modeling"
    ],

    "Cybersecurity Analyst": [
        "Linux", "Python", "Networking", "AWS", "IAM"
    ],

    "Security Engineer": [
        "Linux", "Python", "AWS", "IAM", "Docker"
    ],

    "Data Engineer": [
        "Python", "SQL", "ETL",
        "Data Modeling", "AWS", "Docker"
    ],

    "MLOps Engineer": [
        "Python", "Machine Learning",
        "Docker", "Kubernetes",
        "CI/CD", "AWS", "Terraform"
    ],
}


ROLE_TECHNOLOGIES = {
    "Python Developer": ["Python", "Django", "Flask"],
    "Full Stack Developer": ["React", "Node.js", "JavaScript"],
    "Backend Developer": ["Python", "Django", "Flask"],
    "Frontend Developer": ["React", "JavaScript", "TypeScript"],
    "Software Engineer": ["Python", "Java"],
    "Data Analyst": ["Python", "MySQL"],
    "Business Analyst": ["MySQL"],
    "BI Analyst": ["MySQL"],
    "Data Scientist": ["Python"],
    "Machine Learning Engineer": ["Python", "Docker"],
    "AI Engineer": ["Python"],
    "DevOps Engineer": ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS"],
    "Cloud Engineer": ["AWS", "Docker", "Terraform"],
    "Cloud Architect": ["AWS", "Microsoft Azure", "Google Cloud", "Terraform"],
    "Site Reliability Engineer": ["Docker", "Kubernetes", "AWS"],
    "Database Administrator": ["MySQL", "PostgreSQL", "MongoDB"],
    "Cybersecurity Analyst": ["AWS", "Python"],
    "Security Engineer": ["AWS", "Docker"],
    "Data Engineer": ["Python", "MySQL", "AWS", "Docker"],
    "MLOps Engineer": ["Python", "Docker", "Kubernetes", "AWS"],
}


PROJECT_TECHNOLOGIES = {
    "E-Commerce Platform": ["React", "Node.js", "MySQL"],
    "Customer Churn Analytics": ["Python", "MySQL"],
    "AI Resume Screening Platform": ["Python", "Django"],
    "Cloud Infrastructure Platform": ["AWS", "Terraform", "Docker"],
    "CI/CD Deployment Pipeline": ["Docker", "Jenkins", "AWS"],
    "Recommendation Engine": ["Python"],
}


PROJECT_SKILLS = {
    "E-Commerce Platform": [
        "JavaScript", "React", "REST APIs", "SQL", "Git"
    ],

    "Customer Churn Analytics": [
        "Python", "SQL", "Data Analysis",
        "Statistics", "Data Visualization"
    ],

    "AI Resume Screening Platform": [
        "Python", "Machine Learning",
        "Natural Language Processing",
        "Computer Vision"
    ],

    "Cloud Infrastructure Platform": [
        "AWS", "Docker", "Terraform", "Linux"
    ],

    "CI/CD Deployment Pipeline": [
        "Docker", "Jenkins", "CI/CD", "AWS", "Git"
    ],

    "Recommendation Engine": [
        "Python", "Machine Learning", "Statistics"
    ],
}


SKILL_RELATIONSHIPS = [
    ("Python", "Machine Learning"),
    ("Python", "Data Analysis"),
    ("Python", "Django"),
    ("Python", "Flask"),
    ("Python", "REST APIs"),

    ("JavaScript", "React"),
    ("JavaScript", "Node.js"),
    ("TypeScript", "React"),

    ("SQL", "Data Analysis"),
    ("SQL", "Data Modeling"),
    ("SQL", "ETL"),

    ("Machine Learning", "Deep Learning"),
    ("Machine Learning", "Natural Language Processing"),
    ("Machine Learning", "Computer Vision"),
    ("Machine Learning", "Generative AI"),

    ("Linux", "Docker"),
    ("Docker", "Kubernetes"),
    ("Docker", "CI/CD"),
    ("CI/CD", "Jenkins"),
    ("CI/CD", "Terraform"),

    ("AWS", "EC2"),
    ("AWS", "S3"),
    ("AWS", "IAM"),
    ("AWS", "VPC"),

    ("Git", "GitHub"),
    ("MySQL", "SQL"),
    ("PostgreSQL", "SQL"),
    ("MongoDB", "Data Modeling"),
]


# ============================================
# Helper
# ============================================

def run_query(session, query, **parameters):
    session.run(query, **parameters).consume()


# ============================================
# Main seed
# ============================================

def main():

    print("\n============================================")
    print("SkillGraph - CognoDB Data Seeder")
    print("============================================\n")

    try:

        with driver.session() as session:

            print("Clearing existing SkillGraph data...")

            session.run(
                """
                MATCH (n)
                DETACH DELETE n
                """
            ).consume()

            # ------------------------------------
            # Domains
            # ------------------------------------

            print("Creating domains...")

            for name, in DOMAINS:
                run_query(
                    session,
                    """
                    CREATE (d:Domain {name: $name})
                    """,
                    name=name,
                )

            # ------------------------------------
            # Skills
            # ------------------------------------

            print("Creating skills...")

            for name, category in SKILLS:
                run_query(
                    session,
                    """
                    CREATE (s:Skill {
                        name: $name,
                        category: $category
                    })
                    """,
                    name=name,
                    category=category,
                )

            # ------------------------------------
            # Technologies
            # ------------------------------------

            print("Creating technologies...")

            for name, tech_type in TECHNOLOGIES:
                run_query(
                    session,
                    """
                    CREATE (t:Technology {
                        name: $name,
                        type: $type
                    })
                    """,
                    name=name,
                    type=tech_type,
                )

            # ------------------------------------
            # Roles
            # ------------------------------------

            print("Creating roles...")

            for name, level, domain in ROLES:

                run_query(
                    session,
                    """
                    CREATE (r:Role {
                        name: $name,
                        level: $level
                    })
                    """,
                    name=name,
                    level=level,
                )

                run_query(
                    session,
                    """
                    MATCH (r:Role {name: $role})
                    MATCH (d:Domain {name: $domain})
                    CREATE (r)-[:IN_DOMAIN]->(d)
                    """,
                    role=name,
                    domain=domain,
                )

            # ------------------------------------
            # Projects
            # ------------------------------------

            print("Creating projects...")

            for name, description, domain in PROJECTS:

                run_query(
                    session,
                    """
                    CREATE (p:Project {
                        name: $name,
                        description: $description
                    })
                    """,
                    name=name,
                    description=description,
                )

                run_query(
                    session,
                    """
                    MATCH (p:Project {name: $project})
                    MATCH (d:Domain {name: $domain})
                    CREATE (p)-[:IN_DOMAIN]->(d)
                    """,
                    project=name,
                    domain=domain,
                )

            # ------------------------------------
            # Certifications
            # ------------------------------------

            print("Creating certifications...")

            for name in CERTIFICATIONS:

                run_query(
                    session,
                    """
                    CREATE (c:Certification {name: $name})
                    """,
                    name=name,
                )

            # ------------------------------------
            # Role -> Skill
            # ------------------------------------

            print("Connecting roles to skills...")

            for role, skills in ROLE_SKILLS.items():

                for skill in skills:

                    run_query(
                        session,
                        """
                        MATCH (r:Role {name: $role})
                        MATCH (s:Skill {name: $skill})
                        CREATE (r)-[:REQUIRES]->(s)
                        """,
                        role=role,
                        skill=skill,
                    )

            # ------------------------------------
            # Role -> Technology
            # ------------------------------------

            print("Connecting roles to technologies...")

            for role, technologies in ROLE_TECHNOLOGIES.items():

                for technology in technologies:

                    run_query(
                        session,
                        """
                        MATCH (r:Role {name: $role})
                        MATCH (t:Technology {name: $technology})
                        CREATE (r)-[:USES]->(t)
                        """,
                        role=role,
                        technology=technology,
                    )

            # ------------------------------------
            # Project -> Technology
            # ------------------------------------

            print("Connecting projects to technologies...")

            for project, technologies in PROJECT_TECHNOLOGIES.items():

                for technology in technologies:

                    run_query(
                        session,
                        """
                        MATCH (p:Project {name: $project})
                        MATCH (t:Technology {name: $technology})
                        CREATE (p)-[:USES]->(t)
                        """,
                        project=project,
                        technology=technology,
                    )

            # ------------------------------------
            # Project -> Skill
            # ------------------------------------

            print("Connecting projects to skills...")

            for project, skills in PROJECT_SKILLS.items():

                for skill in skills:

                    run_query(
                        session,
                        """
                        MATCH (p:Project {name: $project})
                        MATCH (s:Skill {name: $skill})
                        CREATE (p)-[:DEMONSTRATES]->(s)
                        """,
                        project=project,
                        skill=skill,
                    )

            # ------------------------------------
            # Skill -> Skill
            # ------------------------------------

            print("Creating skill relationships...")

            for skill_a, skill_b in SKILL_RELATIONSHIPS:

                run_query(
                    session,
                    """
                    MATCH (a:Skill {name: $skill_a})
                    MATCH (b:Skill {name: $skill_b})
                    CREATE (a)-[:RELATED_TO]->(b)
                    """,
                    skill_a=skill_a,
                    skill_b=skill_b,
                )

            # ------------------------------------
            # Skill -> Technology
            # ------------------------------------

            print("Connecting skills to technologies...")

            for skill_name, _ in SKILLS:

                for technology_name, _ in TECHNOLOGIES:

                    if skill_name == technology_name:

                        run_query(
                            session,
                            """
                            MATCH (s:Skill {name: $skill})
                            MATCH (t:Technology {name: $technology})
                            CREATE (s)-[:PART_OF]->(t)
                            """,
                            skill=skill_name,
                            technology=technology_name,
                        )

            # ------------------------------------
            # Certification -> Skill
            # ------------------------------------

            print("Connecting certifications...")

            certification_skills = {

                "AWS Certified Cloud Practitioner": [
                    "AWS", "EC2", "S3", "IAM"
                ],

                "Microsoft Azure Fundamentals": [
                    "Microsoft Azure"
                ],

                "Google Cloud Digital Leader": [
                    "Google Cloud"
                ],

                "Python Programming Certification": [
                    "Python"
                ],

                "SQL Certification": [
                    "SQL"
                ],

                "Docker Certification": [
                    "Docker"
                ],
            }

            for certification, skills in certification_skills.items():

                for skill in skills:

                    run_query(
                        session,
                        """
                        MATCH (c:Certification {name: $certification})
                        MATCH (s:Skill {name: $skill})
                        CREATE (c)-[:VALIDATES]->(s)
                        """,
                        certification=certification,
                        skill=skill,
                    )

        print("\n============================================")
        print("✅ SkillGraph data seeded successfully!")
        print("============================================\n")

    except Exception as error:

        print("\n❌ Seeding failed:")
        print(error)

    finally:

        driver.close()


if __name__ == "__main__":
    main()