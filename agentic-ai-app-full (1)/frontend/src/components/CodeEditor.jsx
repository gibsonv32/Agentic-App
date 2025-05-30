import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';

async function fetchCursorSuggestions(code) {
  const resp = await fetch('http://localhost:8000/cursor/suggestions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code }),
  });
  if (!resp.ok) throw new Error('Suggestions fetch failed');
  const data = await resp.json();
  return data.suggestions;
}

async function executeCode(code) {
  const resp = await fetch('http://localhost:8000/execute', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code }),
  });
  if (!resp.ok) throw new Error('Code execution failed');
  return resp.json();
}

export default function CodeEditor({ initialCode='' }) {
  const [code, setCode] = useState(initialCode);
  const [suggestions, setSuggestions] = useState([]);
  const [output, setOutput] = useState(null);
  const editorRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (code.trim()) {
        try {
          const sug = await fetchCursorSuggestions(code);
          setSuggestions(sug);
        } catch (e) {
          console.error(e);
        }
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [code]);

  const handleRun = async () => {
    try {
      const result = await executeCode(code);
      setOutput(result);
    } catch (e) {
      setOutput({ error: e.message });
    }
  };

  return (
    <div className="flex flex-col">
      <Editor
        height="400px"
        defaultLanguage="python"
        value={code}
        onChange={setCode}
        onMount={editor => editorRef.current = editor}
      />
      <button onClick={handleRun} className="mt-2 px-4 py-2 bg-green-600 text-white rounded">Run</button>
      {suggestions.length>0 && (
        <div className="mt-4 bg-gray-100 p-2 rounded">
          <h4 className="font-semibold">Cursor AI Suggestions:</h4>
          <ul className="list-disc pl-5">
            {suggestions.map((s,i)=><li key={i}>{s.text}</li>)}
          </ul>
        </div>
      )}
      {output && <pre className="mt-4 bg-black text-white p-3 rounded">{output.stdout||output.error}</pre>}
    </div>
  );
}
