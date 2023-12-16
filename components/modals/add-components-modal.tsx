"use client";
import { z } from "zod";
import { useModal } from "@/hooks/use-modal-store";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createBlock, createComponent, findAllBlocks } from "@/app/action";
import { ComponentSchema } from "@/types/schema";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
type BlockItemType = {
  id: string;
  title: string;
  slug: string;
};
const AddComponentModal = () => {
  const router = useRouter();
  const [allBlocks, setAllBlocks] = useState<BlockItemType[]>([]);
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === "addComponent";
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchAllBlocks = async () => {
      const navItems = await findAllBlocks();
      setAllBlocks(navItems);
    };
    fetchAllBlocks();
  }, []);

  const form = useForm<z.infer<typeof ComponentSchema>>({
    resolver: zodResolver(ComponentSchema),
    defaultValues: {
      title: "",
      code: "",
      blockId: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ComponentSchema>) => {
    try {
      await createComponent(values);
      // handleClose();
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    form.reset();
    setMessage("");
    onClose();
  };

  const handleInputChange = () => {
    setMessage("");
  };

  if (isModalOpen) {
    return (
      <Dialog open={isModalOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-screen-xl">
          <DialogHeader>
            <DialogTitle className="mb-3">Add New Component</DialogTitle>
            <DialogDescription className="text-xs">
              Individual blocks represents the categorized collection of
              tailwind components
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 mt-3"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Component Name"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          handleInputChange();
                        }}
                      />
                    </FormControl>{" "}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="blockId"
                render={({ field }) => (
                  <FormItem>
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
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Blocks</SelectLabel>

                            {allBlocks.map((item) => (
                              <SelectItem
                                key={item.id}
                                value={item.id}
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
                          handleInputChange();
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    );
  } else {
    return null;
  }
};

export default AddComponentModal;
