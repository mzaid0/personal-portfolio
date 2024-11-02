// src/app/layout.tsx

import "./globals.css";
import { Poppins } from "next/font/google";
import DarkModeToggle from "../components/sub-components/DarkModeToggle"; // Dark mode toggle component import

// Poppins font ko initialize karain with weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Muhammad Zaid",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className="fixed top-0 right-0 p-4 z-10"> {/* z-index add for layer priority */}
          <DarkModeToggle /> 
        </header>
        <main>{children}</main> {/* Main tag for better accessibility */}
      </body>
    </html>
  );
}
