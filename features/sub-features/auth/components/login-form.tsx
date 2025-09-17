"use client";

import {useForm, ControllerRenderProps} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/features/components/ui/form";
import {Input} from "@/features/components/ui/input";
import {Button} from "@/features/components/ui/button";
import {useTranslations} from "next-intl";

const formSchema = z.object({
  email: z
    .string()
    .min(2, {message: "El email es requerido"})
    .max(50, {message: "El email es muy largo"})
    .email({message: "El email no es válido"}),
  password: z
    .string()
    .min(6, {message: "La contraseña debe tener al menos 6 caracteres"})
    .max(50, {message: "La contraseña es muy larga"}),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({
            field,
          }: {
            field: ControllerRenderProps<z.infer<typeof formSchema>, "email">;
          }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="tu@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({
            field,
          }: {
            field: ControllerRenderProps<z.infer<typeof formSchema>, "password">;
          }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Iniciar sesión
        </Button>
      </form>
    </Form>
  );
}
