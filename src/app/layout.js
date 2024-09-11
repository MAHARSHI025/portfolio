import { DockDemo } from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Maharshi portfolio",
  description: "This is maharshi developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
        <DockDemo></DockDemo>
      </body>
    </html>
  );
}
