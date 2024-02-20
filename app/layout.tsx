import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import './theme-config.css';
import NavBar from "./components/NavBar";
import {Theme, Container} from '@radix-ui/themes'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "---font-inter"
});

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme appearance="light" accentColor="red" grayColor="slate" scaling="95%">
          <NavBar/>
          <main className="p-5">
            <Container>
              {children}
            </Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}
