import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const jwtSecret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;

export default async function verifyToken(token: string): Promise<boolean> {
  if (!token) return false;

  try {
    await jwtVerify(token, new TextEncoder().encode(jwtSecret), {
      algorithms: ["HS256"],
    });

    return true;
  } catch {
    if (token) {
      (await cookies()).delete("token");
    }
    return false;
  }
}
