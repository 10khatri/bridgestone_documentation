"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const currentPath = usePathname();
  console.log(currentPath);

  return (
    <div className="flex flex-col items-start pl-5 sidebar-links text-primary-text ">
      <Link href="get-started">
        <p
          className={
            currentPath == "/get-started" ? "text-secondary-text underline" : ""
          }
        >
          Get started
        </p>
      </Link>
      <Link href="/tutorial">
        <p
          className={
            currentPath == "/tutorial" ? "text-secondary-text underline" : ""
          }
        >
          Tutorial
        </p>
      </Link>
      <Link href="upload-vehicle-confi">
        <p
          className={
            currentPath == "/upload-vehicle-confi"
              ? "text-secondary-text underline"
              : ""
          }
        >
          Vehicle configuration
        </p>
      </Link>
      <Link href="upload-actual-cost">
        <p
          className={
            currentPath == "/upload-actual-cost"
              ? "text-secondary-text underline"
              : ""
          }
        >
          Upload cost{" "}
        </p>
      </Link>

      <Link href="upload-tyre-&-vehicle-api">
        <p
          className={
            currentPath == "/upload-tyre-&-vehicle-api"
              ? "text-secondary-text underline"
              : ""
          }
        >
          Data import
        </p>
      </Link>
      <Link href="get-reports">
        <p
          className={
            currentPath == "/get-reports" ? "text-secondary-text underline" : ""
          }
        >
          All fleets
        </p>
      </Link>
      <Link href="all-api">
        <p
          className={
            currentPath == "/all-api" ? "text-secondary-text underline" : ""
          }
        >
          Api
        </p>
      </Link>
    </div>
  );
}
