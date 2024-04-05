import { db } from "@/db";
import { Button, Input, Textarea } from "@nextui-org/react";
import { ThemeSwitcher } from "@/components/layout-wrapper";
import { redirect } from "next/navigation";

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    //this Server Action
    "use server";

    // take data in form and validate
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    //create data in database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);

    //redirect in main page
    redirect("/");
  }

  return (
    <main className="flex flex-col justify-center pl-20 pr-20 pt-10 pb-10">
      <header>
        <div className="flex justify-between flex-row  p-0 mb-5">
          <div className="text-xl font-bold">SnipAPP</div>
          <div><ThemeSwitcher /></div>
        </div>
      </header>
      <hr className="w-full font-bold mb-10"></hr>
      <form
        action={createSnippet}
        className="flex flex-col w-full items-center gap-10 p-2 rounded"
        style={{ border: "1px solid lightgray" }}
      >
        <h1 className="pt-5">Create Snippet</h1>
        <div className="flex flex-col w-full gap-4">
          <div className="flex gap-4  ml-5 mr-5">
            <Input
              name="title"
              type="text"
              label="title"
              labelPlacement="outside"
              placeholder="Enter title"
            />
          </div>
          <div className="flex gap-4 ml-5 mr-5">
            <Textarea
              id="code"
              name="code"
              label="code"
              labelPlacement="outside"
              placeholder="Enter your code"
              className="w-full"
            />
          </div>
        </div>
        <Button
          className="mb-5 mt-5"
          type="submit"
          color="primary"
          variant="ghost"
          radius="sm"
        >
          Save
        </Button>
      </form>
    </main>
  );
}
