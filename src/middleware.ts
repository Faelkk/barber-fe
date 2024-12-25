import { NextRequest, NextResponse } from "next/server";
import verifyToken from "./functions/verify-token";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value;

  const authenticated = token ? await verifyToken(token) : false;

  const isPublicPath = path === "/entrar" || path === "/criar-conta";

  const isPrivatePath = path.startsWith("/meus-horarios");

  if (isPublicPath && authenticated) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (isPrivatePath && !authenticated) {
    return NextResponse.redirect(new URL("/criar-conta", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/entrar",
    "/criar-conta",
    "/agendar-horario",
    "/meus-horarios/:path*",
    "/servicos",
    "/unidades/:path*",
  ],
};
