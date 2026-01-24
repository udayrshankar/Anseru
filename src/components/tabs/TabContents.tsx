export const tabContent = {
  maya: {
    label: "Sud",
    subtitle: "Automated Security Reviews",
    title: "Meet Sud, Your Security Analyst",
    highlightWord: "Security Analyst",
    description: "Sud instantly parses unwanted questionnaires and maps them to your knowledge base. She flags critical gaps before human review and generates remediation roadmaps instantly.",
    bullets: [
      "Instantly parses and analyzes vendor security questionnaires",
      "Maps responses directly to SOC2 & ISO 27001 controls",
      "Flags critical security gaps before human review",
    ],
    buttonText: "Meet Sud",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
  },
  jane: {
    label: "KG",
    subtitle: "Deal-Closing Automation",
    title: "Meet KG, Your RFP Expert",
    highlightWord: "RFP Expert",
    description: "KG drafts complex RFP responses in minutes, not days. She contextually retrieves previous winning answers to ensure your brand voice remains consistent across every bid.",
    bullets: [
      "Drafts complex RFP responses in minutes",
      "Context-aware retrieval from your internal knowledge base",
      "Maintains consistent enterprise brand voice",
    ],
    buttonText: "Meet KG",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
  }
};

export type TabKey = keyof typeof tabContent;