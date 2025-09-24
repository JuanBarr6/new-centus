"use client";

import {useState} from "react";
import {Input} from "@/features/components/ui/input";
import {Button} from "@/features/components/ui/button";
import {Card, CardContent, CardHeader} from "@/features/components/ui/card";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <Card className="flex aspect-[2/1] w-full max-w-2xl flex-col justify-center rounded-xl border-0 bg-white p-10 shadow-lg">
        <CardHeader className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-2">
            <img src="/Logo.svg" alt="CENTUS Logo" className="h-16 w-auto" />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Iniciar sesión</h2>
            <p className="text-sm text-gray-600">Centraliza tus actividades en Centus</p>
          </div>
        </CardHeader>

        <CardContent className="mx-auto w-full max-w-md space-y-6">
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Correo
            </label>
            <div className="relative">
              <Input id="email" type="email" placeholder="ejemplo@correo.com" className="pr-30" />
              <img
                src="/Correo.svg"
                alt="Icono correo"
                className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="pr-10"
              />
              <img
                src="/Contraseña.svg"
                alt="Icono contraseña"
                className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>

          <Button
            className="w-full rounded-full py-3 text-lg font-semibold text-white"
            style={{backgroundColor: "var(--secondary)"}}
          >
            INICIAR SESIÓN
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
