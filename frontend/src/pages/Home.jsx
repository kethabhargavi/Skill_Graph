import { useState, useCallback } from "react";

import {
  Search,
  ArrowRight,
  Network,
  Code2,
  Cloud,
  Database,
  Brain,
  ShieldCheck,
  BarChart3,
  Smartphone,
  Settings,
  Server,
  GitBranch,
  Layers3,
  X,
  Loader2,
} from "lucide-react";

import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  Handle,
  Position,
  MarkerType,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

/* =========================================================
   API
========================================================= */

const API_BASE_URL = "http://localhost:5000";

/* =========================================================
   SKILLS
========================================================= */

const skills = [
  {
    name: "Programming",
    icon: Code2,
    items: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "C",
      "C++",
      "C#",
      "Go",
      "Rust",
      "PHP",
      "Ruby",
      "Kotlin",
      "Swift",
    ],
  },
  {
    name: "Frontend",
    icon: Layers3,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Angular",
      "Vue.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    name: "Backend",
    icon: Server,
    items: [
      "Node.js",
      "Express.js",
      "Django",
      "Flask",
      "FastAPI",
      "Spring Boot",
      ".NET",
      "Laravel",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    name: "Databases",
    icon: Database,
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Oracle",
      "SQL Server",
      "DynamoDB",
      "Neo4j",
      "Cassandra",
      "Elasticsearch",
    ],
  },
  {
    name: "Cloud",
    icon: Cloud,
    items: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "EC2",
      "S3",
      "Lambda",
      "RDS",
      "VPC",
      "Cloud Functions",
      "Cloud Storage",
    ],
  },
  {
    name: "DevOps",
    icon: Settings,
    items: [
      "Linux",
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "Terraform",
      "Ansible",
      "CI/CD",
    ],
  },
  {
    name: "Data & Analytics",
    icon: BarChart3,
    items: [
      "SQL",
      "Excel",
      "Power BI",
      "Tableau",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data Visualization",
      "Statistics",
      "ETL",
      "Data Analysis",
    ],
  },
  {
    name: "AI & Machine Learning",
    icon: Brain,
    items: [
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "NLP",
      "Computer Vision",
      "Generative AI",
      "LLMs",
      "RAG",
      "Prompt Engineering",
    ],
  },
  {
    name: "Cybersecurity",
    icon: ShieldCheck,
    items: [
      "Network Security",
      "Application Security",
      "Ethical Hacking",
      "Penetration Testing",
      "OWASP",
      "Identity & Access Management",
      "Cryptography",
      "SIEM",
      "Cloud Security",
    ],
  },
  {
    name: "Mobile",
    icon: Smartphone,
    items: [
      "Android",
      "iOS",
      "Flutter",
      "React Native",
      "Swift",
      "Kotlin",
      "Firebase",
    ],
  },
];

/* =========================================================
   CAREER ROLES
========================================================= */

const careerRoles = [
  {
    title: "Frontend Developer",
    category: "Software Engineering",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
  },
  {
    title: "Backend Developer",
    category: "Software Engineering",
    skills: ["Python", "Java", "Node.js", "Django", "REST APIs"],
  },
  {
    title: "Full Stack Developer",
    category: "Software Engineering",
    skills: ["React", "Node.js", "Python", "SQL", "MongoDB"],
  },
  {
    title: "Software Engineer",
    category: "Software Engineering",
    skills: ["Programming", "Data Structures", "Algorithms", "Git"],
  },
  {
    title: "Mobile App Developer",
    category: "Software Engineering",
    skills: ["Android", "iOS", "Flutter", "React Native"],
  },
  {
    title: "Data Analyst",
    category: "Data",
    skills: ["SQL", "Excel", "Power BI", "Python", "Statistics"],
  },
  {
    title: "Business Analyst",
    category: "Data & Business",
    skills: ["SQL", "Excel", "Power BI", "Requirements Analysis"],
  },
  {
    title: "BI Developer",
    category: "Data",
    skills: ["Power BI", "SQL", "DAX", "ETL", "Data Modeling"],
  },
  {
    title: "Data Scientist",
    category: "Data & AI",
    skills: ["Python", "Statistics", "Machine Learning", "Pandas"],
  },
  {
    title: "Machine Learning Engineer",
    category: "AI & ML",
    skills: ["Python", "TensorFlow", "PyTorch", "ML", "MLOps"],
  },
  {
    title: "AI Engineer",
    category: "AI & ML",
    skills: ["Python", "LLMs", "RAG", "Machine Learning"],
  },
  {
    title: "Data Engineer",
    category: "Data Engineering",
    skills: ["Python", "SQL", "ETL", "Spark", "Cloud"],
  },
  {
    title: "DevOps Engineer",
    category: "Cloud & DevOps",
    skills: ["Linux", "Docker", "Kubernetes", "CI/CD", "AWS"],
  },
  {
    title: "Cloud Engineer",
    category: "Cloud & Infrastructure",
    skills: ["AWS", "Azure", "GCP", "Linux", "Terraform"],
  },
  {
    title: "Site Reliability Engineer",
    category: "Cloud & Infrastructure",
    skills: ["Linux", "Kubernetes", "Monitoring", "Docker", "Cloud"],
  },
  {
    title: "Cloud Architect",
    category: "Cloud & Architecture",
    skills: ["AWS", "Azure", "GCP", "Networking", "Architecture"],
  },
  {
    title: "Solutions Architect",
    category: "Architecture",
    skills: ["Cloud", "System Design", "Networking", "Security"],
  },
  {
    title: "Cybersecurity Analyst",
    category: "Security",
    skills: ["Network Security", "SIEM", "OWASP", "Threat Detection"],
  },
  {
    title: "Security Engineer",
    category: "Security",
    skills: [
      "Cloud Security",
      "IAM",
      "Cryptography",
      "Application Security",
    ],
  },
  {
    title: "QA Engineer",
    category: "Testing",
    skills: ["Testing", "Automation", "Selenium", "API Testing"],
  },
  {
    title: "Automation Test Engineer",
    category: "Testing",
    skills: ["Selenium", "Python", "Java", "API Testing"],
  },
  {
    title: "Database Administrator",
    category: "Database",
    skills: ["SQL", "PostgreSQL", "MySQL", "Oracle", "Backup"],
  },
  {
    title: "Database Engineer",
    category: "Database",
    skills: ["SQL", "PostgreSQL", "MongoDB", "Data Modeling"],
  },
  {
    title: "Blockchain Developer",
    category: "Emerging Technology",
    skills: ["Solidity", "Ethereum", "Web3", "Smart Contracts"],
  },
];

/* =========================================================
   POPULAR SKILLS
========================================================= */

const popularSkills = [
  "Python",
  "JavaScript",
  "React",
  "Java",
  "SQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "Machine Learning",
  "Git",
];

/* =========================================================
   SEARCH HELPERS
========================================================= */

/*
 * Normalize text before comparing search values.
 *
 * Example:
 *
 * "Machine Learning"
 * " machine learning "
 *
 * are treated as the same value.
 */
function normalizeSearchText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

/*
 * Extract the display name from an API search result.
 */
function getSearchResultName(result) {
  return (
    result?.name ||
    result?.title ||
    result?.skill ||
    result?.technology ||
    result?.role ||
    result?.source ||
    result?.target ||
    ""
  );
}

/*
 * Extract the entity type from an API search result.
 */
function getSearchResultType(result) {
  if (result?.sourceType) {
    return result.sourceType;
  }

  if (result?.targetType) {
    return result.targetType;
  }

  if (result?.type) {
    return result.type;
  }

  if (result?.category) {
    return result.category;
  }

  return "Result";
}

/*
 * Filter and intelligently rank search results.
 *
 * Important behavior:
 *
 * Exact skill search:
 *
 * Machine Learning
 *
 * should prioritize:
 *
 * Skill
 * Machine Learning
 *
 * instead of showing:
 *
 * Role
 * Machine Learning Engineer
 *
 * The graph API is NOT affected by this function.
 */
function filterAndRankSearchResults(results, query) {
  const normalizedQuery = normalizeSearchText(query);

  if (!Array.isArray(results)) {
    return [];
  }

  /*
   * Determine whether the user's query is an exact
   * skill available in the Skill Library.
   */
  const isExactKnownSkill = skills.some((group) =>
    group.items.some(
      (skill) =>
        normalizeSearchText(skill) === normalizedQuery
    )
  );

  /*
   * If this is an exact known skill, first look for
   * an exact Skill or Technology result.
   */
  if (isExactKnownSkill) {
    const exactSkillResults = results.filter((result) => {
      const name = normalizeSearchText(
        getSearchResultName(result)
      );

      const type = normalizeSearchText(
        getSearchResultType(result)
      );

      return (
        name === normalizedQuery &&
        (type === "skill" ||
          type === "technology")
      );
    });

    /*
     * If the backend returned the exact skill,
     * show that exact result first.
     */
    if (exactSkillResults.length > 0) {
      return exactSkillResults;
    }
  }

  /*
   * For all other searches, rank results instead
   * of blindly displaying them in API order.
   */
  return [...results]
    .map((result, index) => {
      const name = normalizeSearchText(
        getSearchResultName(result)
      );

      const type = normalizeSearchText(
        getSearchResultType(result)
      );

      let score = 0;

      /*
       * Exact name match gets highest priority.
       */
      if (name === normalizedQuery) {
        score += 100;
      }

      /*
       * Starts with search query.
       */
      else if (name.startsWith(normalizedQuery)) {
        score += 60;
      }

      /*
       * Contains search query.
       */
      else if (name.includes(normalizedQuery)) {
        score += 30;
      }

      /*
       * Skills and technologies receive a small
       * preference for general technology searches.
       */
      if (
        type === "skill" ||
        type === "technology"
      ) {
        score += 10;
      }

      return {
        result,
        score,
        index,
      };
    })
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return a.index - b.index;
    })
    .map((item) => item.result);
}

/* =========================================================
   GRAPH NODE
========================================================= */

function GraphNode({ data }) {
  const type = String(data.type || "Result");
  const normalizedType = type.toLowerCase();

  return (
    <div
      className={`knowledge-node node-${normalizedType}`}
    >
      <Handle
        type="target"
        position={Position.Top}
      />

      <div className="knowledge-node-icon">
        {type === "Skill" && <Network size={17} />}

        {type === "Technology" && (
          <Code2 size={17} />
        )}

        {type === "Role" && (
          <GitBranch size={17} />
        )}

        {type === "Project" && (
          <Layers3 size={17} />
        )}

        {type === "Certification" && (
          <ShieldCheck size={17} />
        )}

        {![
          "Skill",
          "Technology",
          "Role",
          "Project",
          "Certification",
        ].includes(type) && (
          <Network size={17} />
        )}
      </div>

      <div className="knowledge-node-content">
        <span>{type}</span>
        <strong>{data.label}</strong>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
      />
    </div>
  );
}

const nodeTypes = {
  knowledge: GraphNode,
};

/* =========================================================
   BUILD GRAPH
========================================================= */

function buildGraph(relationships, searchTerm) {
  const nodeMap = new Map();

  relationships.forEach((relationship) => {
    if (
      !relationship?.source ||
      !relationship?.target ||
      !relationship?.sourceType ||
      !relationship?.targetType
    ) {
      return;
    }

    const sourceId = `${relationship.sourceType}:${relationship.source}`;
    const targetId = `${relationship.targetType}:${relationship.target}`;

    if (!nodeMap.has(sourceId)) {
      nodeMap.set(sourceId, {
        id: sourceId,
        label: relationship.source,
        type: relationship.sourceType,
      });
    }

    if (!nodeMap.has(targetId)) {
      nodeMap.set(targetId, {
        id: targetId,
        label: relationship.target,
        type: relationship.targetType,
      });
    }
  });

  const allNodes = Array.from(nodeMap.values());

  if (allNodes.length === 0) {
    return {
      nodes: [],
      edges: [],
    };
  }

  const normalizedSearch = String(searchTerm || "")
    .trim()
    .toLowerCase();

  let centerNode = allNodes.find(
    (node) =>
      node.label.toLowerCase() === normalizedSearch
  );

  if (!centerNode) {
    centerNode = allNodes[0];
  }

  const otherNodes = allNodes.filter(
    (node) => node.id !== centerNode.id
  );

  const centerX = 650;
  const centerY = 350;

  const nodes = [
    {
      id: centerNode.id,
      type: "knowledge",
      position: {
        x: centerX,
        y: centerY,
      },
      data: {
        label: centerNode.label,
        type: centerNode.type,
      },
    },
  ];

  otherNodes.forEach((node, index) => {
    const total = otherNodes.length;

    const angle =
      (index / Math.max(total, 1)) *
        Math.PI *
        2 -
      Math.PI / 2;

    let radius = 350;

    switch (node.type) {
      case "Role":
        radius = 500;
        break;

      case "Project":
        radius = 420;
        break;

      case "Certification":
        radius = 440;
        break;

      case "Technology":
        radius = 340;
        break;

      case "Skill":
        radius = 300;
        break;

      default:
        radius = 350;
    }

    nodes.push({
      id: node.id,
      type: "knowledge",
      position: {
        x:
          centerX +
          Math.cos(angle) * radius,
        y:
          centerY +
          Math.sin(angle) * radius,
      },
      data: {
        label: node.label,
        type: node.type,
      },
    });
  });

  const edgeMap = new Map();

  relationships.forEach(
    (relationship, index) => {
      const source = `${relationship.sourceType}:${relationship.source}`;
      const target = `${relationship.targetType}:${relationship.target}`;

      const key = `${source}->${target}`;

      if (edgeMap.has(key)) {
        return;
      }

      edgeMap.set(key, {
        id: `edge-${index}`,
        source,
        target,
        type: "smoothstep",
        label: relationship.relationship,
        animated:
          relationship.relationship ===
            "RELATED_TO" ||
          relationship.relationship ===
            "CONNECTED_TO",
        markerEnd: {
          type: MarkerType.ArrowClosed,
        },
      });
    }
  );

  return {
    nodes,
    edges: Array.from(edgeMap.values()),
  };
}

/* =========================================================
   HOME
========================================================= */

function Home() {
  const [searchQuery, setSearchQuery] =
    useState("");

  const [searchResults, setSearchResults] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [searchError, setSearchError] =
    useState("");

  const [graphLoading, setGraphLoading] =
    useState(false);

  const [graphError, setGraphError] =
    useState("");

  const [
    nodes,
    setNodes,
    onNodesChange,
  ] = useNodesState([]);

  const [
    edges,
    setEdges,
    onEdgesChange,
  ] = useEdgesState([]);

  /* =======================================================
     LOAD GRAPH
  ======================================================= */

  const loadGraph = useCallback(
    async (name) => {
      const value = String(name || "").trim();

      if (!value) {
        return;
      }

      setGraphLoading(true);
      setGraphError("");

      try {
        console.log(
          `Loading graph for: ${value}`
        );

        const response = await fetch(
          `${API_BASE_URL}/api/graph/${encodeURIComponent(
            value
          )}`
        );

        if (!response.ok) {
          throw new Error(
            `Graph API returned ${response.status}`
          );
        }

        const relationships =
          await response.json();

        console.log(
          "Graph API response:",
          relationships
        );

        if (!Array.isArray(relationships)) {
          throw new Error(
            "Graph API returned invalid data."
          );
        }

        if (relationships.length === 0) {
          setNodes([]);
          setEdges([]);

          setGraphError(
            `No knowledge graph connections found for "${value}".`
          );

          return;
        }

        const validRelationships =
          relationships.filter(
            (item) =>
              item &&
              item.source &&
              item.target &&
              item.sourceType &&
              item.targetType &&
              item.relationship
          );

        console.log(
          "Valid graph relationships:",
          validRelationships
        );

        if (
          validRelationships.length === 0
        ) {
          setNodes([]);
          setEdges([]);

          setGraphError(
            `No valid knowledge graph connections found for "${value}".`
          );

          return;
        }

        const graph = buildGraph(
          validRelationships,
          value
        );

        console.log(
          "Generated React Flow graph:",
          graph
        );

        setNodes(graph.nodes);
        setEdges(graph.edges);

        setGraphError("");

        setTimeout(() => {
          document
            .getElementById("network")
            ?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
        }, 200);
      } catch (error) {
        console.error(
          "Graph loading error:",
          error
        );

        setNodes([]);
        setEdges([]);

        setGraphError(
          "Unable to load the knowledge graph. Make sure the Flask backend is running on port 5000."
        );
      } finally {
        setGraphLoading(false);
      }
    },
    [setNodes, setEdges]
  );

  /* =======================================================
     SEARCH
  ======================================================= */

  const handleSearch = async (
    query = searchQuery,
    openGraph = true
  ) => {
    const value = String(query || "").trim();

    if (!value) {
      setSearchResults([]);

      setSearchError(
        "Please enter a skill or technology to search."
      );

      return;
    }

    setSearchQuery(value);
    setLoading(true);
    setSearchError("");
    setGraphError("");

    try {
      console.log(
        `Searching SkillGraph for: ${value}`
      );

      const response = await fetch(
        `${API_BASE_URL}/api/search?q=${encodeURIComponent(
          value
        )}`
      );

      if (!response.ok) {
        throw new Error(
          `Search API returned ${response.status}`
        );
      }

      const data = await response.json();

      console.log(
        "Search API response:",
        data
      );

      /*
       * The backend may return:
       *
       * []
       *
       * OR
       *
       * { results: [] }
       *
       * OR
       *
       * { data: [] }
       */
      const rawResults = Array.isArray(data)
        ? data
        : Array.isArray(data.results)
        ? data.results
        : Array.isArray(data.data)
        ? data.data
        : [];

      /*
       * IMPORTANT FIX:
       *
       * Do not directly display the raw API
       * results.
       *
       * First filter and rank them.
       */
      const results =
        filterAndRankSearchResults(
          rawResults,
          value
        );

      console.log(
        "Raw search results:",
        rawResults
      );

      console.log(
        "Filtered search results:",
        results
      );

      setSearchResults(results);

      if (results.length === 0) {
        setSearchError(
          `No results found for "${value}".`
        );

        setNodes([]);
        setEdges([]);

        return;
      }

      /*
       * IMPORTANT:
       *
       * /api/search only returns:
       *
       * name + type
       *
       * Therefore we separately call:
       *
       * /api/graph/<name>
       *
       * to retrieve graph relationships.
       *
       * The graph logic is intentionally unchanged.
       */
      if (openGraph) {
        await loadGraph(value);
      }
    } catch (error) {
      console.error(
        "Search error:",
        error
      );

      setSearchResults([]);
      setNodes([]);
      setEdges([]);

      setSearchError(
        "Unable to connect to the SkillGraph API. Make sure the Flask backend is running on port 5000."
      );

      setGraphError(
        "Knowledge graph could not be loaded."
      );
    } finally {
      setLoading(false);
    }
  };

  /* =======================================================
     POPULAR SEARCH
  ======================================================= */

  const handlePopularSearch = (skill) => {
    handleSearch(skill, true);
  };

  /* =======================================================
     CLEAR SEARCH
  ======================================================= */

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);

    setSearchError("");
    setGraphError("");

    setNodes([]);
    setEdges([]);
  };

  /* =======================================================
     RESULT TYPE
  ======================================================= */

  const getResultType = (result) => {
    return getSearchResultType(result);
  };

  /* =======================================================
     RESULT ICON
  ======================================================= */

  const getResultIcon = (type) => {
    const normalized =
      String(type).toLowerCase();

    if (normalized.includes("role")) {
      return <GitBranch size={18} />;
    }

    if (
      normalized.includes("technology")
    ) {
      return <Code2 size={18} />;
    }

    if (
      normalized.includes("certification")
    ) {
      return <ShieldCheck size={18} />;
    }

    if (
      normalized.includes("project")
    ) {
      return <Layers3 size={18} />;
    }

    return <Network size={18} />;
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="home">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="hero">

        <div className="hero-badge">
          <Network size={16} />
          Technology Knowledge Graph
        </div>

        <h1>
          Explore the
          <span>
            {" "}
            technology ecosystem.
          </span>
        </h1>

        <p className="hero-text">
          Discover how technologies, skills,
          tools and career roles connect
          through an interactive knowledge
          graph.
        </p>

        {/* SEARCH */}

        <div className="search-box">

          <Search size={21} />

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(
                e.target.value
              );

              if (searchError) {
                setSearchError("");
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            placeholder="Search Python, React, AWS, Data Analyst..."
            aria-label="Search technology"
          />

          {searchQuery && (
            <button
              className="search-clear"
              onClick={clearSearch}
              type="button"
              aria-label="Clear search"
            >
              <X size={17} />
            </button>
          )}

          <button
            onClick={() =>
              handleSearch()
            }
            disabled={loading}
            type="button"
          >
            {loading ? (
              <>
                Searching...

                <Loader2
                  className="spin"
                  size={17}
                />
              </>
            ) : (
              <>
                Explore
                <ArrowRight
                  size={17}
                />
              </>
            )}
          </button>

        </div>

        {/* POPULAR */}

        <div className="popular-searches">

          <span>Popular:</span>

          {popularSkills.map(
            (skill) => (
              <button
                key={skill}
                onClick={() =>
                  handlePopularSearch(
                    skill
                  )
                }
                type="button"
              >
                {skill}
              </button>
            )
          )}

        </div>

        {/* SEARCH ERROR */}

        {searchError && (
          <div className="search-message">

            <span>
              {searchError}
            </span>

            {searchError.includes(
              "Unable to connect"
            ) && (
              <button
                onClick={() =>
                  handleSearch()
                }
                type="button"
              >
                Retry
              </button>
            )}

          </div>
        )}

        {/* SEARCH RESULTS */}

        {searchResults.length > 0 && (
          <div className="search-results">

            <div className="search-results-header">

              <div>
                <span className="eyebrow">
                  SEARCH RESULTS
                </span>

                <h2>
                  Results for{" "}
                  <span>
                    "{searchQuery}"
                  </span>
                </h2>
              </div>

              <button
                className="outline-button"
                onClick={clearSearch}
                type="button"
              >
                Clear
                <X size={15} />
              </button>

            </div>

            <div className="search-result-grid">

              {searchResults.map(
                (result, index) => {

                  const name =
                    getSearchResultName(
                      result
                    ) || "Unknown";

                  const type =
                    getResultType(
                      result
                    );

                  const description =
                    result.description ||
                    result.details ||
                    result.domain ||
                    result.relationship ||
                    "";

                  return (
                    <button
                      className="search-result-card"
                      key={
                        result.id ||
                        result.element_id ||
                        `${name}-${type}-${index}`
                      }
                      onClick={() =>
                        handleSearch(
                          name,
                          true
                        )
                      }
                      type="button"
                    >

                      <div className="result-icon">
                        {getResultIcon(
                          type
                        )}
                      </div>

                      <div className="result-content">

                        <span className="result-type">
                          {type}
                        </span>

                        <h3>
                          {name}
                        </h3>

                        {description && (
                          <p>
                            {description}
                          </p>
                        )}

                      </div>

                      <ArrowRight
                        size={17}
                      />

                    </button>
                  );
                }
              )}

            </div>

          </div>
        )}

      </section>

      {/* =================================================
          STATS
      ================================================= */}

      <section className="stats">

        <div>
          <strong>100+</strong>
          <span>Skills</span>
        </div>

        <div>
          <strong>80+</strong>
          <span>Technologies</span>
        </div>

        <div>
          <strong>25+</strong>
          <span>Career Roles</span>
        </div>

        <div>
          <strong>300+</strong>
          <span>Connections</span>
        </div>

      </section>

      {/* =================================================
          KNOWLEDGE GRAPH
      ================================================= */}

      <section
        className="section"
        id="network"
      >

        <div className="section-heading">

          <div>

            <span className="eyebrow">
              KNOWLEDGE NETWORK
            </span>

            <h2>
              See how everything
              <span>
                {" "}
                connects.
              </span>
            </h2>

            <p>
              Search for a skill or
              technology to visualize
              its relationships with
              skills, roles, projects,
              certifications and
              technologies.
            </p>

          </div>

          <button
            className="outline-button"
            onClick={() =>
              handleSearch(
                searchQuery ||
                  "Python",
                true
              )
            }
            disabled={graphLoading}
            type="button"
          >
            {graphLoading
              ? "Loading Graph..."
              : "Explore Graph"}

            <ArrowRight
              size={17}
            />

          </button>

        </div>

        {/* GRAPH */}

        <div
          className="knowledge-graph-container"
          style={{
            width: "100%",
            height: "650px",
            minHeight: "650px",
            position: "relative",
            overflow: "hidden",
          }}
        >

          {/* LOADING */}

          {graphLoading && (
            <div className="graph-loading">

              <Loader2
                className="spin"
                size={32}
              />

              <span>
                Building knowledge graph...
              </span>

            </div>
          )}

          {/* EMPTY */}

          {!graphLoading &&
            nodes.length === 0 && (
              <div className="graph-empty">

                <div className="graph-empty-icon">
                  <Network size={32} />
                </div>

                <h3>
                  Explore the Knowledge
                  Graph
                </h3>

                <p>
                  Search for a technology
                  such as Python, AWS,
                  React or Docker to
                  visualize its
                  connections.
                </p>

                <button
                  onClick={() =>
                    handleSearch(
                      "Python",
                      true
                    )
                  }
                  type="button"
                >
                  Explore Python
                  <ArrowRight
                    size={16}
                  />
                </button>

                {graphError && (
                  <small>
                    {graphError}
                  </small>
                )}

              </div>
            )}

          {/* REACT FLOW */}

          {!graphLoading &&
            nodes.length > 0 && (

              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={
                  onNodesChange
                }
                onEdgesChange={
                  onEdgesChange
                }
                nodeTypes={
                  nodeTypes
                }
                fitView
                fitViewOptions={{
                  padding: 0.25,
                  maxZoom: 1,
                  minZoom: 0.35,
                }}
                minZoom={0.2}
                maxZoom={2}
                nodesDraggable
                nodesConnectable={
                  false
                }
                elementsSelectable
                attributionPosition="bottom-left"
              >

                <Background
                  gap={24}
                  size={1}
                />

                <Controls />

                <MiniMap
                  pannable
                  zoomable
                />

              </ReactFlow>

            )}

        </div>

        {/* GRAPH ERROR */}

        {!graphLoading &&
          graphError &&
          nodes.length === 0 && (
            <div className="search-message">
              {graphError}
            </div>
          )}

        {/* LEGEND */}

        {nodes.length > 0 && (
          <div className="graph-legend">

            <span>
              <i className="legend-skill" />
              Skill
            </span>

            <span>
              <i className="legend-technology" />
              Technology
            </span>

            <span>
              <i className="legend-role" />
              Role
            </span>

            <span>
              <i className="legend-project" />
              Project
            </span>

            <span>
              <i className="legend-certification" />
              Certification
            </span>

          </div>
        )}

      </section>

      {/* =================================================
          SKILL LIBRARY
      ================================================= */}

      <section
        className="section"
        id="skills"
      >

        <div className="section-heading">

          <div>

            <span className="eyebrow">
              SKILL LIBRARY
            </span>

            <h2>
              Explore technology
              <span>
                {" "}
                domains.
              </span>
            </h2>

            <p>
              Browse skills across
              software engineering,
              cloud, data, AI,
              security and emerging
              technologies.
            </p>

          </div>

        </div>

        <div className="skill-grid">

          {skills.map((group) => {

            const Icon = group.icon;

            return (
              <div
                className="skill-card"
                key={group.name}
              >

                <div className="skill-card-header">

                  <div className="icon-box">
                    <Icon size={21} />
                  </div>

                  <div>

                    <h3>
                      {group.name}
                    </h3>

                    <span>
                      {
                        group.items
                          .length
                      }{" "}
                      skills
                    </span>

                  </div>

                </div>

                <div className="skill-tags">

                  {group.items.map(
                    (item) => (

                      <button
                        className="skill-tag-button"
                        key={item}
                        onClick={() =>
                          handlePopularSearch(
                            item
                          )
                        }
                        type="button"
                      >
                        {item}
                      </button>

                    )
                  )}

                </div>

                <button
                  className="card-link"
                  onClick={() =>
                    handlePopularSearch(
                      group.items[0]
                    )
                  }
                  type="button"
                >
                  Explore skills
                  <ArrowRight
                    size={15}
                  />
                </button>

              </div>
            );
          })}

        </div>

      </section>

      {/* =================================================
          CAREER PATHS
      ================================================= */}

      <section
        className="section career-section"
        id="careers"
      >

        <div className="section-heading">

          <div>

            <span className="eyebrow">
              CAREER PATHS
            </span>

            <h2>
              Discover roles based on
              <span>
                {" "}
                connected skills.
              </span>
            </h2>

            <p>
              Explore the skills and
              technologies commonly
              connected to modern
              technology careers.
            </p>

          </div>

        </div>

        <div className="career-grid">

          {careerRoles.map(
            (role) => (

              <div
                className="career-card"
                key={role.title}
              >

                <div className="career-top">

                  <div className="role-icon">
                    <GitBranch
                      size={19}
                    />
                  </div>

                  <span>
                    {role.category}
                  </span>

                </div>

                <h3>
                  {role.title}
                </h3>

                <div className="role-skills">

                  {role.skills.map(
                    (skill) => (

                      <button
                        key={skill}
                        onClick={() =>
                          handlePopularSearch(
                            skill
                          )
                        }
                        type="button"
                      >
                        {skill}
                      </button>

                    )
                  )}

                </div>

                <button
                  className="card-link"
                  onClick={() =>
                    handleSearch(
                      role.title,
                      true
                    )
                  }
                  type="button"
                >
                  View career path
                  <ArrowRight
                    size={15}
                  />
                </button>

              </div>

            )
          )}

        </div>

      </section>

      {/* =================================================
          CTA
      ================================================= */}

      <section className="cta">

        <div className="cta-icon">
          <Network size={30} />
        </div>

        <h2>
          Find your path through
          the technology graph.
        </h2>

        <p>
          Search a skill, explore
          its relationships and
          discover the career paths
          connected to it.
        </p>

        <button
          onClick={() => {

            clearSearch();

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });

          }}
          type="button"
        >
          Start Exploring
          <ArrowRight
            size={17}
          />
        </button>

      </section>

    </div>
  );
}

export default Home;