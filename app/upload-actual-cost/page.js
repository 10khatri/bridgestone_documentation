import React from "react";
import Image from "next/image";
import actual from "../../public/cost upload/actual sheet.png";
import actual1 from "../../public/cost upload/actual1.png";
import actual2 from "../../public/cost upload/actual2.png";
import actual3 from "../../public/cost upload/actual3.png";
import actual4 from "../../public/cost upload/actual4.png";
import standard from "../../public/cost upload/standard sheet.png";
import standard1 from "../../public/cost upload/standard1.png";
import standard2 from "../../public/cost upload/standard2.png";
import standard3 from "../../public/cost upload/standard3.png";
import standard4 from "../../public/cost upload/standard4.png";

export default function page() {
  return (
    <div className="vehicle_config ">
      <h1 className="mb-4 text-5xl font-bold text-secondary-text ">
        Upload actucal/standard cost
      </h1>
      <h2 className="pt-2 text-lg text-secondary-text">
        To upload actual/standard, follow the steps below:
      </h2>
      <div className="passive_sheet ">
        <h2 className="pt-6 text-xl font-bold text-secondary-text">
          Actual sheet upload:
        </h2>
        <div>
          <p className="text-l text-secondary-text">
            The actual cost sheet should be in the format shown below:
          </p>

          <Image src={actual} alt="logo" />
        </div>

        <div>
          <p className="text-l text-secondary-text">
            Navigate to the upload cost link on the left side of the bridgestone
            app and select actual cost nav link, click on choose file.
          </p>
          <Image src={actual1} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            After clicking on upload file, select the file from your local
            machine.
          </p>
          <Image src={actual2} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            If the file is successfully uploaded, you will see the selected file
            name. After that click on the upload button.
          </p>
          <Image src={actual3} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            If the file uploaded is in correct required format you will see a
            success message on the top right corner
          </p>
          <Image src={actual4} alt="logo" />
        </div>
      </div>
      <div className="passive_sheet">
        <h2 className="pt-6 text-xl font-bold text-secondary-text">
          Standard sheet cost upload:
        </h2>
        <div>
          <p className="text-l text-secondary-text">
            The standard cost sheet should be in the format shown below:
          </p>

          <Image src={standard} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            Navigate to the upload cost link on the left side of the bridgestone
            app and select standard cost nav link, click on choose file.
          </p>
          <Image src={standard1} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            After clicking on upload file, select the file from your local
            machine.
          </p>
          <Image src={standard2} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            If the file is successfully uploaded, you will see the selected file
            name. After that click on the upload button.
          </p>
          <Image src={standard3} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            If the file uploaded is in correct required format you will see a
            success message on the top right corner
          </p>
          <Image src={standard4} alt="logo" />
        </div>
      </div>
    </div>
  );
}
