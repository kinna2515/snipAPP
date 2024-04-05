import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient;

/*db.snippet.create({
    data: {
        title: "First snippet",
        code: "const first = `code`;"
    }
})*/
