


const ComparisonTable = () => {
    const features = [
        "AI answers within 30 sec",
        "Single source of truth (Spreadsheets)",
        "Question context awareness (previous answers in same document)",
        "Bulk import/export answers",
        "Integrations available (Slack, Salesforce, etc)",
        "Custom Import of unknown file formats (Excel, Word, PDF)",
        "Auto-update to knowledge base from edits",
        "Collaborative QA for SMEs"
    ];

    const data = [
      { anseru: "95%+", old: "14 days", rfp: "Varies", loopio: "Varies" },
      { anseru: true, old: false, rfp: true, loopio: false }, // true = check, false = cross
      { anseru: true, old: true, rfp: false, loopio: "Limited" },
      { anseru: true, old: false, rfp: false, loopio: false },
      { anseru: "> 400", old: "< 200", rfp: "Thousand", loopio: "< 200" },
      { anseru: true, old: false, rfp: false, loopio: false },
      { anseru: true, old: false, rfp: false, loopio: false },
      { anseru: true, old: "Limited", rfp: true, loopio: "Limited" },
    ];

    const CheckIcon = () => (
        <svg className="w-5 h-5 text-[#2A1638]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    const CrossIcon = () => (
         <svg className="w-4 h-4 text-[#2A1638]/30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    const renderCell = (value: string | boolean) => {
        if (typeof value === 'boolean') {
            return value ? <CheckIcon /> : <CrossIcon />;
        }
        return <span className="font-onest text-sm font-medium text-[#2A1638]">{value}</span>;
    };

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-[1400px] mx-auto px-6 xl:px-[120px]">
                <div className="mb-12">
                     <p className="text-sm text-[#2A1638]/60 mb-3 uppercase tracking-widest font-medium">
                        Trusted Partners
                      </p>
                      <h2 className="text-[#2A1638] text-3xl md:text-5xl font-medium tracking-tight mb-4">
                        Why Teams Choose Anseru
                      </h2>
                </div>

                <div className="overflow-x-auto rounded-[32px] border border-black/[0.05] shadow-xl shadow-purple-500/5">
                    <table className="w-full min-w-[800px] border-collapse bg-[#F6F6F8]">
                        <thead>
                            <tr>
                                <th className="p-6 text-left w-1/3"></th>
                                <th className="p-6 text-center bg-[#D8B4FE]/20 backdrop-blur-sm border-b border-[#D8B4FE]/30 w-1/6">
                                    <div className="flex flex-col items-center">
                                       <span className="font-onest font-black text-lg text-[#2A1638] tracking-tight">ANSERU</span>
                                    </div>
                                </th>
                                <th className="p-6 text-center text-sm font-medium text-[#483953]/70 w-1/6">Old Process<br/>(Manually)</th>
                                <th className="p-6 text-center text-sm font-medium text-[#483953]/70 w-1/6">RFP Software</th>
                                <th className="p-6 text-center text-sm font-medium text-[#483953]/70 w-1/6">Generic GenAI</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, idx) => (
                                <tr key={idx} className="group hover:bg-white/50 transition-colors">
                                    <td className="p-5 pl-8 text-sm font-medium text-[#2A1638]/80 border-b border-black/[0.03]">
                                        {feature}
                                    </td>
                                    {/* Anseru Column */}
                                    <td className="p-5 text-center bg-[#D8B4FE]/10 border-b border-[#D8B4FE]/20 group-last:rounded-b-none">
                                        <div className="flex justify-center items-center h-full">
                                            {renderCell(data[idx].anseru)}
                                        </div>
                                    </td>
                                     {/* Compare Columns */}
                                    <td className="p-5 text-center border-b border-black/[0.03]">
                                         <div className="flex justify-center items-center h-full">
                                            {renderCell(data[idx].old)}
                                        </div>
                                    </td>
                                    <td className="p-5 text-center border-b border-black/[0.03]">
                                         <div className="flex justify-center items-center h-full">
                                            {renderCell(data[idx].rfp)}
                                        </div>
                                    </td>
                                    <td className="p-5 text-center border-b border-black/[0.03]">
                                         <div className="flex justify-center items-center h-full">
                                            {renderCell(data[idx].loopio)}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
