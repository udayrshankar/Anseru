export interface TabFeature {
  title: string;
  description: string;
  metric: string;
}

export interface TabItem {
  label: string;
  subtitle: string;
  title: string;
  highlightWord: string;
  description: string;
  bullets: TabFeature[];
  buttonText: string;
  image: string;
}

export const tabContent: Record<string, TabItem> = {
  maya: {
    label: "Sud",
    subtitle: "Security Questionnaire Agent",
    title: "Meet Sud, Your Security Expert",
    highlightWord: "Security Expert",
    description: "Sud instantly parses unwanted questionnaires and maps them to your knowledge base. She flags critical gaps before human review and generates remediation roadmaps instantly.",
    bullets: [
      {
        title: "Answers grounded in your real security posture",
        description: "Responds using your policies, controls, evidence, and historical answers",
        metric: "95% response accuracy"
      },
      {
        title: "Always current, always defensible",
        description: "Flags outdated or impacted answers when controls or policies change",
        metric: "Zero stale responses"
      },
      {
        title: "Removes security reviews as a sales bottleneck",
        description: "Eliminates repetitive Q&A across deals so sales and GRC teams move faster.",
        metric: "70–90% faster security reviews"
      }
    ],
    buttonText: "Meet Sud",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
  },
  jane: {
    label: "KG",
    subtitle: "RFP Agent",
    title: "Meet KG, Your RFP Expert",
    highlightWord: "RFP Expert",
    description: "KG drafts complex RFP responses in minutes, not days. She contextually retrieves previous winning answers to ensure your brand voice remains consistent across every bid.",
    bullets: [
      {
        title: "Instant, deal-ready first drafts",
        description: "Generates tailored RFP responses using your approved content and past wins.",
        metric: "80% reduction in drafting time"
      },
      {
        title: "Built for real RFP complexity",
        description: "Handles messy formats, duplicate questions, and vague asks while preserving context and intent.",
        metric: "Any format supported (PDF, Word, Excel, portals)"
      },
      {
        title: "Human review only where it matters",
        description: "High-confidence answers go through automatically and low-confidence answers are auto-routed to experts for review.",
        metric: "75% fewer SME touchpoints"
      }
    ],
    buttonText: "Meet KG",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
  }
};

export type TabKey = keyof typeof tabContent;