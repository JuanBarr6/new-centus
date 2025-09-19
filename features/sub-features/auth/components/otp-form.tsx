"use client";
 
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
 
 
const formSchema = z.object({
  code: z.string().min(4, { message: "El código debe tener mínimo 4 caracteres" }),
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
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
     
      <h1 className="text-3xl font-bold text-purple-600 mb-2">CENTUS</h1>
 
      <h2 className="text-xl font-semibold text-gray-800 mb-1">Código de seguridad</h2>
      <p className="text-sm text-gray-500 mb-6 text-center">
        Código enviado al correo electrónico. Recuerda revisar la carpeta de correos no deseados o spam
      </p>
 
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-sm space-y-4"
        >
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
                  <Input
                    type="email"
                    placeholder="usuario@ejemplo.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
 
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
            VALIDAR
          </Button>
        </form>
      </Form>
 
      <div className="mt-4 text-sm">
        <span className="text-gray-500">¿Aún no recibes el código? </span>
        <button className="text-purple-600 hover:underline">Reenviar ahora</button>
      </div>
    </div>
  );
}