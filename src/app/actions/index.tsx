"use server"
import { db } from "@/db";
import { redirect } from "next/navigation";


export const updateSnippet = async (id: number, code: string) => {
   // console.log(value);
    await db.snippet.update({
    where: {
      id
    },
    data: {
      code
    }
  });
  redirect(`/snippets/${id}`);
  }

  export const deleteSnippet = async (id: number) => {
    // console.log(value);
     await db.snippet.delete({
     where: {
       id
     }
   });
   redirect("/");
   }
