"use client";
import { useFormState } from "react-dom";
import { Button, Input, Textarea } from "@nextui-org/react";
import { ThemeSwitcher } from "@/components/layout-wrapper";
import { createSnippet } from "@/app/actions";

const Text = ({children}: {children: React.ReactNode}) => {
  return <p className="text-red-400 font-bold py-2 px-4">{children}</p>;
};

export default function SnippetCreatePage() {
  const [formState, action] = useFormState(createSnippet, {
    message: "",
  });
  return (
    <main className="flex flex-col justify-center pl-20 pr-20 pt-10 pb-10">
      <header>
        <div className="flex justify-between flex-row  p-0 mb-5">
          <div className="text-xl font-bold">SnipAPP</div>
          <div>
            <ThemeSwitcher />
          </div>
        </div>
      </header>
      <hr className="w-full font-bold mb-10"></hr>
      <form
        action={action}
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

        {formState.message !== "" && <Text>{formState.message}</Text>}

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
