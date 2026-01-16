"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectContent } from "@radix-ui/react-select";
import { Checkbox } from "./ui/checkbox";
type ContactFormDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export function ContactFormDialog({ open, setOpen }: ContactFormDialogProps) {
  const handleSubmit = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      projectType: formData.get("project-type"),
      bookReel: formData.get("bookReel")==="on" ? true:false,
    };
    console.log(data);
    const request = await fetch("/api/send-msg", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const response = await request.json();
    if (response.success) {
      localStorage.setItem("contact-form", JSON.stringify({ isFilled: true }));
      redirect("/thanks");
    } else {
      toast.error(response.error);
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
        </DialogHeader>

        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="phone"
              placeholder="+91 xxxxx-xxxxx"
              required
            />
          </div>
          {/* Project Type */}
          <div className="space-y-2">
            <Label htmlFor="project-type">Project Type</Label>
            <Select name="project-type">
              <SelectTrigger className="w-full!">
                <SelectValue placeholder="Select Project Type" />
              </SelectTrigger>
              <SelectContent className="bg-black border-gray-200!">
                <SelectGroup>
                  <SelectItem value={"ecommere"}>Ecommerce</SelectItem>
                  <SelectItem value={"brand"}>Brand</SelectItem>
                  <SelectItem value={"Food"}>Food & Drink</SelectItem>
                  <SelectItem value={"Jewellery"}>Jewellery</SelectItem>
                  <SelectItem value={"Fashion"}>Fashion</SelectItem>
                  <SelectItem value={"Model"}>Model</SelectItem>
                  <SelectItem value={"Real Estate"}>Real Estate</SelectItem>
                  <SelectItem value={"AI Services"}>AI Services</SelectItem>
                  <SelectItem value={"other"}>Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Checkbox id="bookReel" name="bookReel" />
              <Label htmlFor="bookReel">I want to book a showreel presentation</Label>
            </div>
          </div>

          <DialogFooter>
            <SubmitButton className="w-full">Send Message</SubmitButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
