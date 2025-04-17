import { NextRequest } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    const body = await req.json()
    const user = await prisma.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })
    console.log(user)
    return Response.json({ message: "Your are logged in" })
}