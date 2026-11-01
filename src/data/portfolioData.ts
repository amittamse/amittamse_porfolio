import { Project, BlogPost, Certification } from '../types/portfolio';

export const PROFILE_INFO = {
  name: 'Amit Tamse',
  title: 'Senior Engineering Leader & Computer Scientist',
  currentCompany: 'Adobe',
  tagline: 'Architecting scalable cloud-native platforms, CRM enterprise ecosystems, and AI-driven distributed data pipelines.',
  bio: `Senior Engineering Leader and Computer Scientist at Adobe with over 15 years of industry experience guiding multidisciplinary engineering teams. Specializing in high-throughput CRM platform architecture, distributed lakehouse data engineering, and operationalizing generative AI autonomous agents at enterprise scale. Proven track record transforming mission-critical platforms across Sales and Customer Success organizations.`,
  email: 'amitktamse@gmail.com',
  website: 'https://hireamittamse.com/',
  github: 'https://github.com/amittamse',
  linkedin: 'https://www.linkedin.com/in/amittamse',
  location: 'San Jose, California / United States',
  stats: [
    { label: 'Industry Experience', value: '15+ Years' },
    { label: 'Core Platform SLA', value: '99.99%' },
    { label: 'Data Processed Daily', value: '10M+ Records' },
    { label: 'Engineers Mentored', value: '40+' },
  ],
  corePillars: [
    {
      title: 'Enterprise CRM Platforms',
      description: 'Unified multi-platform architectures integrating Salesforce, Microsoft Dynamics 365, and Gainsight NXT for global sales operations.',
    },
    {
      title: 'Data Lakehouse & PySpark',
      description: 'Distributed streaming and batch data architectures built on Databricks Delta Lake, Unity Catalog, and AWS S3.',
    },
    {
      title: 'Autonomous AI & Agentforce',
      description: 'Operationalizing agentic AI systems, LLM reasoning pipelines, and contextual enterprise search across core workflows.',
    },
    {
      title: 'Systems & Operational Excellence',
      description: 'Zero-downtime CI/CD pipelines, robust observability (OpenTelemetry), and resilient microservices in Python, Node.js, and C#.',
    },
  ],
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    title: 'Salesforce Certified Agentforce Specialist',
    issuer: 'Salesforce',
    issuedYear: '2024',
    badgeAccent: 'from-cyan-500/20 to-blue-500/10 text-cyan-400 border-cyan-500/30',
  },
  {
    id: 'cert-2',
    title: 'Salesforce Platform Developer I',
    issuer: 'Salesforce',
    issuedYear: 'Verified',
    badgeAccent: 'from-blue-500/20 to-indigo-500/10 text-blue-400 border-blue-500/30',
  },
  {
    id: 'cert-3',
    title: 'AWS Certified Developer & Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issuedYear: 'Verified',
    badgeAccent: 'from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30',
  },
  {
    id: 'cert-4',
    title: 'Azure Databricks for Data Engineering',
    issuer: 'Microsoft Azure & Databricks',
    issuedYear: 'Verified',
    badgeAccent: 'from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30',
  },
  {
    id: 'cert-5',
    title: 'Microsoft Certified: Dynamics 365 (MCSA)',
    issuer: 'Microsoft Azure & Databricks',
    issuedYear: 'Verified',
    badgeAccent: 'from-sky-500/20 to-blue-500/10 text-sky-400 border-sky-500/30',
  },
  {
    id: 'cert-6',
    title: 'Generative AI & LLM Systems Specialization',
    issuer: 'AI & LLM',
    issuedYear: '2024',
    badgeAccent: 'from-violet-500/20 to-fuchsia-500/10 text-violet-400 border-violet-500/30',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'adobe-crm-ecosystem',
    title: 'Enterprise Multi-Cloud Sales & Customer Success Platform',
    subtitle: 'Federated synchronization architecture uniting Salesforce, Dynamics 365, and Gainsight NXT',
    category: 'CRM Architecture',
    period: '2021 – Present',
    role: 'Lead Architect & Senior Computer Scientist',
    organization: 'Adobe',
    featured: true,
    summary:
      'Engineered an enterprise-grade customer intelligence and pipeline management architecture bridging disparate CRM ecosystems into a cohesive, bidirectional real-time data sync pipeline.',
    architectureOverview:
      'Utilized an event-driven decoupled architecture using Apache Kafka and AWS S3 buffering layers. Apex Lightning Web Components and Microsoft Dataverse plugins communicate via idempotent REST microservices with automated conflict resolution.',
    keyOutcomes: [
      'Eliminated cross-system data drift from 14% to under 0.02% across 25,000+ daily account mutations.',
      'Reduced sales quote-to-close pipeline sync latency from 45 minutes to sub-4 seconds.',
      'Architected granular role-based access control (RBAC) ensuring compliance with SOX and GDPR protocols.',
    ],
    techStack: ['Salesforce (Apex, LWC)', 'Microsoft Dynamics 365', 'Dataverse', 'Gainsight NXT', 'Node.js', 'AWS S3', 'REST APIs'],
    metrics: [
      { label: 'Sync Latency', value: '< 4s' },
      { label: 'Data Accuracy', value: '99.98%' },
      { label: 'Daily Active Users', value: '12,000+' },
    ],
    externalLink: 'https://hireamittamse.com/',
    githubLink: 'https://github.com/amittamse',
  },
  {
    id: 'databricks-lakehouse-pipeline',
    title: 'Petabyte Customer Telemetry & Predictive Lakehouse',
    subtitle: 'Modern data lakehouse architecture with PySpark, Delta Lake, and Unity Catalog',
    category: 'Data Lakehouse',
    period: '2022 – 2024',
    role: 'Principal Data Architect',
    organization: 'Enterprise Cloud Platform',
    featured: true,
    summary:
      'Constructed a high-throughput ELT streaming pipeline that consumes real-time product telemetry to compute customer retention likelihood and automated churn triggers.',
    architectureOverview:
      'A multi-hop medallion architecture (Bronze -> Silver -> Gold) built on Azure Databricks. Raw events ingested into Bronze Delta tables are cleaned and enriched with PySpark streaming jobs, surfacing aggregated customer health scores in Gold tables.',
    keyOutcomes: [
      'Scaled pipeline throughput to comfortably ingest 10M+ customer telemetry events daily without backpressure.',
      'Reduced nightly batch reporting turnaround time from 6.5 hours to 38 minutes (90% reduction).',
      'Enabled real-time churn alert triggers sent directly into Gainsight and Salesforce for Customer Success managers.',
    ],
    techStack: ['Azure Databricks', 'Delta Lake', 'PySpark', 'Unity Catalog', 'Python', 'Azure Data Lake Storage', 'SQL'],
    metrics: [
      { label: 'Event Volume', value: '10M+/day' },
      { label: 'Processing Speedup', value: '10x Faster' },
      { label: 'Cost Optimization', value: '-35% Cloud Spend' },
    ],
    externalLink: 'https://hireamittamse.com/',
    githubLink: 'https://github.com/amittamse',
  },
  {
    id: 'agentforce-ai-workflows',
    title: 'Autonomous Generative AI Agents for Enterprise Workflows',
    subtitle: 'Agentforce reasoning graphs, retrieval-augmented generation, and automated CRM task delegation',
    category: 'Enterprise AI',
    period: '2024 – Present',
    role: 'AI Systems Architect',
    organization: 'Adobe / Innovation Lab',
    featured: true,
    summary:
      'Architected and deployed enterprise AI agents leveraging Salesforce Agentforce and LLM tool-calling capabilities to automate customer escalations, quote generation, and meeting action-item synthesis.',
    architectureOverview:
      'Multi-agent orchestration framework pairing retrieval-augmented knowledge bases with deterministic CRM validation guardrails. Utilizes semantic routing to dispatch queries to specialized agent personas while keeping customer PII protected.',
    keyOutcomes: [
      'Automated 42% of tier-1 inbound commercial operations inquiries without human intervention.',
      'Enforced zero-hallucination policies using schema-validated tool-calling with auditable decision logs.',
      'Delivered 3.2x faster response cycles for enterprise customers requesting complex contractual amendments.',
    ],
    techStack: ['Salesforce Agentforce', 'Generative AI', 'Python', 'Node.js', 'Vector DB', 'Responsible AI Frameworks'],
    metrics: [
      { label: 'Tier-1 Automation', value: '42%' },
      { label: 'Response Velocity', value: '3.2x Faster' },
      { label: 'Guardrail Accuracy', value: '100% Validated' },
    ],
    externalLink: 'https://hireamittamse.com/',
    githubLink: 'https://github.com/amittamse',
  },
  {
    id: 'cloud-cicd-devops-platform',
    title: 'Zero-Downtime Multi-Region Cloud & CI/CD Pipeline',
    subtitle: 'Automated infrastructure-as-code deployment engine with Azure DevOps and AWS',
    category: 'Cloud & DevOps',
    period: '2020 – 2023',
    role: 'DevOps & Infrastructure Lead',
    organization: 'Enterprise Systems',
    featured: false,
    summary:
      'Standardized deployment infrastructure across 18 distributed services, introducing blue-green deployments, canary testing, and unified monitoring.',
    architectureOverview:
      'Terraform infrastructure-as-code provisioned across AWS and Azure, paired with Azure DevOps YAML pipelines executing automated linting, security scanning, unit testing, and ephemeral staging spin-ups.',
    keyOutcomes: [
      'Achieved continuous deployment cadence, increasing releases from monthly to 14+ deploys per week.',
      'Reduced mean time to recovery (MTTR) by 78% through automated rollback health triggers.',
      'Enforced automated security compliance scanning catching vulnerabilities before merge.',
    ],
    techStack: ['AWS', 'Azure DevOps', 'Docker', 'Terraform', 'Bash', 'GitHub Actions', 'Prometheus & Grafana'],
    metrics: [
      { label: 'Deploy Frequency', value: '14+/week' },
      { label: 'MTTR Reduction', value: '78%' },
      { label: 'Build Reliability', value: '99.9%' },
    ],
    externalLink: 'https://hireamittamse.com/',
    githubLink: 'https://github.com/amittamse',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-multi-crm-architecture',
    slug: 'architecting-multi-platform-crm-ecosystems-at-scale',
    title: 'Architecting Multi-Platform CRM Ecosystems at Scale: Salesforce + Dynamics 365 + Gainsight',
    excerpt:
      'How to unify disparate enterprise CRM platforms into a high-throughput, conflict-free data ecosystem with sub-second synchronization and strict transactional consistency.',
    category: 'System Architecture',
    readTime: '6 min read',
    publishedDate: 'October 14, 2026',
    featured: true,
    keyTakeaways: [
      'Decouple writes through an idempotent buffer queue rather than synchronous point-to-point webhook calls.',
      'Establish a deterministic "System of Record" authority matrix per entity attribute, not entire objects.',
      'Implement bidirectional change-data-capture (CDC) with vector clocks to eradicate infinite loop ping-pongs.',
    ],
    content: [
      {
        sectionHeading: 'The Enterprise Dilemma: Why One CRM Is Never Enough',
        text: 'In enterprise organizations with complex go-to-market motions, forcing every business unit onto a single CRM vendor is a recipe for operational gridlock. Sales teams thrive on Salesforce’s CPQ and Opportunity pipelines; operations and ERP teams lean into Microsoft Dynamics 365; while Customer Success organizations require Gainsight NXT for customer health scoring. The engineering challenge is harmonizing these systems without introducing latency or inconsistent records.',
      },
      {
        sectionHeading: 'Decoupled Event-Driven Ingestion Pattern',
        text: 'Direct REST API webhook cascades fail when downstream APIs hit rate limits or undergo scheduled maintenance. By placing an asynchronous buffer between producer and consumer systems, we insulate each CRM from external outages while guaranteeing delivery.',
        codeSnippet: {
          language: 'typescript',
          caption: 'Idempotent Sync Consumer with Deduplication Key',
          code: `interface CRMChangeEvent {
  eventId: string;
  sourceSystem: 'Salesforce' | 'Dynamics365' | 'Gainsight';
  entity: 'Account' | 'Opportunity' | 'Contact';
  entityId: string;
  version: number;
  payload: Record<string, unknown>;
  timestamp: string;
}

export async function processCRMEvent(event: CRMChangeEvent): Promise<void> {
  const isDuplicate = await redisCache.get(\`event:\${event.eventId}\`);
  if (isDuplicate) return;

  // Resolve attribute-level authority matrix
  const targetUpdates = resolveAuthorityMatrix(event);
  await downstreamAdapter.syncWithRetry(targetUpdates);

  await redisCache.set(\`event:\${event.eventId}\`, '1', 'EX', 86400);
}`,
        },
      },
      {
        sectionHeading: 'Vector Clocks and Preventing Infinite Webhook Echoes',
        text: 'The most dangerous bug in bidirectional CRM sync is the infinite loop: Salesforce updates Dynamics, which triggers an update back into Salesforce. By tagging every payload with an originating origin-fingerprint and enforcing strict schema validation, we achieve 99.98% synchronization precision across thousands of daily transactions.',
      },
    ],
  },
  {
    id: 'post-databricks-delta-lake-pipeline',
    slug: 'building-high-throughput-delta-lake-pipelines-with-databricks-and-pyspark',
    title: 'Building High-Throughput Delta Lake Pipelines with Databricks & PySpark',
    excerpt:
      'Lessons learned migrating from legacy nightly batch SQL jobs to an event-driven medallion architecture processing over 10 million telemetry events per day.',
    category: 'Data Engineering',
    readTime: '8 min read',
    publishedDate: 'September 28, 2026',
    featured: true,
    keyTakeaways: [
      'Structure storage using the Bronze-Silver-Gold medallion architecture to isolate raw ingest from curated analytics.',
      'Leverage Delta Lake Liquid Clustering and Auto-Optimize over rigid traditional date partitions to prevent small-file syndrome.',
      'Implement Structured Streaming with RocksDB state stores for stateful deduplication at high event volumes.',
    ],
    content: [
      {
        sectionHeading: 'Tackling the Small-File Problem in Lakehouses',
        text: 'When streaming high-frequency product signals (feature usage, session heartbeats, license activations), traditional partition strategies often produce hundreds of thousands of sub-megabyte Parquet files. This severely degrades query performance and spikes cloud storage transaction fees.',
      },
      {
        sectionHeading: 'PySpark Structured Streaming with Delta Lake',
        text: 'Below is our streamlined pattern for ingesting raw customer events with watermark constraints to prevent memory runaway during delayed network arrivals:',
        codeSnippet: {
          language: 'python',
          caption: 'PySpark Medallion Silver Cleanse with Watermarking',
          code: `from pyspark.sql.functions import col, from_json, current_timestamp

silver_stream = (
    spark.readStream
    .format("delta")
    .table("bronze_customer_telemetry")
    .withWatermark("event_time", "10 minutes")
    .dropDuplicates(["event_id", "event_time"])
    .filter(col("account_id").isNotNull())
    .select(
        col("event_id"),
        col("account_id"),
        col("event_type"),
        col("payload"),
        current_timestamp().alias("ingested_at")
    )
    .writeStream
    .format("delta")
    .outputMode("append")
    .option("checkpointLocation", "abfss://checkpoints@datalake.dfs.core.windows.net/silver_customers")
    .trigger(availableNow=True)
    .toTable("silver_customer_telemetry")
)`,
        },
      },
      {
        sectionHeading: 'The Impact on Downstream Decision Systems',
        text: 'Shifting to this architecture compressed our customer health score calculations from a 6.5-hour overnight batch window to a continuous 15-minute refresh cycle, empowering account executives to act on at-risk accounts within hours rather than days.',
      },
    ],
  },
  {
    id: 'post-agentforce-enterprise-guardrails',
    slug: 'operationalizing-agentforce-and-enterprise-genai-agents',
    title: 'Operationalizing Agentforce & Enterprise GenAI Agents: Real-World Lessons from Production',
    excerpt:
      'Beyond chat widgets: How to design autonomous enterprise agents with deterministic guardrails, structured function calling, and auditable CRM task execution.',
    category: 'Generative AI',
    readTime: '5 min read',
    publishedDate: 'August 19, 2026',
    featured: false,
    keyTakeaways: [
      'Treat LLMs as reasoning planning engines, never as direct database mutation executors.',
      'Isolate write actions behind strict schema validation contracts with human-in-the-loop escalation thresholds.',
      'Monitor semantic drift and tool-invocation accuracy with automated synthetic integration tests.',
    ],
    content: [
      {
        sectionHeading: 'The Shift from Prompt Engineering to Agentic Control Planes',
        text: 'While simple chatbots answer FAQs, enterprise AI agents must execute real actions: modifying opportunity stages, reassigning escalations, and recalculating customer health. This requires strict boundaries between natural language understanding and back-office API execution.',
      },
      {
        sectionHeading: 'Deterministic Tool-Calling Architecture',
        text: 'Rather than granting agents raw database access, we define typed tool contracts. The agent selects the tool and populates parameters; our middleware inspects and validates the payload before execution.',
        codeSnippet: {
          language: 'typescript',
          caption: 'Agent Tool Execution Guardrail Middleware',
          code: `export async function executeAgentAction(
  agentId: string,
  toolName: string,
  parameters: Record<string, unknown>
): Promise<ToolResult> {
  // Step 1: Validate against strict JSON schema
  const schemaValidator = getToolSchema(toolName);
  const { valid, errors } = schemaValidator.validate(parameters);
  if (!valid) {
    return { success: false, reason: 'SCHEMA_VIOLATION', errors };
  }

  // Step 2: Policy and permission audit
  const isAuthorized = await checkUserRBAC(agentId, toolName);
  if (!isAuthorized) {
    return { success: false, reason: 'UNAUTHORIZED_ACTION' };
  }

  // Step 3: Execute through immutable audit log
  return await dispatchToCRMAdapter(toolName, parameters);
}`,
        },
      },
      {
        sectionHeading: 'Realized Gains in Production',
        text: 'By enforcing schema validation and deterministic rollback logic, we achieved 100% adherence to corporate compliance policies while cutting customer issue turnaround time by over 60%.',
      },
    ],
  },
  {
    id: 'post-technical-debt-velocity',
    slug: 'balancing-technical-debt-vs-feature-velocity-in-engineering-teams',
    title: 'Balancing Technical Debt vs. Feature Velocity in High-Growth Engineering Teams',
    excerpt:
      'A practical framework for senior engineering leaders to quantify, prioritize, and communicate architectural refactoring to executive stakeholders.',
    category: 'Engineering Leadership',
    readTime: '7 min read',
    publishedDate: 'July 11, 2026',
    featured: false,
    keyTakeaways: [
      'Translate technical debt into operational risk and engineer-hour waste to align with business priorities.',
      'Adopt the 70/20/10 capacity allocation rule: 70% features, 20% architectural refactoring, 10% experimentation.',
      'Celebrate refactoring milestones with the same visibility as major customer-facing feature releases.',
    ],
    content: [
      {
        sectionHeading: 'Speaking the Language of Business Stakeholders',
        text: 'Product managers and VP-level executives rarely care about clean code for its own sake. However, they care deeply about release velocity, platform uptime, customer retention, and infrastructure spend. Reframing architectural modernization in these terms is the hallmark of effective engineering leadership.',
      },
      {
        sectionHeading: 'The 70/20/10 Sustainable Velocity Engine',
        text: 'Teams that dedicate 100% of their sprints to net-new features invariably experience velocity degradation within 12 to 18 months. By reserving an explicit 20% budget for test coverage, dependency upgrades, and distributed tracing, our teams sustained high throughput while simultaneously decreasing regression defects by 45%.',
      },
    ],
  },
];
