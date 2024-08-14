"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const currentPath = usePathname();
  const [isApiSublistOpen, setIsApiSublistOpen] = React.useState(false);
  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleLinkClick = () => {
    setIsApiSublistOpen(false);
  };
  return (
    <div className="flex flex-col items-start pl-5 sidebar-links text-primary-text ">
      <Link href="get-started" onClick={handleLinkClick}>
        <p
          className={
            currentPath == "/get-started" ? "text-secondary-text underline" : ""
          }
        >
          Get started
        </p>
      </Link>
      <Link href="/tutorial" onClick={handleLinkClick}>
        <p
          className={
            currentPath == "/tutorial" ? "text-secondary-text underline" : ""
          }
        >
          Tutorial
        </p>
      </Link>
      <Link href="upload-vehicle-confi" onClick={handleLinkClick}>
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
      <Link href="upload-actual-cost" onClick={handleLinkClick}>
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
      <Link href="upload-tyre-&-vehicle-api" onClick={handleLinkClick}>
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
      <Link href="get-reports" onClick={handleLinkClick}>
        <p
          className={
            currentPath == "/get-reports" ? "text-secondary-text underline" : ""
          }
        >
          All fleets
        </p>
      </Link>

      <Link href="/all-api">
        <p
          className={
            currentPath == "/all-api" ? "text-secondary-text underline" : ""
          }
          onClick={() => setIsApiSublistOpen(!isApiSublistOpen)}
        >
          Api
        </p>
      </Link>
      {isApiSublistOpen && (
        <ul className="mt-3 ml-4 sub-links">
          <li>
            <Link
              href="/all-api#actual-cost"
              onClick={(e) => handleSmoothScroll(e, "actual-cost")}
            >
              <p className="text-primary-text">actual cost</p>
            </Link>
          </li>
          <li>
            <Link
              href="/all-api#standard-cost"
              onClick={(e) => handleSmoothScroll(e, "standard-cost")}
            >
              <p className="text-primary-text">standard-cost</p>
            </Link>
          </li>
          <li>
            <Link
              href="/all-api#vehicle-configuration"
              onClick={(e) => handleSmoothScroll(e, "vehicle-configuration")}
            >
              <p className="text-primary-text">Vehicle Configuration</p>
            </Link>
          </li>
          <li>
            <Link
              href="/all-api#passive-tyre"
              onClick={(e) => handleSmoothScroll(e, "passive-tyre")}
            >
              <p className="text-primary-text">Passive Tyre</p>
            </Link>
          </li>
          <li>
            <Link
              href="/all-api#active-tyre"
              onClick={(e) => handleSmoothScroll(e, "active-tyre")}
            >
              <p className="text-primary-text">Active Tyre</p>
            </Link>
          </li>
          <li>
            <Link
              href="/all-api#damaged-tyre"
              onClick={(e) => handleSmoothScroll(e, "damaged-tyre")}
            >
              <p className="text-primary-text">Damaged Tyre</p>
            </Link>
          </li>
          <li>
            <Link
              href="/all-api#vehicle-running"
              onClick={(e) => handleSmoothScroll(e, "vehicle-running")}
            >
              <p className="text-primary-text">Vehicle Running</p>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
