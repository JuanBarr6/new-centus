import createMiddleware from "next-intl/middleware";
import {routing} from "@/features/lib/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
