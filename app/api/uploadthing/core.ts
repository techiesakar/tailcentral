import { auth } from "@/auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";
const f = createUploadthing();


const handleAuth = async () => {

    const session = await auth();

    if (!session?.user?.email) throw new Error("Unauthorized");
    return { userId: session.user.email };

}

export const ourFileRouter = {
    componentThumb: f({ image: { maxFileSize: "4MB" } })
        .middleware(() => handleAuth())
        .onUploadComplete(() => { }), messageFile: f(["image", "pdf"])
            .middleware(() => handleAuth())
            .onUploadComplete(() => { }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;