"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

const formSchema = z.object({
  code: z.string().min(4, { message: "El código debe tener mínimo 4 caracteres" }),
  email: z.string().email("Correo inválido"),
});

export default function SecurityCodePage() {
  const [showError, setShowError] = useState(true);

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

  // ✅ Mensaje de error principal
  const firstError =
    form.formState.errors.code?.message ||
    form.formState.errors.email?.message ||
    "";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/Logo.svg" alt="CENTUS Logo" className="h-16 w-auto" />
      </div>

      {/* Título */}
      <h2 className="mb-1 text-xl font-semibold text-gray-800">Código de seguridad</h2>
      <p className="mb-6 text-center text-sm text-gray-500">
        Código enviado al correo electrónico. Recuerda revisar la carpeta de correos no deseados o spam
      </p>

      {/* Formulario */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-4">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ingresa aquí el código recibido</FormLabel>
                <FormControl>
                  <Input placeholder="Ej: 123456" {...field} />
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
                <FormLabel>Correo</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="usuario@ejemplo.com" {...field} />
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
            VALIDAR
          </Button>
        </form>
      </Form>

      {/* ✅ Bloque de error como el del profe */}
      {firstError && showError && (
        <div className="mt-6 w-full max-w-sm rounded-md border border-red-500 bg-red-50 p-4 text-sm text-red-700 relative">
          <div className="flex items-start gap-3">
            <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
            <div className="flex-1">
              <p className="font-semibold">Error Message</p>
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

      {/* Link reenviar */}
      <div className="mt-4 text-sm">
        <span className="text-gray-500">¿Aún no recibes el código? </span>
        <button className="text-purple-600 hover:underline">Reenviar ahora</button>
      </div>
    </div>
  );
}
