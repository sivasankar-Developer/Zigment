import React from "react";

interface JSONEditorProps {
  json: string;
  onJSONChange: (value: string) => void;
  error?: string;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ json, onJSONChange, error }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">JSON Editor</h2>
      <textarea
        className="w-full h-96 border p-2 rounded-lg"
        value={json}
        onChange={(e) => onJSONChange(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default JSONEditor;
