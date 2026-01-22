


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

                <div className="rounded-[24px] border border-black/[0.08] shadow-2xl shadow-purple-500/10 bg-white overflow-hidden">
                    {/* macOS Title Bar */}
                    <div className="bg-[#F6F6F8] px-5 py-4 border-b border-black/[0.03] flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]/30"></div>
                         <div className="w-3 h-3 rounded-full bg-[#FEB C2E] border border-[#D89E24]/30"></div>
                         <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]/30"></div>
                    </div>

                    <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        <table className="w-full min-w-[800px] border-collapse bg-white">
                            <thead>
                                <tr>
                                    <th className="p-6 text-left w-1/3 text-sm font-medium text-[#483953]/70 pl-8">Features</th>
                                    <th className="p-6 text-center bg-[#D8B4FE]/10 border-x border-[#D8B4FE]/20 w-1/6">
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
                                    <tr 
                                        key={idx} 
                                        className="group transition-all duration-300 ease-out hover:scale-[1.01] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:bg-white hover:z-10 relative"
                                    >
                                        <td className="p-5 pl-8 text-sm font-medium text-[#2A1638] border-b border-black/[0.03] group-hover:border-transparent rounded-l-xl">
                                            {feature}
                                        </td>
                                        {/* Anseru Column */}
                                        <td className="p-5 text-center bg-[#D8B4FE]/5 border-x border-[#D8B4FE]/20 border-b group-hover:border-transparent">
                                            <div className="flex justify-center items-center h-full">
                                                {renderCell(data[idx].anseru)}
                                            </div>
                                        </td>
                                         {/* Compare Columns */}
                                        <td className="p-5 text-center border-b border-black/[0.03] group-hover:border-transparent">
                                             <div className="flex justify-center items-center h-full">
                                                {renderCell(data[idx].old)}
                                            </div>
                                        </td>
                                        <td className="p-5 text-center border-b border-black/[0.03] group-hover:border-transparent">
                                             <div className="flex justify-center items-center h-full">
                                                {renderCell(data[idx].rfp)}
                                            </div>
                                        </td>
                                        <td className="p-5 text-center border-b border-black/[0.03] group-hover:border-transparent rounded-r-xl">
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
            </div>
        </section>
    );
};

export default ComparisonTable;
