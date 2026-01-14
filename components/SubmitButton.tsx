import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
interface Props extends React.PropsWithChildren {
  className?: string;
}
function SubmitButton({ children ,className }: Props) {
  const { pending } = useFormStatus();
  return <Button type="submit" className={cn(className)} disabled={pending}>{pending ? <Loader2 size={30} className="animate-spin"/> : children}</Button>;
}

export default SubmitButton;
