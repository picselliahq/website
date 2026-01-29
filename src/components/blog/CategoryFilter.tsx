'use client';

interface CategoryFilterProps {
  categories: string[];
  selected: string | null;
  onChange: (category: string | null) => void;
}

export default function CategoryFilter({ categories, selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange(null)}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
          selected === null
            ? 'bg-accent text-white'
            : 'text-secondary hover:text-label border border-border hover:border-system-gray-3'
        }`}
        style={selected === null ? { backgroundColor: 'var(--picsellia-green)' } : {}}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat === selected ? null : cat)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            cat === selected
              ? 'bg-accent text-white'
              : 'text-secondary hover:text-label border border-border hover:border-system-gray-3'
          }`}
          style={cat === selected ? { backgroundColor: 'var(--picsellia-green)' } : {}}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
