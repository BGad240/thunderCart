import NextAuth from "next-auth";
import { authOptions } from "@/app/lib/nextAuth";
const handlers = NextAuth(authOptions)

export { handlers as GET, handlers as POST }