import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <div>
      <h1 className="mb-4 text-5xl font-bold text-secondary-text ">
        Get Started
      </h1>
      <main>
        <div className="text-lg text-primary-text mb">
          We request you to follow the sequence in which the documentation is
          written. The documentation consist of all the required necessary
          steps:
          <ul className="pl-6 list-disc marker:text-primary-text">
            <li>The first step is to upload the Vehicle configuration data.</li>
            <li>
              The second step is to upload the actual data for the current
              month.
            </li>
            <li>The third step is to upload the tyre data sheet.</li>
            <li>
              {" "}
              For getting the tyre report follow this link{" "}
              <Link href="get-reports" className="underline ">
                <p className="underline">tyre report</p>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
