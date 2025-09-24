import {NextIntlClientProvider, hasLocale} from "next-intl";
import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import {notFound} from "next/navigation";

import "../globals.css";
import {routing} from "@/features/lib/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hoga",
  description: "Base Hoga Next.js App",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{local: string}>;
}>) {
  const {local} = await params;

  if (!hasLocale(routing.locales, local)) {
    notFound();
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-surface text-on-surface antialiased`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
// import "../globals.css";
// import LateralNavBar from "@/features/sub-features/core/components/organism/lateral-nav-bar";
// export default function RootLayout({children}: {children: React.ReactNode}) {
//   return (
//     <html lang="en">
//       <body>
//         <div className="flex h-full w-full flex-row">
//           <div className="flex h-full w-full flex-col md:flex-row">
//             <LateralNavBar />
//           </div>
//           <div className="flex h-full w-full flex-col p-8">{children}</div>
//         </div>
//       </body>
//     </html>
//   );
// }
