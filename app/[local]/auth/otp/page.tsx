import Image from "next/image";
import SecurityCodeForm from "@/features/sub-features/auth/components/otp-form";

export default function SecurityPage() {
  return (
    <div className="grid w-full min-h-screen grid-cols-1 md:grid-cols-2 bg-white">
      
      {/* Columna izquierda: Formulario */}
      <div className="flex flex-col justify-center px-10 py-12">
        <SecurityCodeForm />

        <div className="mt-4 text-sm">
          <span className="text-gray-500">¿Aún no recibes el código?</span>
          <button className="text-purple-600 hover:underline ml-1">
            Reenviar ahora
          </button>
        </div>
      </div>

      {/* Columna derecha: Imagen completa OTP */}
      <div className="flex items-center justify-center bg-white">
        <Image
          src="/Fondo_otp.svg"
          alt="Fondo OTP"
          width={600}
          height={600}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
