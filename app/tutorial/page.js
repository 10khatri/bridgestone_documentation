import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="mb-4 text-5xl font-bold text-secondary-text ">Tutorial</h1>
      <p className="text-lg text-secondary-text">
        Follow along to get started with the Bridgestone API. Start with{" "}
        <Link href="/upload-vehicle-confi">
          <p className="underline">this</p>
        </Link>
      </p>
    </div>
  );
}
