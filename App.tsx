import React, { useState } from "react";
import JSONEditor from "./JSONEditor";
import FormPreview from "./FormPreview";

const App: React.FC = () => {
  const [schema, setSchema] = useState<object>({});
  const [error, setError] = useState<string>("");

  const handleJSONChange = (json: string) => {
    try {
      const parsed = JSON.parse(json);
      setSchema(parsed);
      setError("");
    } catch (e) {
      setError("Invalid JSON. Please check your syntax.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen">
      <div className="w-full lg:w-1/2 p-4">
        <JSONEditor
          json={JSON.stringify(schema, null, 2)}
          onJSONChange={handleJSONChange}
          error={error}
        />
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <FormPreview schema={schema} />
      </div>
    </div>
  );
};

export default App;
