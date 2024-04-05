"use client";
import { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { Button } from "@nextui-org/react";
import { updateSnippet } from "@/app/actions";
import { useState } from "react";

type SnippetEpditoProps = {
  snippet: Snippet;
};

export default function SnippetEditor({ snippet }: SnippetEpditoProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const handleSubmit = () => {
    updateSnippet(snippet.id, code);
  };
  return (
    <>
      <Editor
        height="60vh"
        theme="vs-light"
       className="m-5 bordered"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        onChange={handleEditorChange}
      />
      <Button
        className="mt-7 ml-4"
        color="primary"
        variant="ghost"
        radius="sm"
        onClick={handleSubmit}
      >
        Save
      </Button>
    </>
  );
}
