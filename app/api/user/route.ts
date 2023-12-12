import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import client from "@/app/utils/db";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    const userExist = await client.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userExist) {
      return NextResponse.json({ message: "User already exists", status: 409 });
    }
    const user = await client.user.create({
      data: {
        name: name,
        email: email,
        password: await hash(password, 10),
      },
    });

    if (user) {
      return NextResponse.json({
        status: 200,
        user,
      });
    }
  } catch (error) {
    return new NextResponse("Internal Service Error", { status: 500 });
  }
}
