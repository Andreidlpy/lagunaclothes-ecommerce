"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useEffect, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormError } from "@/components/auth/form-error";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormSuccess } from "@/components/auth/form.success";

import { LoginSchema } from "@/schemas";
import { login } from "@/actions/login";
import Link from "next/link";

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider"
      : "";

  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      code: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data.error);
          }
          if (data?.success) {
            form.reset();
            setSuccess(data.success);
          }
          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
  };

  const onToggleVisiblePasswor = (e: React.MouseEvent) => {
    setIsVisible(!isVisible);
    e.stopPropagation();
    e.preventDefault();
  };

  useEffect(() => {
    form.watch((value, { type }) => {
      if (value.password?.length === 0) {
        setIsVisible(false);
      }
    });
  }, [form.watch]);

  return (
    <CardWrapper
      headerTitle="LAGUNA"
      headerLabel="Welcome Back"
      backButtonLabel="Don't have an account?"
      backButtonHref=""
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {showTwoFactor && (
            <FormField
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Two Factor Code</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="123456"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {!showTwoFactor && (
            <>
              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        disabled={isPending}
                        placeholder="example@example.com"
                        {...field}
                      />
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
                        disabled={isPending}
                        type={!isVisible ? "password" : "text "}
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                    {form.watch("password").length > 0 && (
                      <div
                        onClick={(e) => onToggleVisiblePasswor(e)}
                        className="absolute bg-gray-400/20 right-0 top-6 cursor-pointer p-2 rounded-r-sm border-muted-foreground"
                      >
                        {isVisible ? <Eye /> : <EyeOff />}
                      </div>
                    )}
                    <Button
                      size="sm"
                      variant="link"
                      asChild
                      className="px-0 font-normal"
                    >
                      <Link href="/auth/reset">Forgot password?</Link>
                    </Button>
                  </FormItem>
                )}
              />
            </>
          )}
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <Button disabled={isPending} className="w-full" type="submit">
            {showTwoFactor ? "Confirm" : "Login"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
