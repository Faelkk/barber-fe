import { typePrimary, typeSecond } from "@/functions/font";
import "./globals.css";

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
        <div className="">{children}</div>
      </body>
    </html>
  );
}
