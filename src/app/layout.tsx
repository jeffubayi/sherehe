import type { Metadata } from "next";
import ThemeRegistry from "@/components/ThemeRegistry";
import NavBar from "@/components/NavBar";
import { CssBaseline } from "@mui/joy";

export const metadata: Metadata = {
  title: "Sherehe",
  description: "Find rentals, holidays and parties",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ThemeRegistry options={{ key: 'joy' }}>
      <CssBaseline />
      <NavBar />
      {children}
      </ThemeRegistry>
      </body>
    </html>
  );
}
