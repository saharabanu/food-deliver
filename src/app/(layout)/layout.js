"use client";

import Footer from "@/components/ui/shared/Footer";
import Navbar from "@/components/ui/shared/Navbar";

export default function RootLayout({ children }) {
  return <>
  <Navbar/>
  {children}
  <Footer/>
  </>;
}
