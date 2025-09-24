import LateralNavBar from "@/features/sub-features/core/components/organism/lateral-nav-bar";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <div className="flex h-full w-full flex-row">
        <div className="flex h-full w-full flex-col md:flex-row">
          <LateralNavBar />
          <div className="flex h-full w-full flex-col p-8">{children}</div>
        </div>
      </div>
    </>
  );
}
