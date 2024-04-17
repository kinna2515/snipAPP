import { db } from "@/db";
//import Link from "next/link";
import Editor from "@monaco-editor/react";
import { notFound } from "next/navigation"; // if id incorrect (in Integer)
import { Button, Link } from "@nextui-org/react";
import { ThemeSwitcher } from "@/components/layout-wrapper"
import { deleteSnippet } from "@/app/actions";
import SnippetViewer from "@/components/snippet-viewer"


export default async function SnippetView(props: any) {
  const { id } = props.params;
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(id),
    },
  });

  const deleteSnippetAction = deleteSnippet.bind(null, parseInt(id));


  if (!snippet) {
    return notFound();
  }
  return (
    <div>
      <header>
        <div className="flex justify-between  flex-row p-5">
          <div className="text-xl font-bold">SnipAPP</div>
          <div><ThemeSwitcher/></div>
        </div>
      </header>
      <hr className="w-full font-bold"></hr>
      <div className="flex justify-between items-center flex-row mb-5">
        <h1 className="text-xl font-bold ml-5">View Snippet</h1>
        <div className="flex flex-row gap-5 mt-5 mr-5">
          <Button
            href={`/snippets/${id}/edit`}
            as={Link}
            color="primary"
            variant="ghost"
            radius="sm"
          >
            Edit
          </Button>

          <form action={deleteSnippetAction}>
              <Button color="danger" variant="ghost" radius="sm" type="submit">
                Delete
              </Button>
          </form>
        </div>
      </div>


      <SnippetViewer
      code={snippet.code}
      />
      
    </div>

  );
}

export async function generateStaticParams() {
  const snippetList = await db.snippet.findMany()
  return snippetList.map(({id}) => ({
    id: id.toString(),
  }))
} 