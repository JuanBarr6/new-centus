"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

import { Button } from "@/features/components/ui/button";
import { Input } from "@/features/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/features/components/ui/form";

import { XCircle, X } from "lucide-react";
import Image from "next/image";

export default function OTPForm() {
  const [showError, setShowError] = useState(true);
  const t = useTranslations("AuthMessages");

  // ✅ Schema con traducciones dinámicas
  const formSchema = z.object({
    code: z.string().min(4, { message: t("errors.codeMin") }),
    email: z.string().email(t("errors.emailInvalid")),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
      email: "",
    },
    mode: "onSubmit",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const firstError =
    form.formState.errors.code?.message ||
    form.formState.errors.email?.message ||
    "";

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 px-4 overflow-x-hidden">
      <div className="flex w-full max-w-6xl flex-col md:flex-row rounded-3xl shadow-lg overflow-hidden bg-white">
        
        {/* Columna izquierda */}
        <div className="flex flex-1 flex-col justify-center px-6 md:px-10 py-12">
          <div className="flex items-center gap-2 mb-6">
            <img src="/Logo.svg" alt="CENTUS Logo" className="h-16 w-auto" />
          </div>

          <h2 className="mb-1 text-xl font-semibold text-gray-800">{t("title")}</h2>
          <p className="mb-6 text-sm text-gray-500">{t("paragraph")}</p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-4">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("sendcode")}</FormLabel>
                    <FormControl>
                      <Input placeholder="123456" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="user@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-20 rounded-full py-1 text-sm font-semibold text-white"
                style={{ backgroundColor: "var(--secondary)" }}
              >
                {t("button")}
              </Button>
            </form>
          </Form>

          {firstError && showError && (
            <div className="mt-6 w-full max-w-sm rounded-md border border-red-500 bg-red-50 p-4 text-sm text-red-700 relative">
              <div className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold">Error</p>
                  <p>{firstError}</p>
                </div>
                <button
                  type="button"
                  className="absolute top-3 right-3 text-red-500 hover:text-red-700"
                  onClick={() => setShowError(false)}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          <div className="mt-4 text-sm">
            <span className="text-gray-500">{t("message")}</span>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center bg-white">
          <Image
            src="/Fondo_otp.svg"
            alt="Fondo OTP"
            width={500}
            height={500}
            className="object-contain max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
