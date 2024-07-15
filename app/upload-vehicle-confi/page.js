import React from "react";
import Image from "next/image";
import Link from "next/link";
import vehicleconfig1 from "../../public/vehicle config/vehicle config1.png";
import vehicleconfig2 from "../../public/vehicle config/vehicle config2.png";
import vehicleconfig3 from "../../public/vehicle config/vehicle config3.png";
import vehicleconfig4 from "../../public/vehicle config/vehicle config4.png";
import vehicleconfigsheet from "../../public/vehicle config/vehicle config sheet.png";

export default function page() {
  return (
    <div className="vehicle_config ">
      <h1 className="mb-4 text-5xl font-bold text-secondary-text ">
        Upload vehicle configuration
      </h1>
      <h2 className="pt-2 text-lg text-secondary-text">
        To upload vehicle configuration sheet, follow the steps below:
      </h2>
      <div>
        <p className="text-l text-secondary-text">
          The vehicle configuration sheet should be in the format shown below:
        </p>

        <Image src={vehicleconfigsheet} alt="logo" />
      </div>
      <div>
        <p className="text-l text-secondary-text">
          Navigate to the vehicle configuration link on the left side of the
          bridgestone app and select vehicle configuration upload, click on
          choose file.
        </p>
        <Image src={vehicleconfig1} alt="logo" />
      </div>
      <div>
        <p className="text-l text-secondary-text">
          After clicking on upload file, select the file from your local machine
        </p>
        <Image src={vehicleconfig2} alt="logo" />
      </div>
      <div>
        <p className="text-l text-secondary-text">
          If the file is successfully uploaded, you will see a success message
          on the top right corner. After that click on the upload button.
        </p>
        <Image src={vehicleconfig3} alt="logo" />
      </div>
      <div>
        <p className="text-l text-secondary-text">
          If the file uploaded is in correct required format you will see a
          success message on the top right corner
        </p>
        <Image src={vehicleconfig4} alt="logo" />
      </div>
    </div>
  );
}

{
  /* <div className="flex justify-between">
        <button className="w-16 p-1 rounded-sm bg-secondary-text">
          <Link href="/upload-actual-cost">prev</Link>
        </button>
        <button className="w-16 p-1 rounded-md bg-secondary-text">
          <Link href="/upload-actual-cost">Next </Link>
        </button>
      </div> */
}
