export default function Slide2() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-50 px-4 pt-24">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold font-onest tracking-tight">The Problem</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Investment teams spend 70% of their time on low-value data drudgery—collecting files, extracting data, and formatting reports.
          </p>
          <ul className="space-y-4 pt-4">
            {["Unstructured Data Chaos", "Slow Due Diligence", "Human Error & Burnout"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-lg font-medium">
                    <span className="w-2 h-2 bg-black rounded-full" /> {item}
                </li>
            ))}
          </ul>
        </div>
        <div className="h-[400px] bg-white rounded-3xl border border-gray-200 shadow-xl flex items-center justify-center p-8">
           {/* Placeholder for visual/chart */}
           <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-red-50 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-3xl">⚠️</span>
                </div>
                <h3 className="text-2xl font-bold">Manual Workflow</h3>
                <p className="text-gray-500">Inefficient, opaque, and slow.</p>
           </div>
        </div>
      </div>
    </section>
  );
}
