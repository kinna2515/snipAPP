"use client";
import Editor from "@monaco-editor/react";
import { useContext } from 'react';
import {ThemeContext} from "@/components/themeContext";

type SnippetViewerProps = {
  code: string;
};

export default function SnippetViewer({ code }: SnippetViewerProps) {
 const curretTheme = useContext(ThemeContext)
  return (
    <>
      <Editor
        height="60vh"
        theme= {curretTheme}
        className="m-5 bordered"
        defaultLanguage="javascript"
        defaultValue={code}
        options={{ readOnly: true }}
        // onChange={handleEditorChange}
      />
    </>
  );
}
