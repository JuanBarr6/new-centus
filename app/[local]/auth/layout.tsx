interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({children}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex w-1/2 items-center justify-center">{children}</div>

      <div className="flex w-1/2 items-center justify-center">
        <img src="/Fondo.svg" alt="Auth Illustration" className="h-auto w-full object-contain" />
      </div>
    </div>
  );
}
