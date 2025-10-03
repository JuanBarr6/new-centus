"use client";

import {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/features/components/ui/input";
import {Button} from "@/features/components/ui/button";
import {Card, CardContent, CardHeader} from "@/features/components/ui/card";
import {useTranslations} from "next-intl";

const loginSchema = z.object({
  email: z.string().email("Debe ser un correo válido"),
  password: z.string().min(6, "La contraseña debe tener mínimo 6 caracteres"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const t = useTranslations("AuthMessages");

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Datos enviados:", data);
  };

  return (
    <div className="flex min-h-screen w-full bg-white">
      <div className="flex w-full flex-col items-center justify-center px-8 md:w-1/2">
        <Card className="flex aspect-[2/1] w-full max-w-2xl flex-col justify-center rounded-xl border-0 bg-white p-10 shadow-lg">
          <CardHeader className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <img src="/Logo.svg" alt="CENTUS Logo" className="h-16 w-auto" />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">{t("login")}</h2>
              <p className="text-sm text-gray-600">
                {t("subtitle", {default: "Centraliza tus actividades en Centus"})}
              </p>
            </div>
          </CardHeader>

          <CardContent className="mx-auto w-full max-w-lg space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-base font-medium text-gray-700">
                  {t("email", {default: "Correo"})}
                </label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="ejemplo@correo.com"
                    className="w-full pr-12 text-base"
                    {...register("email")}
                  />
                  <img
                    src="/Correo.svg"
                    alt="Icono correo"
                    className="absolute top-1/2 right-3 h-6 w-6 -translate-y-1/2 text-gray-500"
                  />
                </div>
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div className="flex flex-col space-y-1">
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={t("Password")}
                    className="w-100 pr-12 text-base"
                    {...register("password")}
                  />
                  <img
                    src="/Contraseña.svg"
                    alt="Icono contraseña"
                    className="absolute top-1/2 right-3 h-6 w-6 -translate-y-1/2 cursor-pointer text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-40 rounded-full py-1 text-sm font-semibold text-white"
                style={{backgroundColor: "var(--secondary)"}}
              >
                {t("login")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="hidden w-1/2 items-center justify-center bg-white md:flex">
        <img src="/Fondo_otp.svg" alt="Fondo OTP" className="h-auto w-[110%] object-contain" />
      </div>
    </div>
  );
}
