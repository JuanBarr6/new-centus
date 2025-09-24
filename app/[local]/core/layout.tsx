import LateralNavBar from "@/features/sub-features/core/components/organism/lateral-nav-bar";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-full w-full flex-col md:flex-row">
      <LateralNavBar />
      <div className="h-full w-full p-8">{children}</div>
    </div>
  );
}
