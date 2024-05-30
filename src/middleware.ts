import { clerkMiddleware } from "@clerk/nextjs/server";
import { authMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware({
//   publicRoutes : ['api/webhooks/clerk']
// });
export default authMiddleware({
  publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe']
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};