"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const updateSnippet = async (id: number, code: string) => {
  // console.log(value);
  await db.snippet.update({
    where: {
      id,
    },
    data: {
      code,
    },
  });
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
};

export const createSnippet = async (
  formState: { message: string },
  formData: FormData
) => {
  // take data in form and validate
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  try {
    if (typeof title !== "string" || title.length <= 3) {
      return {
        message:
          "Title couldn't be empty and should be longer (not less 3 symbols)",
      };
    }

    if (typeof code !== "string" || code.length <= 10) {
      return {
        message:
          "Code couln't be empty and should be longer (not less 10 symbols)",
      };
    }

    //create data in database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
 
   
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    } else {
      return {
        message: "Something went wrong",
      };
    }
  }

  revalidatePath("/");
  //redirect in main page
  redirect("/");
};

export const deleteSnippet = async (id: number) => {
  // console.log(value);
  await db.snippet.delete({
    where: {
      id,
    },
  });
  
  revalidatePath("/");
  redirect("/");
};
