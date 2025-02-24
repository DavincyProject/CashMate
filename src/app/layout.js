import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { AppSidebar } from "../components/ui/app-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CashMate",
  description: " Like a best friend that helps you manage your cash flow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1">
            <SidebarTrigger />
            <div className="px-5 w-full">{children}</div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
