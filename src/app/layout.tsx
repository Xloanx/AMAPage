import type { Metadata } from "next";
import Head from 'next/head';
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import Header from './component/header'
import Footer from './component/footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Xloanx",
    template: "%s :: XloanxPage"
  },
  description: "Personal Web page for Abiodun Muhammad-Ahmad Odukaye"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
			  <link rel='icon' href='/favicon.png' />
		  </Head>
      <body>
        <Header />
        <div className="content">
          {children}
        </div>
        <Footer />  
      </body>
    </html>
  );
}
