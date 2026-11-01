export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'CRM Architecture' | 'Data Lakehouse' | 'Enterprise AI' | 'Cloud & DevOps';
  period: string;
  role: string;
  organization: string;
  summary: string;
  architectureOverview: string;
  keyOutcomes: string[];
  techStack: string[];
  featured?: boolean;
  metrics: {
    label: string;
    value: string;
  }[];
  externalLink?: string;
  githubLink?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'System Architecture' | 'Data Engineering' | 'Generative AI' | 'Engineering Leadership';
  readTime: string;
  publishedDate: string;
  featured?: boolean;
  content: {
    sectionHeading: string;
    text: string;
    codeSnippet?: {
      language: string;
      code: string;
      caption?: string;
    };
  }[];
  keyTakeaways: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: 'Salesforce' | 'Amazon Web Services' | 'Microsoft Azure & Databricks' | 'AI & LLM';
  issuedYear: string;
  credentialId?: string;
  verificationUrl?: string;
  badgeAccent: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  company?: string;
  message: string;
  honeypot?: string; // anti-spam check
}

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
  mode?: 'smtp' | 'preview';
  previewDetails?: {
    messageId: string;
    sentTo: string;
    timestamp: string;
    subject: string;
    senderName: string;
    senderEmail: string;
    company?: string;
    previewNote?: string;
  };
  errors?: Record<string, string>;
}
