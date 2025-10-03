"use client";

import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

import {Button} from "@/features/components/ui/button";
import {Input} from "@/features/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/features/components/ui/form";

import {Alert, AlertDescription, AlertTitle} from "@/features/components/ui/alert";
import {XCircle} from "lucide-react";
import Image from "next/image";

const formSchema = z.object({
  code: z.string().min(4, {message: "El código debe tener mínimo 4 caracteres"}),
  email: z.string().email("Correo inválido"),
});

export default function SecurityCodePage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex min-h-screen w-full bg-white">
      
      <div className="flex w-full flex-col items-center justify-center px-8 md:w-1/2">
        <div className="mb-6 flex items-center gap-2">
          <img src="/Logo.svg" alt="CENTUS Logo" className="h-16 w-auto" />
        </div>

        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
          <h2 className="mb-2 text-center text-2xl font-bold text-gray-800">Código de seguridad</h2>
          <p className="mb-6 text-center text-sm text-gray-500">
            Código enviado al correo electrónico. Recuerda revisar la carpeta de correos no deseados
            o spam.
          </p>

          
          {Object.keys(form.formState.errors).length > 0 && (
            <Alert
              variant="destructive"
              className="relative mb-4 flex items-start gap-3 rounded-md border p-4 shadow-sm"
            >
              <XCircle className="mt-0.5 h-5 w-5 text-red-500" />
              <div className="flex-1">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  {form.formState.errors.code?.message ||
                    form.formState.errors.email?.message ||
                    "Ocurrió un error con los datos ingresados"}
                </AlertDescription>
              </div>
            </Alert>
          )}

          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="code"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Código</FormLabel>
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
                render={({field}) => (
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
                className="w-full rounded-full py-2 text-sm font-semibold text-white"
                style={{backgroundColor: "var(--secondary)"}}
              >
                VALIDAR
              </Button>
            </form>
          </Form>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-500">¿Aún no recibes el código? </span>
            <button className="text-purple-600 hover:underline">Reenviar ahora</button>
          </div>
        </div>
      </div>

      
      <div className="hidden w-1/2 items-center justify-center bg-white md:flex">
        <Image
          src="/Fondo_otp.svg"
          alt="Fondo OTP"
          width={6100}
          height={1600}
          className="h-auto w-[110%] object-contain"
          priority
        />
      </div>
    </div>
  );
}
