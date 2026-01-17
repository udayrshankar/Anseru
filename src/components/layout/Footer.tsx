export default function Footer() {
  return (
    <footer className="border-t border-[#483953] bg-[url('https://api.builder.io/api/v1/image/assets/TEMP/8db418d32026a7ce83976b125ba3f12bdf433531?width=2880')] bg-cover bg-center">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            {/* Brand Logo - Keep distinct or use H3 */}
            <h3 className="text-[#483953]">
              ANSERU
            </h3>
            <p className="mt-4 text-[#483953] max-w-[300px] text-smalls">
              Your edge in RFPs & Reviews. Powered by AI for Trust.
            </p>
          </div>

          {[
            ["Product", ["Features", "Security", "Integrations", "Pricing"]],
            ["Company", ["About", "Careers", "Blog", "Contact"]],
            ["Resources", ["Help Center", "API Docs", "ROI Calculator", "Status"]],
          ].map(([title, items]) => (
            <div key={title as string}>
              {/* Table Heading Style */}
              <h4 className="text-table-heading text-[#483953] mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {(items as string[]).map((item) => (
                  <li key={item}>
                    <a href="#" className="text-smalls hover:opacity-70">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-[#483953] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-smalls text-[#483953]">
            © 2024 Anseru Inc. All rights reserved.
          </p>

          <div className="flex gap-5 text-smalls">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}