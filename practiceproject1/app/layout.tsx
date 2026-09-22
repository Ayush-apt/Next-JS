import { Poppins } from "next/font/google";
import Nav from "../components/Nav"
import "./globals.css";

const poppins = Poppins({subsets:['latin'], weight:['400','600'], display: 'swap'})

export const metadata= {
  title: "Travel Guide Website",
  description: "Best Travel Guidence"
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${poppins.className} w-screen h-screen bg-black`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
