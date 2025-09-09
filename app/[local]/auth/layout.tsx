import LateralNav from "@/features/sub-features/auth/components/lateral-nav";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({children}: AuthLayoutProps) {
  return (
    <>
      <LateralNav /> {children}
    </>
  );
}
