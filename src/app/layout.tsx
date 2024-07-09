import type { Metadata } from "next";
import Head from 'next/head';
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import './globals.css'
import Header from './component/header'
import Footer from './component/footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Xloanx",
    template: "%s :: XloanxPage"
  },
  description: "Abiodun Muhammad-Ahmad Odukaye | Software Engineer | Trainer | AI Enthusiast"
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
		  </Head>
      <body>
        <Header />
          <Theme>
          {children}
          </Theme>
        <Footer />  
      </body>
    </html>
  );
}
