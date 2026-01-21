export const tabContent = {
  maya: {
    label: "Maya",
    subtitle: "Automated Security Reviews",
    title: "Meet Maya, Your Security Analyst",
    highlightWord: "Security Analyst",
    description: "Maya instantly parses unwanted questionnaires and maps them to your knowledge base. She flags critical gaps before human review and generates remediation roadmaps instantly.",
    bullets: [
      "Instantly parses and analyzes vendor security questionnaires",
      "Maps responses directly to SOC2 & ISO 27001 controls",
      "Flags critical security gaps before human review",
    ],
    buttonText: "Meet Maya",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
  },
  jane: {
    label: "Jane",
    subtitle: "Deal-Closing Automation",
    title: "Meet Jane, Your RFP Expert",
    highlightWord: "RFP Expert",
    description: "Jane drafts complex RFP responses in minutes, not days. She contextually retrieves previous winning answers to ensure your brand voice remains consistent across every bid.",
    bullets: [
      "Drafts complex RFP responses in minutes",
      "Context-aware retrieval from your internal knowledge base",
      "Maintains consistent enterprise brand voice",
    ],
    buttonText: "Meet Jane",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
  },
  alex: {
    label: "Alex",
    subtitle: "Trust Center & Compliance",
    title: "Meet Alex, Your Trust Architect",
    highlightWord: "Trust Architect",
    description: "Alex manages your Trust Center, allowing customers to self-serve documents behind a 1-click NDA gate. He connects your systems to automate access and provides analytics on every interaction.",
    bullets: [
      "Enables 1-click NDA access for documents",
      "Connects systems to automate access granting",
      "Provides analytics on every customer interaction",
    ],
    buttonText: "Meet Alex",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  },
};

export type TabKey = keyof typeof tabContent;