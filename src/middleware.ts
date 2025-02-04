import { NextRequest, NextResponse } from "next/server";
import verifyToken from "./functions/verify-token";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value;

  const authenticated = token ? await verifyToken(token) : false;

  const isPublicPath = path === "/entrar" || path === "/criar-conta";

  const isPrivatePath = [
    "/agendar-horario-by-barber",
    "/meus-horarios",
    "/agendar-horario",
  ].some((route) => {
    return path.startsWith(route);
  });

  if (isPublicPath && authenticated) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isPrivatePath && !authenticated) {
    return NextResponse.redirect(new URL("/criar-conta", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/entrar",
    "/criar-conta",
    "/agendar-horario/:path*",
    "/agendar-horario-by-barber/:path*",
    "/meus-horarios/:path*",
    "/servicos",
    "/unidades/:path*",
  ],
};
