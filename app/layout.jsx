import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CartHydration from "@/components/cart-hydration";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ADDFRA Limited - Custom Automobile Solutions",
  description:
    "Specializing in customized automobiles, refrigerated trucks, trailers, and vans in Ghana and internationally.",
  generator: "v0.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <CartHydration>
            <Header />
            {children}
            <Footer />
          </CartHydration>
        </Providers>
      </body>
    </html>
  );
}

import "./globals.css";
