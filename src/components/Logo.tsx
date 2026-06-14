import logo from "@/assets/jenius-logo.png.asset.json";

export function Logo({ size = 52, withText = true }: { size?: number; withText?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src={logo.url}
        alt="JEnius Logística"
        width={size}
        height={size}
        className="object-contain"
        style={{ width: size, height: size }}
      />
      {withText && (
        <div className="leading-none">
          <div className="font-display text-lg font-bold text-brand">
            JEnius
          </div>
          <div className="text-[10px] font-semibold tracking-[0.18em] text-accent-orange uppercase">
            Logistics
          </div>
        </div>
      )}
    </div>
  );
}
