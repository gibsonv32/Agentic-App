import React from 'react';

const modules = [
  { key: 'foundations', label: 'Foundations' },
  { key: 'handsOn', label: 'Hands-On' },
  { key: 'advanced', label: 'Advanced' },
  { key: 'projects', label: 'Projects' },
  { key: 'resources', label: 'Resources' },
];

export default function ModuleNav({ currentModule, onSelect }) {
  return (
    <aside className="w-64 bg-white shadow p-4">
      <ul>
        {modules.map(mod => (
          <li
            key={mod.key}
            className={mod.key === currentModule ? 'font-bold text-blue-600' : 'cursor-pointer hover:text-blue-500'}
            onClick={() => onSelect(mod.key)}
          >
            {mod.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}
