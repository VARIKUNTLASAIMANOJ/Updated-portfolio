"use client";

import DarkVeil from "@/components/ui/DarkVeil";

const PortfolioBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      <div className="absolute inset-0">
        <DarkVeil
          hueShift={-10}
          noiseIntensity={0.08}
          scanlineIntensity={0.08}
          speed={0.5}
          scanlineFrequency={900}
          warpAmount={0.25}
          resolutionScale={1}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,217,255,0.18),transparent_40%),radial-gradient(circle_at_80%_12%,rgba(122,92,255,0.18),transparent_36%),radial-gradient(circle_at_72%_75%,rgba(255,79,216,0.1),transparent_40%),radial-gradient(circle_at_25%_85%,rgba(0,17,255,0.12),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,18,0.38)_0%,rgba(2,5,18,0.18)_45%,rgba(2,5,18,0.42)_100%)]" />
    </div>
  );
};

export default PortfolioBackground;