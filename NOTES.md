# Development Notes — SkillGraph

This document contains implementation notes, technical decisions, assumptions, and development considerations made during the construction of SkillGraph.

---

# 1. Project Goal

SkillGraph was designed to demonstrate how a graph database can represent relationships between technical skills, technologies, projects, certifications, and career roles.

The main user flow is:

```text
Search
  ↓
Find Entity
  ↓
Retrieve Relationships
  ↓
Build Graph
  ↓
Explore Connections
  ↓
Discover Career Paths
