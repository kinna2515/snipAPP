import { db } from "@/db";
import { Button, Link } from "@nextui-org/react";
import { ThemeSwitcher } from "@/components/layout-wrapper";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  return (
    <div className="flex gap-5 flex-col ml-10 mt-10 mr-10">
      <header>
        <div className="flex justify-between items-center flex-row mb-5">
          <div className="text-xl font-bold">SnipAPP</div>
          <ThemeSwitcher />
        </div>
      </header>
      <hr className="w-full font-bold"></hr>
      <div className="flex justify-between items-center flex-row pt-5">
        <h1 className="text-xl font-bold">List of snippets</h1>
        <Button
          isBlock
          href="/snippets/new"
          as={Link}
          color="primary"
          variant="ghost"
          radius="sm"
        >
          New snippet
        </Button>
      </div>
      <div
        style={{ width: "50%" }}
        className="flex w-full mx-auto justify-center gap-5 flex-col mt-10"
      >
        {snippets.map(({ id, title, code }) => (
          <Button
            key={id}
            href={`/snippets/${id}`}
            as={Link}
            color="default"
            variant="shadow"
            size="md"
            radius="sm"
          >
            <h3>{title}</h3>
          </Button>
        ))}
      </div>
    </div>
  );
}
