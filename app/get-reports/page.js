import React from "react";
import Image from "next/image";
import passive1 from "../../public/get report/passive1.png";
import passive2 from "../../public/get report/passive2.png";
import passive3 from "../../public/get report/passive3.png";
import active1 from "../../public/get report/active1.png";
import active2 from "../../public/get report/active2.png";
import active3 from "../../public/get report/active3.png";
import remove1 from "../../public/get report/remove1.png";
import remove2 from "../../public/get report/remove2.png";
import remove3 from "../../public/get report/remove3.png";

export default function page() {
  return (
    <div className="vehicle_config ">
      <h1 className="mb-4 text-5xl font-bold text-secondary-text ">
        Get Reports
      </h1>
      <h2 className="pt-2 text-lg text-secondary-text">
        To get tyre report, follow the steps below:
      </h2>
      <div className="passive_sheet ">
        <h2 className="pt-6 text-xl font-bold text-secondary-text">
          Passive tyre report:
        </h2>
        <div>
          <p className="text-l text-secondary-text">
            select All fleets tab on the left side of the bridgestone app navbar
            and select passive tyres
          </p>

          <Image src={passive1} alt="logo" />
        </div>

        <div>
          <p className="text-l text-secondary-text">
            To get the passive tyre report select the filter in sequence from
            left to right. Select the fleet, contract, vehicle, and tyre pattern
            and tyre size. After selecting the filter click on fetch data.
          </p>
          <Image src={passive2} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            Below is the passive tyre report based on selected filter
          </p>
          <Image src={passive3} alt="logo" />
        </div>
      </div>
      <div className="passive_sheet">
        <h2 className="pt-6 text-xl font-bold text-secondary-text">
          Active tyre report:
        </h2>
        <div>
          <p className="text-l text-secondary-text">
            select All fleets tab on the left side of the bridgestone app navbar
            and select active tyres
          </p>

          <Image src={active1} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            To get the active tyre report select the filter in sequence from
            left to right. Select the fleet, contract, vehicle, and tyre pattern
            and tyre size. After selecting the filter click on fetch data.
          </p>
          <Image src={active2} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            Below is the active tyre report based on selected filter
          </p>
          <Image src={active3} alt="logo" />
        </div>
      </div>
      <div className="passive_sheet">
        <h2 className="pt-6 text-xl font-bold text-secondary-text">
          Removed tyre report:
        </h2>
        <div>
          <p className="text-l text-secondary-text">
            select All fleets tab on the left side of the bridgestone app navbar
            and select removed tyres{" "}
          </p>

          <Image src={remove1} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            To get the active tyre report select the filter in sequence from
            left to right. Select the fleet, contract, tyre pattern tyre size
            and category(removal type). After selecting the filter click on
            fetch data.
          </p>
          <Image src={remove2} alt="logo" />
        </div>
        <div>
          <p className="text-l text-secondary-text">
            Below is the removed tyre report based on selected filter
          </p>
          <Image src={remove3} alt="logo" />
        </div>
      </div>
    </div>
  );
}
