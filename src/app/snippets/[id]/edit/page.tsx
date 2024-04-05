import { db } from "@/db";
import { notFound } from "next/navigation"; // if id incorrect (in Integer)
import SnippetEditor from "@/components/snippet-editor";
import { ThemeSwitcher } from "@/components/layout-wrapper"

export default async function SnippetView(props: any) {
  const { id } = props.params;
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(id),
    },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <header>
        <div className="flex justify-between  flex-row p-5">
          <div className="text-xl font-bold">SnipAPP</div>
          <div><ThemeSwitcher /></div>
        </div>
      </header>
      <hr className="w-full font-bold"></hr>
      <div className="flex justify-between items-center flex-row mb-5 mt-5 p-2">
        <h1 className="text-xl font-bold ml-5">Edit Snippet</h1>
      </div>
      <SnippetEditor snippet = {snippet}/>
      {/*<pre className="p-3 border founded bg-gray-200">
        <code>{snippet.code}</code>
      </pre>*/}
    </div>
  );
}