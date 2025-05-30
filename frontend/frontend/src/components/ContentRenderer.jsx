import React from 'react';
import ReactMarkdown from 'react-markdown';

const contentMap = {
  foundations: '# Foundations\n\nWelcome to Agentic AI foundations...',
  handsOn: '# Hands-On\n\nLet's code our first agent...',
  advanced: '# Advanced\n\nDeep dive into self-reflection...',
  projects: '# Projects\n\nCapstone project instructions...',
  resources: '# Resources\n\n- [Sutton & Barto]()',
};

export default function ContentRenderer({ moduleKey }) {
  const md = contentMap[moduleKey] || 'Select a module';
  return (
    <div className="prose p-6 bg-white shadow rounded">
      <ReactMarkdown>{md}</ReactMarkdown>
    </div>
  );
}
