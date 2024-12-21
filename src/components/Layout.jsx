import "@/styles/globals.css";
import { VT323 } from "next/font/google";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>CTRL Code Solutions</title>
        <meta name="description" content="Next-gen solutions with retro soul" />
      </head>
      <body className={vt323.className}>
        {children}
      </body>
    </html>
  );
}
