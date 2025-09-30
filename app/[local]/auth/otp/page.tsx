import Image from "next/image";
import SecurityCodeForm from "@/features/sub-features/auth/components/otp-form";

export default function SecurityPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 px-4">
      {/* Card principal */}
      <div className="grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 rounded-3xl shadow-lg overflow-hidden bg-white">
        
        {/* Columna izquierda: Formulario */}
        <div className="flex flex-col justify-center px-6 md:px-10 py-12">
          <SecurityCodeForm />
        </div>

        {/* Columna derecha: Imagen OTP */}
        <div className="flex items-center justify-center bg-white">
          <Image
            src="/Fondo_otp.svg"
            alt="Fondo OTP"
            width={500}
            height={500}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
