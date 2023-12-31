"use client";

import * as z from "zod";
import { useTheme } from "next-themes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Eye,
  EyeOff,
  LoaderIcon,
  Monitor,
  Moon,
  SunMoon,
  User,
} from "lucide-react";
import { EventHandler, useState } from "react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

const AdminPage = () => {
  const { setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    router.push("/lg-admin/dashboard");
  };

  const onToggleVisiblePasswor = (e: React.MouseEvent) => {
    setIsVisible(!isVisible);
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    // TODO>  LOGIN FORM ADMIN ONLY
    <div className="flex items-center justify-center h-screen dark:bg-black bg-[#f3f4f6]">
      <div className="bg-white dark:bg-black border p-8 rounded-sm shadow-lg">
        <h3 className="text-xl font-semibold text-black dark:text-white">
          Sign in to your account
        </h3>
        <p className="text-muted-foreground text-sm">Enter your information</p>
        <Separator className="my-4" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      className="pr-11"
                      type={!isVisible ? "password" : "text "}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <div
                    onClick={(e) => onToggleVisiblePasswor(e)}
                    className="absolute bg-gray-400/20 right-0 top-6 cursor-pointer p-2 rounded-r-sm border-muted-foreground"
                  >
                    {isVisible ? <Eye /> : <EyeOff />}
                  </div>
                </FormItem>
              )}
            />
            <Button
              className="w-full bg-blue-500 hover:bg-blue-400 shadow-lg flex items-center"
              type="submit"
            >
              <span>Log In</span>
              <User className="ml-2 size-4" />
            </Button>
          </form>
        </Form>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default AdminPage;
