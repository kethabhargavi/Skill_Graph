
# SkillGraph — Skill & Career Path Explorer

 An interactive knowledge graph application for exploring relationships between technical skills, technologies, projects, certifications, and career roles.

SkillGraph is a graph-powered web application built as a take-home assessment using **CognoDB Cloud, Python/Flask, React, Vite, and React Flow**.

The application allows users to search for a skill or technology and visually explore its connected knowledge graph and related career paths.

---

## 🚀 Overview

Technology skills are highly interconnected.

For example:

```text
                    Python
                      │
          ┌───────────┼───────────┐
          │           │           │
          ▼           ▼           ▼
   Data Analysis   Machine     Backend
                  Learning   Development
                      │
                      ▼
             Machine Learning
                  Engineer
````

SkillGraph represents these relationships as a knowledge graph, allowing users to search for skills and technologies and explore their connections visually.

The project focuses on demonstrating how a graph database can be used to model interconnected technical knowledge and expose it through a modern web application.

---

## ✨ Key Features

* 🔎 Search for skills, technologies, and career roles
* 🕸️ Interactive knowledge graph visualization
* 🔗 Explore relationships between connected entities
* 💼 Discover career roles associated with technical skills
* 📚 Browse skills across multiple technology domains
* ⚡ REST APIs for search and graph retrieval
* 📊 Graph dataset containing 5,000 nodes and 100,000 relationships
* 🧪 Graph workload benchmarking
* 🎨 Modern and responsive user interface
* ⚠️ Loading, empty, and error states
* 🧭 Navigation between Skills, Career Paths, and Knowledge Graph
* 🗺️ Interactive graph controls and minimap

---

# 🛠️ Technology Stack

| Component           | Technology    |
| ------------------- | ------------- |
| Frontend            | React         |
| Build Tool          | Vite          |
| Graph Visualization | React Flow    |
| Backend             | Python        |
| API Framework       | Flask         |
| Database            | CognoDB Cloud |
| Database Protocol   | Bolt          |
| Query Language      | Cypher        |
| Icons               | Lucide React  |
| Styling             | CSS           |
| Version Control     | Git + GitHub  |

---

# 🏗️ Architecture

SkillGraph follows a simple three-layer architecture.

```text
                         USER
                           │
                           ▼
              ┌────────────────────────┐
              │     React Frontend     │
              │                        │
              │ React + Vite           │
              │ React Flow             │
              │ Search UI              │
              │ Career Paths           │
              │ Skill Library          │
              └────────────┬───────────┘
                           │
                       REST API
                           │
                           ▼
              ┌────────────────────────┐
              │     Flask Backend      │
              │                        │
              │ Search API             │
              │ Graph API              │
              │ Graph Processing       │
              └────────────┬───────────┘
                           │
                          Bolt
                           │
                           ▼
              ┌────────────────────────┐
              │     CognoDB Cloud      │
              │                        │
              │ Graph Nodes             │
              │ Relationships           │
              │ Cypher Queries          │
              └────────────────────────┘
```

### Request Flow

A typical graph exploration follows this flow:

```text
User searches for "Python"
            │
            ▼
GET /api/search?q=Python
            │
            ▼
Search Results
            │
            ▼
User selects result
            │
            ▼
GET /api/graph/Python
            │
            ▼
Graph Relationships
            │
            ▼
React Flow
            │
            ▼
Interactive Knowledge Graph
```

---

# 🧠 Knowledge Graph Model

The core of SkillGraph is a graph-based representation of the technology ecosystem.

The graph consists of different types of entities connected through relationships.

## Entity Types

```text
Skill
Technology
Role
Project
Certification
```

## Example Graph

```text
                  ┌─────────────────┐
                  │     Python      │
                  │      Skill      │
                  └────────┬────────┘
                           │
                    RELATED_TO
                           │
              ┌────────────▼────────────┐
              │    Machine Learning     │
              │          Skill          │
              └────────────┬────────────┘
                           │
                         LEADS_TO
                           │
              ┌────────────▼────────────┐
              │ Machine Learning        │
              │        Engineer         │
              │          Role           │
              └────────────┬────────────┘
                           │
                          USES
                           │
              ┌────────────▼────────────┐
              │       TensorFlow        │
              │       Technology        │
              └─────────────────────────┘
```

This graph-oriented model makes relationships and traversal the central part of the application.

---

# 🔍 Why a Graph Database?

The problem domain is relationship-heavy.

A skill can connect to multiple technologies, roles, projects, and certifications.

For example:

```text
Python
 ├── Machine Learning
 ├── Data Analysis
 ├── Django
 ├── Flask
 ├── TensorFlow
 └── Backend Development
```

Representing this type of interconnected information as a graph makes it natural to perform relationship traversal and discover connected entities.

A graph model also provides a foundation for future features such as:

* Multi-hop exploration
* Skill recommendations
* Career recommendations
* Skill gap analysis
* Technology similarity
* Personalized career paths

---

# 🌐 API

SkillGraph uses a Flask REST API to communicate between the frontend and CognoDB Cloud.

## Search API

### Request

```http
GET /api/search?q=Python
```

### Purpose

Searches for matching entities in the knowledge graph.

### Example Response

```json
[
  {
    "name": "Python",
    "type": "Skill"
  }
]
```

The frontend uses the returned entity information to display search results.

---

## Graph API

### Request

```http
GET /api/graph/Python
```

### Purpose

Retrieves graph relationships associated with the requested entity.

### Example Response

```json
[
  {
    "source": "Python",
    "sourceType": "Skill",
    "target": "Machine Learning",
    "targetType": "Skill",
    "relationship": "RELATED_TO"
  }
]
```

The frontend transforms the relationship data into React Flow nodes and edges.

---

# 🔎 Search & Graph Separation

Search and graph retrieval are intentionally implemented as separate operations.

```text
                User Search
                     │
                     ▼
             /api/search
                     │
                     ▼
             Matching Entity
                     │
                     ▼
             /api/graph/<name>
                     │
                     ▼
            Graph Relationships
                     │
                     ▼
               React Flow
```

### Benefits

* Clear separation of responsibilities
* Simpler API design
* Easier debugging
* Independent search and graph logic
* Easier future extension

### Trade-off

The graph requires an additional API request after the search result is identified.

---

# 📊 Dataset

The project uses a graph dataset containing technical entities and relationships.

Current dataset scale:

| Metric        |   Count |
| ------------- | ------: |
| Nodes         |   5,000 |
| Relationships | 100,000 |

The dataset represents interconnected information across areas such as:

* Programming
* Frontend development
* Backend development
* Databases
* Cloud
* DevOps
* Data & Analytics
* Artificial Intelligence
* Machine Learning
* Cybersecurity
* Mobile development
* Career roles

---

# ⚡ Benchmarking

The project includes graph workload benchmarking to evaluate the database under different access patterns.

Benchmark categories include:

* Node lookup
* Graph traversal
* Aggregation
* Mixed workloads

The benchmark dataset contains:

```text
Nodes:         5,000
Relationships: 100,000
```

Benchmark outputs are stored in the project's benchmark directory.

> Performance results depend on the execution environment, network conditions, database configuration, and workload characteristics.

---

# 🧪 Testing

The application was tested across the major system components.

## Backend Testing

The following areas were validated:

* CognoDB connection
* Dataset loading
* Search API
* Graph API
* Graph relationship retrieval
* Empty search results
* Empty graph results
* Invalid API responses
* Backend connection failures

---

## Frontend Testing

The following user flows were validated:

* Search functionality
* Navbar navigation
* Navbar search
* Popular skill searches
* Search result cards
* Graph rendering
* Graph node interaction
* Graph controls
* Graph minimap
* Skill library
* Career paths
* Loading states
* Empty states
* Error states

---

# 🎨 User Experience

The application was designed around a simple exploration workflow.

```text
       Search
          │
          ▼
   Search Results
          │
          ▼
    Select Entity
          │
          ▼
   Explore Graph
          │
          ▼
 Discover Connections
          │
          ▼
   Explore Careers
```

## Search Experience

The search interface provides:

* Search input
* Search button
* Clear button
* Popular searches
* Loading indicator
* Search error messages
* Search result cards

---

## Knowledge Graph Experience

The graph interface provides:

* Interactive nodes
* Relationship edges
* Zoom controls
* Pan interaction
* Node dragging
* Mini-map
* Automatic graph fitting
* Graph loading state
* Empty graph state
* Graph error handling

---

## Skill Library

The Skill Library organizes technologies into domains including:

* Programming
* Frontend
* Backend
* Databases
* Cloud
* DevOps
* Data & Analytics
* AI & Machine Learning
* Cybersecurity
* Mobile

Users can select a skill to immediately explore its knowledge graph.

---

## Career Paths

The Career Paths section provides roles such as:

* Frontend Developer
* Backend Developer
* Full Stack Developer
* Software Engineer
* Data Analyst
* Business Analyst
* BI Developer
* Data Scientist
* Machine Learning Engineer
* AI Engineer
* Data Engineer
* DevOps Engineer
* Cloud Engineer
* Site Reliability Engineer
* Cloud Architect
* Solutions Architect
* Cybersecurity Analyst
* Security Engineer
* QA Engineer
* Database Engineer

Each role is associated with a set of relevant technical skills.

---

# 📁 Project Structure

```text
SkillGraph/
│
├── README.md
├── AI_USAGE.md
├── NOTES.md
├── BUGS.md
├── .gitignore
│
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   │
│   └── src/
│       ├── components/
│       │   └── Navbar.jsx
│       │
│       ├── Home.jsx
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── ...
│
├── scripts/
│   ├── load_dataset.py
│   ├── test_cognodb.py
│   └── ...
│
├── benchmarks/
│   └── ...
│
└── screenshots/
    ├── homepage.png
    ├── search-results.png
    ├── knowledge-graph.png
    ├── skill-library.png
    └── career-paths.png
```

> Update the structure above if your final repository contains different filenames or folders.

---

# ⚙️ Setup & Installation

## Prerequisites

Make sure the following are installed:

* Python 3.x
* Node.js
* npm
* Git
* CognoDB Cloud access

---

# 🔐 Environment Variables

Create a `.env` file containing the credentials required by the Flask backend.

Example:

```env
COGNODB_URI=<your-cognodb-uri>
COGNODB_USERNAME=<your-username>
COGNODB_PASSWORD=<your-password>
```

### Security

Never commit credentials to GitHub.

Add `.env` to `.gitignore`.

A safe `.env.example` can be included:

```env
COGNODB_URI=
COGNODB_USERNAME=
COGNODB_PASSWORD=
```

---

# ▶️ Running the Backend

Open a terminal and navigate to the backend:

```bash
cd backend
```

Install Python dependencies:

```bash
pip install -r requirements.txt
```

Start the Flask application:

```bash
python app.py
```

The backend runs on:

```text
http://localhost:5000
```

---

# ▶️ Running the Frontend

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

---

# 🖥️ Application Screenshots

Add screenshots to the repository under:

```text
screenshots/
```

Recommended screenshots:

### 1. Homepage

Show the main SkillGraph interface.

### 2. Search Results

Example:

```text
Search: Machine Learning
```

### 3. Knowledge Graph

Show the graph generated after searching for a skill.

### 4. Skill Library

Show the categorized skill cards.

### 5. Career Paths

Show the available career roles and associated skills.

---

# 🧩 Design Decisions

## Graph-Centered Architecture

The application was designed around the graph rather than treating the graph as an additional visualization.

The graph is the core data model, while the frontend provides an interface for exploring it.

---

## Lightweight Backend

Flask was selected as a lightweight API layer between React and CognoDB.

The backend focuses primarily on:

```text
Database Connection
        │
        ├── Search
        │
        └── Graph Retrieval
```

This keeps the backend simple and focused.

---

## Interactive Visualization

React Flow was selected to provide:

* Node-based visualization
* Edge rendering
* Zooming
* Panning
* Node dragging
* Mini-map
* Graph controls

This avoids implementing graph interaction behavior from scratch.

---

# ⚖️ Engineering Trade-offs

## Search and Graph APIs

Separating search and graph retrieval improves clarity.

However, it requires two API operations:

```text
Search
  ↓
Identify Entity
  ↓
Retrieve Graph
```

This was chosen because it keeps each API responsible for one clear task.

---

## Graph Layout

The frontend uses a calculated radial layout to position nodes around a central entity.

Different entity types are given different layout distances.

This improves readability for smaller graphs.

For very large graphs, a more advanced layout algorithm could provide better results.

---

# 🚧 Limitations

Current limitations include:

* Very large graphs can become visually dense.
* The current graph layout is optimized primarily for smaller interactive graphs.
* Search ranking can be improved.
* Automated frontend test coverage can be expanded.
* Authentication is outside the scope of the current assessment.
* Production deployment is not included.
* Semantic search is not currently implemented.

---

# 🔮 Future Improvements

## 1. Semantic Search

Support natural-language queries and semantic similarity instead of relying primarily on keyword matching.

Example:

```text
"skills needed for machine learning jobs"
```

could return:

```text
Python
Statistics
Machine Learning
TensorFlow
PyTorch
MLOps
```

---

## 2. Skill Gap Analysis

Allow users to compare their existing skills with a target career.

```text
Current Skills
      │
      ▼
Target Career
      │
      ▼
Missing Skills
```

---

## 3. Career Recommendations

Recommend career paths based on the skills selected by the user.

```text
Python
SQL
Pandas
Power BI
      │
      ▼
Data Analyst
```

---

## 4. Multi-Hop Graph Exploration

Allow users to explore relationships beyond the immediate connected nodes.

```text
Skill
  ↓
Technology
  ↓
Project
  ↓
Career
```

---

## 5. Advanced Graph Filtering

Allow users to filter the graph by:

* Entity type
* Relationship type
* Technology domain
* Career category

---

## 6. Production Deployment

A future production architecture could be:

```text
React Frontend
      │
      ▼
Cloud Hosting
      │
      ▼
Flask API
      │
      ▼
CognoDB Cloud
```

---

## 7. CI/CD

Future versions could include automated:

* Testing
* Linting
* Build validation
* Deployment

using GitHub Actions.

---

# 🤖 AI Usage

AI tools were used as development assistants during the implementation of SkillGraph.

AI assistance was used for:

* Debugging syntax and runtime issues
* Understanding unfamiliar libraries and APIs
* Reviewing implementation approaches
* Improving UI/UX ideas
* Explaining technical concepts
* Generating implementation suggestions
* Reviewing documentation
* Troubleshooting development issues

AI-generated suggestions were not treated as final implementations. They were reviewed, adapted, tested, and debugged against the actual project requirements and runtime behavior.

Detailed AI usage and development decisions are documented separately in:

```text
AI_USAGE.md
```

---

# 📝 Additional Documentation

Additional project documentation is available in:

| File          | Purpose                                                      |
| ------------- | ------------------------------------------------------------ |
| `README.md`   | Project overview, architecture, setup, and usage             |
| `NOTES.md`    | Engineering decisions, assumptions, and implementation notes |
| `BUGS.md`     | Known issues, limitations, and fixes                         |
| `AI_USAGE.md` | AI assistance and development workflow                       |

---

# 📌 Assessment Highlights

This project demonstrates practical implementation of:

* Graph database integration
* Knowledge graph modeling
* Graph traversal
* REST API development
* Python backend development
* React frontend development
* Interactive graph visualization
* Dataset generation and loading
* Performance benchmarking
* Error handling
* UI/UX design
* Technical documentation

---

# 🏁 Conclusion

SkillGraph demonstrates how a graph database can be used to model and explore relationships within a technical skills and career ecosystem.

The application combines:

```text
       Graph Database
              +
          REST API
              +
        React Frontend
              +
    Interactive Visualization
              +
         Benchmarking
              │
              ▼
          SkillGraph
```

Instead of presenting technical skills as isolated lists, SkillGraph provides a connected view of the technology ecosystem and helps users understand how skills relate to technologies and career opportunities.

---

# 👩‍💻 Author

**Bhargavi Ketha**

Computer Science Engineering

---

## ⭐ SkillGraph

**Skill & Career Path Explorer**

Built as a graph database take-home assessment.

```

### Before you push it to GitHub

There are **4 things I strongly recommend you do next**:

1. **Add screenshots** — this will make the README much more attractive to a recruiter.
2. Replace the placeholder project structure with your **actual folders/files**.
3. Add your **real benchmark results** instead of only saying benchmarking was performed.
4. Create `NOTES.md`, `BUGS.md`, and `AI_USAGE.md` so the README's references actually exist.

The README above is the **main recruiter-facing document**; the other three files provide the deeper evidence a technical reviewer can inspect.
```
