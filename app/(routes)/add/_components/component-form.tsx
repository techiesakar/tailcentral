"use client";
import { z } from "zod";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { createComponent, findAllBlocks } from "@/app/action";
import { ComponentSchema } from "@/types/schema";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import FileUpload from "@/components/file-upload";


type BlockItemType = {
    id: string;
    title: string;
    slug: string;
};


export default function ComponentForm() {

    const router = useRouter();

    const [blocks, setAllBlocks] = useState<BlockItemType[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchAllBlocks = await findAllBlocks();
                setAllBlocks(fetchAllBlocks);
            } catch (error) {
                console.error(error);
                setAllBlocks([]);
            }
        };

        fetchData()
    }, []);



    const form = useForm<z.infer<typeof ComponentSchema>>({
        resolver: zodResolver(ComponentSchema),
        defaultValues: {
            title: "",
            code: "",
            blockSlug: "",
            darkThumb: "",
            lightThumb: ""
        },
    });

    const onSubmit = async (values: z.infer<typeof ComponentSchema>) => {
        try {
            await createComponent(values);
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 mt-3"
            >
                <div className="w-full flex md:flex-row flex-col gap-6 items-center">

                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Component Name"
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e);
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="blockSlug"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Block</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="w-[280px]">
                                            <SelectValue
                                                placeholder="Select a Block"
                                                className="capitalize"
                                            />
                                        </SelectTrigger>
                                        <SelectContent className="capitalize">
                                            <SelectGroup>
                                                <SelectLabel>Blocks</SelectLabel>

                                                {blocks.map((item) => (
                                                    <SelectItem
                                                        key={item.slug}
                                                        value={item.slug}
                                                        className="capitalize"
                                                    >
                                                        {item.title}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>


                <div className="w-full flex gap-6">
                    <FormField
                        control={form.control}
                        name="lightThumb"
                        render={({ field }) => (
                            <FormItem>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <FormLabel>Light Image</FormLabel>
                                    <FormControl>

                                        <FileUpload
                                            endpoint="componentThumb"
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="darkThumb"
                        render={({ field }) => (
                            <FormItem>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <FormLabel>Dark Image</FormLabel>
                                    <FileUpload
                                        endpoint="componentThumb"
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Code</FormLabel>
                            <FormControl>
                                <Textarea
                                    className="min-h-[400px]"
                                    placeholder="Component Name"
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e);
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}