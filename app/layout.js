import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dev Components",
  description:
    "Crafting a Lightweight Website using In-House Components for Maximum Control",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} mx-auto max-w-[1400px] bg-primary`}>
        {children}
        {/* svg line patterns  */}
        <div className="svg-pattern absolute h-52 inset-0 -z-10 opacity-60">
          <div className="bg-gradient-to-t from-primary to-secondary/50 w-full h-full"></div>
        </div>
      </body>
    </html>
  );
}
