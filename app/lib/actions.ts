"use server";
import { db } from "./db";

export const addBlock = async (name: string) => {
  try {
    const isBlockExist = await db.block.findUnique({
      where: {
        title: name,
      },
    });

    if (isBlockExist) {
      return {
        statusCode: 409,
        status: "failed",
        message: "Oops! Block already exists",
      };
    }
    const result = await db.block.create({
      data: {
        title: name,
      },
    });
    return {
      statusCode: 201,
      status: "success",
      message: `${name} Successfully Added`,
      result,
    };
  } catch (e) {
    return {
      statusCode: 409,
      status: "failed",
      message: "Oops! Something went wrong",
    };
  }
};
