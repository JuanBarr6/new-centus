import Image from "next/image";
import SecurityCodeForm from "@/features/sub-features/auth/components/otp-form";

export default function SecurityPage() {
  return (
    <div className="grid w-full min-h-screen grid-cols-1 md:grid-cols-2 bg-white overflow-x-hidden">
      
      {/* Columna izquierda: Formulario */}
      <div className="flex flex-col justify-center px-6 md:px-10 py-12">
        <SecurityCodeForm />
      </div>

      {/* Columna derecha: Imagen completa OTP */}
      <div className="flex items-center justify-center bg-white overflow-hidden">
        <div className="w-full max-w-[500px]">
          <Image
            src="/Fondo_otp.svg"
            alt="Fondo OTP"
            width={600}
            height={600}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
