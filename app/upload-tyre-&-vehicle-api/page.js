import React from "react";
import Image from "next/image";
import passivesheet from "../../public/tyre data/passive sheet.png";
import passivesheet1 from "../../public/tyre data/passive1.png";
import passivesheet2 from "../../public/tyre data/passive2.png";
import passivesheet3 from "../../public/tyre data/passive3.png";
import passivesheet4 from "../../public/tyre data/passive4.png";
import activesheet from "../../public/tyre data/active sheet.png";
import activesheet1 from "../../public/tyre data/active1.png";
import activesheet2 from "../../public/tyre data/active2.png";
import activesheet3 from "../../public/tyre data/active3.png";
import activesheet4 from "../../public/tyre data/active4.png";
import billing from "../../public/tyre data/billing sheet.png";
import billing1 from "../../public/tyre data/billing1.png";
import billing2 from "../../public/tyre data/billing2.png";
import billing3 from "../../public/tyre data/billing3.png";
import billing4 from "../../public/tyre data/billing4.png";
import removal from "../../public/tyre data/removal sheet.png";
import removal1 from "../../public/tyre data/removal1.png";
import removal2 from "../../public/tyre data/removal2.png";
import removal3 from "../../public/tyre data/removal3.png";
import removal4 from "../../public/tyre data/removal4.png";

export default function page() {
  return (
    <div className="vehicle_config ">
      <h1 className="mb-4 text-5xl font-bold text-secondary-text ">
        Upload tyre api
      </h1>
      <h2 className="pt-2 text-lg text-secondary-text">
        To upload Tyre, follow the steps below:
        <ul className="pt-2 pl-6 list-disc marker:text-primary-text">
          <li>upload passive sheet</li>
          <li>upload active sheet for those tyres</li>
          <li>
            upload vheicle running for the given period of months. vehicle
            running sheet can be only upload if tyre is active
          </li>
          <li>
            upload removal sheet. removal sheet can be run only if tyres is
            active
          </li>
        </ul>
      </h2>
      <div className="passive_sheet ">
        <h2 className="pt-6 text-xl font-bold text-secondary-text">
          Passive sheet running:
        </h2>
        <div>
          <p className="text-l text-secondary-text">
            The passive tyre sheet should be in the format shown below:
          </p>

          <Image src={passivesheet} alt="logo" />
        </div>

        <div>
          <p className="text-l text-secondary-text">
            Navigate to the Data import link on the left side of the bridgestone
            app and select passive tyre data upload nav link, click on choose
            file.
          </p>
          <Image src={passivesheet1} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            After clicking on upload file, select the file from your local
            machine.
          </p>
          <Image src={passivesheet2} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            If the file is successfully uploaded, you will see the selected file
            name. After that click on the upload button.
          </p>
          <Image src={passivesheet3} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            If the file uploaded is in correct required format you will see a
            success message on the top right corner
          </p>
          <Image src={passivesheet4} alt="logo" />
        </div>
      </div>
      <div className="passive_sheet">
        <h2 className="pt-6 text-xl font-bold text-secondary-text">
          Active sheet running:
        </h2>
        <div>
          <p className="text-l text-secondary-text">
            The active tyre sheet should be in the format shown below:
          </p>

          <Image src={activesheet} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            Navigate to the Data import link on the left side of the bridgestone
            app and select active tyre data upload nav link, click on choose
            file.
          </p>
          <Image src={activesheet1} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            After clicking on upload file, select the file from your local
            machine.
          </p>
          <Image src={activesheet2} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            If the file is successfully uploaded, you will see the selected file
            name. After that click on the upload button.
          </p>
          <Image src={activesheet3} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            If the file uploaded is in correct required format you will see a
            success message on the top right corner
          </p>
          <Image src={activesheet4} alt="logo" />
        </div>
      </div>
      <div className="passive_sheet">
        <h2 className="pt-6 text-xl font-bold text-secondary-text">
          vehicle billing sheet running:
        </h2>
        <div>
          <p className="text-l text-secondary-text">
            The vehicle running and billing sheet should be in the format shown
            below:
          </p>

          <Image src={billing} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            Navigate to the Data import link on the left side of the bridgestone
            app and select vehicle running tyre data upload nav link, click on
            choose file.
          </p>
          <Image src={billing1} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            After clicking on upload file, select the file from your local
            machine.
          </p>
          <Image src={billing2} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            If the file is successfully uploaded, you will see the selected file
            name. After that click on the upload button.
          </p>
          <Image src={billing3} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            If the file uploaded is in correct required format you will see a
            success message on the top right corner
          </p>
          <Image src={billing4} alt="logo" />
        </div>
      </div>
      <div className="passive_sheet">
        <h2 className="pt-6 text-xl font-bold text-secondary-text">
          Removal sheet running:
        </h2>
        <div>
          <p className="text-l text-secondary-text">
            The removal sheet should be in the format shown below:
          </p>

          <Image src={removal} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            Navigate to the Data import link on the left side of the bridgestone
            app and select removed tyre data upload nav link, click on choose
            file.
          </p>
          <Image src={removal1} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            After clicking on upload file, select the file from your local
            machine.
          </p>
          <Image src={removal2} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            If the file is successfully uploaded, you will see the selected file
            name. After that click on the upload button.
          </p>
          <Image src={removal3} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            If the file uploaded is in correct required format you will see a
            success message on the top right corner
          </p>
          <Image src={removal4} alt="logo" />
        </div>
      </div>
    </div>
  );
}
