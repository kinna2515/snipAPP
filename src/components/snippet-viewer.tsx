"use client";
import Editor from "@monaco-editor/react";

type SnippetViewerProps = {
 code: string;
};

export default function SnippetViewer({code}: SnippetViewerProps) {

  return (
    <>
      <Editor
        height="60vh"
        theme="vs-light"
       className="m-5 bordered"
        defaultLanguage="javascript"
        defaultValue={code}
        options={{readOnly: true}}
       // onChange={handleEditorChange}
      />
     
    </>
  );
}
