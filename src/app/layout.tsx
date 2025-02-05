import { typePrimary, typeSecond } from "@/functions/font";
import "./globals.css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import GlobalError from "./global-error";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${typePrimary.variable} ${typeSecond.variable} bg-Seashell-100`}
      >
        <div className="">
          <ErrorBoundary errorComponent={GlobalError}>{children}</ErrorBoundary>
        </div>
      </body>
    </html>
  );
}
