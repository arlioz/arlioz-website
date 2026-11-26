interface ChipsProps {
  items: readonly string[];
  className?: string;
}

export function Chips({ items, className = '' }: ChipsProps) {
  return (
    <ul className={`m-0 flex list-none flex-wrap gap-2 p-0 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-[6px] border border-line-3 px-3 py-1.5 font-mono text-[13px] text-paper-2"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
