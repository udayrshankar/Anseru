export const tabContent = {
  jane: {
    title: "Jane: Deal-Closing RFP Automation",
    role: "RFP & Proposal Agent",
    description: "An intelligent proposal engine that intercepts your knowledge base to draft complex RFP responses in minutes. It contextually retrieves previous winning answers to ensure your brand voice remains consistent across every bid.",
    bullets: [
      "Draft complex RFP responses in minutes, not days",
      "Context-aware retrieval from your internal knowledge base",
      "Maintain consistent enterprise brand voice",
      "Smart collaboration tools for stakeholder approval",
    ],
    buttonText: "Draft New Proposal",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
  },
  maya: {
    title: "Maya: Automated Security Reviews",
    role: "Security Review Specialist",
    description: "A proactive security layer that automatically parses vendor questionnaires and maps them to your SOC2 & ISO 27001 controls. Identify critical gaps instantly before a human reviewer ever needs to step in.",
    bullets: [
      "Instantly parse and analyze vendor security questionnaires",
      "Map responses directly to SOC2 & ISO 27001 controls",
      "Flag critical security gaps before human review",
      "Generate automated remediation roadmaps",
    ],
    buttonText: "Start Security Assessment",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
  },
  alex: {
    title: "Alex: Continuous Trust & Compliance",
    role: "Trust & Compliance Expert",
    description: "Your always-on compliance monitor that tracks regulatory changes in real-time. From GDPR to HIPAA, Alex generates automated audit trails for every interaction, ensuring you never miss a compliance requirement.",
    bullets: [
      "Real-time monitoring of regulatory changes (GDPR, HIPAA)",
      "Automated audit trail generation for every interaction",
      "Proactive risk flagging across all enterprise data",
      "Seamless integration with GRC platforms",
    ],
    buttonText: "Run Compliance Check",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  },
};

export type TabKey = keyof typeof tabContent;