import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="hover:cursor-pointer font-bold text-3xl dark:text-primary"
    >
      Trade Wave
    </Link>
  );
};

export default Logo;
