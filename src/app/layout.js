import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/components/context/ThemeContext";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Image from "next/image";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Kayess Internationals | Premium Guar Gum, Xanthan Gum & Natural Gums",
  description: "Kayess Internationals is a leading supplier of high-quality Guar Gum, Xanthan Gum, Tragacanth Gum, and other natural hydrocolloids. Serving food, industrial, and pharmaceutical industries worldwide.",
  keywords: "Guar Gum Powder, Xanthan Gum, Tragacanth Gum, Guar Meal, Kayess Internationals, Hydrocolloids, Food Additives, Industrial Gums",
  openGraph: {
    title: "Kayess Internationals | Premium Natural Gums & Hydrocolloids",
    description: "Leading supplier of Guar Gum, Xanthan Gum, and other natural gums. Quality assured and certified.",
    url: "https://kayessinternationals.com",
    siteName: "Kayess Internationals",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kayess Internationals | Premium Natural Gums",
    description: "Leading supplier of Guar Gum, Xanthan Gum, and more.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                <a
                  href="https://wa.me/8437020131"
                  className="whatsapp-float"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/whatsapp.svg"
                    alt="WhatsApp"
                    width={48}
                    height={48}
                  />
                </a>
                <main>{children}</main>
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
