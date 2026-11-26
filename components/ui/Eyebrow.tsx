interface EyebrowProps {
  index: string;
  label: string;
  className?: string;
}

export function Eyebrow({ index, label, className = '' }: EyebrowProps) {
  return (
    <p
      className={`label-mono m-0 flex items-center gap-3 tracking-[0.08em] text-muted uppercase ${className}`}
    >
      <span className="text-paper">{index}</span>
      <span aria-hidden="true" className="h-px w-7 bg-paper/25" />
      <span>{label}</span>
    </p>
  );
}
