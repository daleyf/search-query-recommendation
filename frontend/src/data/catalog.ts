export interface CandidatePrompt {
  prompt: string;
  tags: string[];
}

export type DomainTopics = Record<string, string[]>;

export const candidatePrompts: CandidatePrompt[] = [
  {
    prompt: 'Top lightweight CRM tools for startups',
    tags: ['crm', 'startup', 'lightweight', 'tools'],
  },
  {
    prompt: 'Affordable CRM platforms for SMBs',
    tags: ['crm', 'smb', 'pricing', 'affordable'],
  },
  {
    prompt: 'Best AI-powered CRM systems',
    tags: ['crm', 'ai', 'automation'],
  },
  {
    prompt: 'Alternatives to HubSpot for small teams',
    tags: ['crm', 'hubspot', 'alternatives', 'small-teams'],
  },
  {
    prompt: 'How to migrate CRM data without downtime',
    tags: ['crm', 'migration', 'data', 'operations'],
  },
  {
    prompt: 'Customer retention strategies for SaaS startups',
    tags: ['customer-success', 'saas', 'startup', 'retention'],
  },
  {
    prompt: 'What is the best project management tool for agencies?',
    tags: ['project-management', 'agencies', 'tools'],
  },
  {
    prompt: 'How to evaluate enterprise CRM vendors',
    tags: ['crm', 'enterprise', 'vendor-selection'],
  },
  {
    prompt: 'Best support desk integrations for CRM platforms',
    tags: ['crm', 'support', 'integration'],
  },
  {
    prompt: 'Low-code CRM solutions for operations teams',
    tags: ['crm', 'low-code', 'operations'],
  },
];

export const domainTopics: DomainTopics = {
  'itstelepathic.com': ['crm', 'customer-success', 'automation', 'ai', 'startup'],
  default: ['search', 'marketing', 'content'],
};

export const sampleUserPrompts: string[] = [
  'Best CRMs of 2025',
  'What CRM should I use for my early stage startup?',
  'How does Salesforce compare to alternatives?',
];
