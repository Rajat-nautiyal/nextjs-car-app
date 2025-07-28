"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const SignUp = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const username = formData.get("name") as string;
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      if (password.trim().length < 6) {
        toast("Error", {
          description: "Password length must be larger than 6",
          duration: 2000,
        });
        return;
      }
      const res = await fetch("/api/auth/sign-up", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ username, email, password }),
      });
      const message = await res.json();
      if (message?.error) {
        toast("Error", {
          description: message.error,
          duration: 3000,
        });
      } else if (message?.message === "Success") {
        setOpen(false);
        toast(message.message, {
          description: message.user.name + " " + "successfully signed up",
          duration: 2000,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Sign Up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create Profile</DialogTitle>
            <DialogDescription>
              Join us to enjoy the full ride of our services
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3 pt-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" defaultValue="Rajat" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" defaultValue="demo@gmail.com" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                defaultValue="123456"
              />
            </div>
          </div>
          <DialogFooter className="pt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Sign Up</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
