"use server";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import client from "./utils/db";

export async function addBlock(formData: FormData) {
  const blockTitle = formData.get("title");
  const session = await getServerSession(authOptions);
  const userRoles = session?.user?.roles;
}
