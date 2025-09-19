import SecurityCodeForm from "@/features/sub-features/auth/components/otp-form";
 
export default function SecurityPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4"> 
     
      <SecurityCodeForm />
 
      <div className="mt-4 text-sm">
        <span className="text-gray-500">¿Aún no recibes el código? </span>
        <button className="text-purple-600 hover:underline">Reenviar ahora</button>
      </div>
    </div>
  );
}
 
 