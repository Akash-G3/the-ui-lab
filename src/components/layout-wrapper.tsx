"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/about" && <Header />}
      {children}
    </>
  );
}