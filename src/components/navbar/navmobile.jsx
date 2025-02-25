"use client";

// import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navmobile = () => {
  const pathname = usePathname();

  return <div>navmobile</div>;
};

export default navmobile;
