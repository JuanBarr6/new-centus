interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center">
      {children}
    </div>
  );
}
