"use client";
import { z } from "zod";
import { useModal } from "@/hooks/use-modal-store";
import { useState } from "react";
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
  DialogTrigger,
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
import { createBlock } from "@/app/action";
import { BlockSchema } from "@/types/schema";

const AddComponentModal = () => {
  const router = useRouter();

  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === "addComponent";
  const [message, setMessage] = useState("");

  const form = useForm<z.infer<typeof BlockSchema>>({
    resolver: zodResolver(BlockSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof BlockSchema>) => {
    try {
      const result = await createBlock(values);
      setMessage(result.message);
      handleClose();
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
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.title?.message || message}
                    </FormMessage>
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
