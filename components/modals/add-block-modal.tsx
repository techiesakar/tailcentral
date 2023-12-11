"use client";
import { z } from "zod";
import axios from "axios";
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
} from "../ui/form";

const AddBlockModal = () => {
  const router = useRouter();

  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === "addBlock";
  const [message, setMessage] = useState("");

  const FormSchema = z.object({
    title: z
      .string()
      .min(3, {
        message: "Block must be at least 2 characters",
      })
      .max(20),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      const res = await axios.post("/api/blocks", values);
      setMessage(res.data.message);
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
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="mb-3">Add New Block</DialogTitle>
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
                    <FormLabel>Block Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Block Name"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          handleInputChange();
                        }}
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.title?.message || message || null}
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

export default AddBlockModal;
