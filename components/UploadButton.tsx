"use client"
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { UploadIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

const UploadButton = () => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Skeleton className="w-[50px] h-[20px] rounded-full" />

  return (
    <Button asChild>
      <Link href="/upload">
        Upload
        <span className="pl-1">
          <UploadIcon />
        </span>
      </Link>
    </Button>
  );
};

export default UploadButton;
