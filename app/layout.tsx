import Navbar from "@/components/shared/navbar";
import "./globals.css";
import Footer from "@/components/shared/footer";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="corporate">
        <body>
          <div>
            <Navbar />
            <div className="min-h-screen ">{children}</div>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
