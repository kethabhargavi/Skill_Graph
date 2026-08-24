# Bugs & Fixes — SkillGraph

This document records the main issues encountered during the development of SkillGraph, the root causes identified, and the solutions implemented.

The purpose is to document the debugging process and important implementation decisions made during development.

---

## 1. Search Results Displayed Incorrect Entity Types

### Problem

The search results initially displayed entity information incorrectly.

For example, searching for a skill could produce results such as:

```text
SEARCH RESULTS

Results for "Machine Learning"

Skill
Machine Learning

Role
Machine Learning Engineer
