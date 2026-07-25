# CJ Jeffrey
📄 [Download résumé (PDF)](https://github.com/cadderly1701/resume/blob/main/CJ-Jeffrey-Resume-20260724.pdf)

## ServiceNow Delivery Leader & Strategic Solution Consultant

<details>
  <summary>Click to see contact details</summary>
  <p>Plano, TX  |  <a href="mailto:cj.r.jeffrey@gmail.com">cj.r.jeffrey@gmail.com</a>  |  <a href="https://www.linkedin.com/in/cj-jeffrey-77761210a/">LinkedIn</a>  |  <a href="https://github.com/cadderly1701/resume/">GitHub</a></p>
</details>
## Summary

ServiceNow delivery leader and implementation advisor who puts AI into production instead of into decks. Fifteen years in IT, a decade on ServiceNow, grounded on the customer side first. Led ITSM, HRSD, and SPM delivery verticals, served as executive escalation on enterprise engagements, and personally architected custom scoped apps for Fortune 50/500 customers. Currently building AI tooling targeted at ServiceNow implementation methodology, using local models for privacy and scalability.

## Experience

### Independent – AI Engineering & Delivery Methodology R&D · Oct 2025 – Present

Building the AI-enabled tooling for ServiceNow delivery I'd designed on paper for years. Standalone software outside the platform, running entirely on local models.

- Built a system that gives customers a readable, testable model of out-of-the-box ServiceNow, then expresses every partner change as an explicit delta against it. Ingests official documentation, verifies it with a local agent driving a browser against a live PDI, and captures a screenshot at each test step. Working today across core and ITSM tables.
- Runs on self-built infrastructure with segmented networks and SSO, so customer and product material never leaves the machine. Local agents hold scoped access to change infrastructure, with every change captured as a version-controlled diff.

Full architecture, design decisions, and trade-offs in the addendum on the following pages.

### CDW – Advisory Solutions Supervisor · Oct 2021 – Jul 2026

Led the advisory team and the ITSM, HRSD, and SPM delivery verticals, with cross-functional technical and advisory consultants reporting up. Executive escalation point and client sponsor on complex enterprise engagements across healthcare, manufacturing, education, finance, and government.

- Applied AI in live delivery, not a lab: built an agentic framework grounded in a governed master design document that generated cross-validated first-draft Agile stories for human review. First-pass story acceptance rose from 30% with a non-agentic LLM to 85% with the agentic framework.
- Designed an AI-enabled target operating model for the practice: governance, responsible AI, where AI is trustworthy and where it isn't, how customer data stays contained, and how quality gets verified. *(Design stage, and the direct ancestor of the current independent builds.)*
- Led the delivery teams that implemented Now Assist for enterprise customers, and saw first-hand where agentic features land clean and where undocumented processes make them fail.
- Held a direct delivery role on top of team leadership for roughly 18 months, personally leading custom process and scoped-application design where no advisory resource had the depth.
- Ran discovery workshops, current-state assessments, and future-state design with executive stakeholders, turning business objectives into platform architecture and a prioritized roadmap.
- Sat on the SOW review board and partnered with pre-sales on complex opportunities, shaping proposals so what got sold stayed functionally honest and buildable. Mentored consultants in scalable design patterns and structured requirements.

**Key Enterprise Engagements**

- Fortune 500 Global Consumer Services (B2B) – Scoped App & SAP Integration (2025–2026): Primary trusted advisor and solution designer for a greenfield App Engine scoped application, architected as the system of engagement and approval layer over a complex multi-tenant SAP estate. As much a data-boundary and compliance problem as a workflow one, solved with native catalog capability and strict scoped isolation from SAP data.
- Fortune 50 Healthcare Enterprise – Custom Scoped Application (2024–2025): Led discovery and translation of complex operational requirements into a scalable platform design. Architected a custom data model and workflow orchestration with bi-directional enterprise integrations that removed manual handoffs between specialized systems, in a regulated industry with the attendant audit obligations.

### CDW – Sr. Business Process Consultant · Apr 2021 – Oct 2021

- Promoted to supervisor within six months. Led process discovery and requirements workshops, partnering with C-level stakeholders to translate business objectives into ServiceNow solution designs.

### Linium / Ness Consulting – Business Process Consultant · Jan 2019 – Apr 2021

Acquired by Ness Digital Engineering. Promoted to Senior Associate.

- Preferred consultant for Reporting, Performance Analytics, and Predictive Intelligence engagements. Consistent ITSM implementations. Maintained a 4.5+ average CSAT.
- Delivered scalable no-code and low-code analytics tailored to executive visibility needs.

### Chipotle Mexican Grill – IT Service Level Manager · 2017 – 2019

Owned service management for a national enterprise before moving into consulting.

- Designed and implemented the enterprise ServiceNow CMDB: business and technical services, service offerings, application layers, a governed metadata model, and the service dependency map. Owned ServiceNow administration and system improvements.
- Defined Service Management practices as a sitting member of the ITSMO, led cross-functional workshops across IT, HR, and Security to define service criticality tiers, and embedded Service Level practices across the IT organization, the adoption work that makes a capability stick after it ships.
- Defined an enterprise KPI framework spanning individual, team, and service performance, with Splunk, Tableau, and ServiceNow dashboards behind it.

### Chipotle Mexican Grill – Earlier IT Roles · 2011 – 2017

Apprentice IT Support Manager (2015–2017) · IT Field Service Technician / Service Desk Lead (2011–2016)

- Hired, trained, and managed field technicians and remote service desk staff across the Southwest US; maintained IT for 120+ locations and defined the field team's KPI framework.

## Innovation & Awards

- Knowledge 2025 Hackathon – Honorable Mention: Prototyped PlayGrid, a custom App Engine solution showcasing AI-enabled workflows, framed into an executive-ready business narrative.
- CDW CEO Continuous Improvement Award (2023): Executive recognition for optimizing internal delivery processes and mentoring peers to elevate practice performance.

## Platform Expertise & Skills

- ServiceNow: ITSM, HRSD, SPM, App Engine, Service Catalog, Service Portal, Employee Service Center, Virtual Agent, CMDB, CSDM, Performance Analytics, Predictive Intelligence, Now Mobile, Now Assist, UI Builder, Decision Tables, ServiceNow SDK + Fluent
- AI: agentic and multi-agentic workflows and guardrail design, RAG, LLM-grounded document extraction, local and self-hosted model deployment, model evaluation, human-in-the-loop review design, MCP tooling, browser-driving agents, structured response validation (JSON, Zod), rapid prototyping
- Data & Integration: CMDB and service dependency modeling, KPI and SLA architecture, SAP system-of-engagement strategy, bi-directional enterprise integration, Splunk, Tableau
- Strategy & Leadership: AI governance and responsible-AI practice, AI-enabled target operating model design, Service Level Management, delivery practice leadership, consultant mentoring, pre-sales and architecture partnership, executive escalation

## Certifications & Education

- ServiceNow Certified System Administrator (CSA) · ServiceNow CIS – ITSM · ITSM Suite Certified
- Graduate Certificate in Business Intelligence – CSU Global (2018)
- B.A. Music (Honors) – Colorado State University (2009)

---

# Addendum – Selected Work

**AI Delivery Tooling for ServiceNow** · CJ Jeffrey · Self-directed R&D, Oct 2025 – present

## The Problem

A customer starting a ServiceNow implementation can't tell platform behavior from partner opinion. Without a readable model of what the product already does, they can't participate in requirements or test before UAT. The conventional fix is documentation, which is rarely funded. That same gap now blocks agentic AI: automation on an undocumented environment doesn't produce speed, it produces unattributable change. The premise here is to generate and verify the baseline instead of hand-writing it, so the customer pays only for the delta, the part genuinely theirs to author.

## System Architecture

- Extraction: ingests the ServiceNow product corpus, 80k+ pages, and structures it into epics, features, stories, and test steps written for a business reader, not an implementer. A RAG layer ties every artifact back to its source documentation, so every claim carries a citation.
- Verification: a local agent drives a browser against a live PDI, walks the generated test steps, and screenshots each one. Output is validated against the running platform, not accepted because a model produced it.
- Design surface: form baselines are captured from a PDI through the ServiceNow SDK and Fluent. Redesign is drag-and-drop, every change is tracked as a structured delta, and the tool writes the technical story a developer or agent needs to build it.

## Design Decisions and Trade-offs

- **Delta against a generated baseline:** the core data model. Document the product once, then represent a customer's instance as explicit differences from it. Configuration becomes reviewable, every change carries its justification, and the expensive artifact is amortized across customers instead of rewritten per engagement.
- **Local inference over hosted models:** chosen for data sovereignty and cost at corpus scale. Nothing leaves the machine, which is defensible to a regulated customer's risk function without a policy argument. The trade-off is real: smaller models, slower throughput, hardware to operate. That constraint forced the two-tier design rather than being worked around.
- **Two-tier model architecture:** a frontier model scaffolds structure and process context once, then a small local model runs the exhaustive per-chunk passes anchored against it. Judgment where judgment is needed, volume where volume is cheap. Model selection came from a documented seven-model bake-off, including which candidates failed on tool-calling, not from published benchmarks.
- **Grounding rather than fine-tuning:** retrieval against a controlled corpus keeps every claim traceable to a citation, and makes a new ServiceNow release an ingestion problem instead of a retraining problem. Costs latency and retrieval complexity, buys auditability.
- **Verification as architecture, not QA:** generated documentation nobody checks is a liability. Screenshots double as the verification artifact and the visual documentation a business user follows, and because captures record real accessibility-tree names rather than guessed selectors, the same run is groundwork for generating native ATF tests. Nothing generated reaches a customer without a person accepting it, and the system records what it proposed against what was accepted. Designed in rather than added as policy, because a review step that can be skipped will be.

## Operating Platform and Agent Governance

- Infrastructure: a Proxmox environment on a Cisco 10GbE backbone, 15+ services on tiered ZFS storage across segmented VLANs. Access runs through a reverse proxy with SSO gating admin pages, scoped API tokens, and no inbound port exposure. The environment is a version-controlled knowledge repository: provisioning scripts, repeatable runbooks, one authoritative source per fact.
- Agent governance: local agents hold scoped, authenticated access to change switch configuration, run tests, and provision containers from the repository's own scripts, under an explicit written contract: read before patching, single-file edits, escalate rather than guess. Every change lands as a version-controlled diff, which is what makes an agent's actions attributable after the fact. Deciding what an agent may do unsupervised is the governance question customers are actually asking.

## Status

- Working today: corpus extraction with citations, browser-based verification against a live PDI, and baseline capture, delta tracking, and story generation across core and ITSM tables.
- Aimed, not built: native ATF test generation from the accessibility-tree captures.
- Not published: repositories are private by choice. Design decisions written up publicly as the work progresses.
