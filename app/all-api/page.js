"use client";
import React, { useState } from "react";
import ReactJson from "react-json-view";
import responseData from "@/public/data/responseData";
export default function page() {
  const [data, setData] = useState(responseData.get_all_fleets);
  const handleEdit = (edit) => {
    const updatedData = edit.updated_src;
    setData(updatedData);
  };
  const handleSave = () => {
    // Save the data locally (e.g., in localStorage)
    localStorage.setItem("jsonData", JSON.stringify(data));
    alert("Data saved locally!");
  };

  return (
    <div className="vehicle_config ">
      <h1 className="mb-4 text-5xl font-bold text-secondary-text ">Apis</h1>
      <div className="passive_sheet ">
        <h2 className="pt-6 text-xl font-bold text-secondary-text">
          get all fleets
        </h2>
        <div>
          <p className="text-yellow-400 description text-l">
            https://bridgestone-api.nirmitee.io/api/v1/fleet/get_all_fleets
            <span className="text-secondary-text"> (get request)</span>
          </p>
          <p className="description text-l text-secondary-text">
            This api returns all the fleets in the database
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🟢</span>
            {/* <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.get_all_fleets, null, 2)}
            </pre> */}
            <ReactJson
              src={data}
              onEdit={handleEdit}
              onAdd={handleEdit}
              onDelete={handleEdit}
              theme="monokai"
              style={{
                padding: "1rem",
                borderRadius: "8px",
                backgroundColor: "#2d2d2d",
                color: "#fff",
              }}
            />
          </div>
          <button
            onClick={handleSave}
            className="p-2 mt-4 text-white bg-blue-500 rounded"
          >
            Save Data
          </button>
        </div>
        <h2 className="pt-6 text-xl font-bold text-secondary-text">
          get all contracts
        </h2>
        <div>
          <p className="text-yellow-400 description text-l">
            https://bridgestone-api.nirmitee.io/api/v1/fleet/get_all_contracts/?Fleet_Name=keka
            <span className="text-secondary-text"> (get request)</span>
          </p>
          <p className="description text-l text-secondary-text">
            This api returns all the contracts that belongs to a given
            fleet.Here all contracts are shown for the fleet named keka
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🟢</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.get_all_contract, null, 2)}
            </pre>
          </div>
        </div>
        <h2 className="pt-6 text-xl font-bold text-secondary-text">
          get all vehicles
        </h2>
        <div>
          <p className="text-yellow-400 description text-l">
            https://bridgestone-api.nirmitee.io/api/v1/fleet/get_all_vehicles/?Fleet_Name=keka{" "}
            <span className="text-secondary-text"> (get request)</span>
          </p>
          <p className="description text-l text-secondary-text">
            This api returns all the vehicles that belongs to a given fleet.Here
            all vehicles are shown for the fleet named keka{" "}
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🟢</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.get_all_vehicles, null, 2)}
            </pre>
          </div>
          <p className="text-yellow-400 description-nested text-l">
            https://bridgestone-api.nirmitee.io/api/v1/fleet/get_all_vehicles/?Fleet_Name=keka&Contract_ID=CT00000034{" "}
            <span className="text-secondary-text"> (get request)</span>
          </p>
          <p className="description text-l text-secondary-text">
            This api returns all the vehicles that belongs to a given fleet and
            a specific contract belonging to that fleet.Here all vehicles under
            a given contract are shown{" "}
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🟢</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.get_vehicles_by_contract, null, 2)}
            </pre>
          </div>
        </div>
        <h2
          id="actual-cost"
          className="pt-6 text-xl font-bold text-secondary-text"
        >
          upload actual cost
        </h2>
        <div>
          <p className="description text-l text-secondary-text">
            This is a post api to upload the actual cost sheet.
          </p>
          <p className="text-yellow-400 description text-l">
            https://bridgestone-api.nirmitee.io/api/v1/tyres/actual_cost{" "}
            <span className="text-secondary-text">(post request)</span>
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🟢</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.actual_cost_true, null, 2)}
            </pre>
          </div>
          <p className="text-yellow-400 description-nested text-l">
            https://bridgestone-api.nirmitee.io/api/v1/tyres/actual_cost{" "}
            <span className="text-secondary-text">
              (post request, incorrect data input in sheet)
            </span>
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🔴</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.actual_cost_false, null, 2)}
            </pre>
          </div>
        </div>
        <h2
          id="standard-cost"
          className="pt-6 text-xl font-bold text-secondary-text"
        >
          upload standard cost
        </h2>
        <div>
          <p className="description text-l text-secondary-text">
            This is a post api to upload the standard cost sheet.
          </p>
          <p className="text-yellow-400 description text-l">
            https://bridgestone-api.nirmitee.io/api/v1/tyres/standard_cost{" "}
            <span className="text-secondary-text"> (post request)</span>
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🟢</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.standard_cost_true, null, 2)}
            </pre>
          </div>
          <p className="text-yellow-400 description-nested text-l">
            https://bridgestone-api.nirmitee.io/api/v1/tyres/standard_cost{" "}
            <span className="text-secondary-text">
              (post request incorrect data input in sheet)
            </span>
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🔴</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.standard_cost_false, null, 2)}
            </pre>
          </div>
        </div>
        <h2
          id="vehicle-configuration"
          className="pt-6 text-xl font-bold text-secondary-text"
        >
          vehicle configuration
        </h2>
        <div>
          <p className="description text-l text-secondary-text">
            This api returns all the vehicle configuration in the database
          </p>
          <p className="text-yellow-400 description text-l">
            https://bridgestone-api.nirmitee.io/api/v1/tyres/vehicle_config{" "}
            <span className="text-secondary-text">(get request)</span>
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🟢</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.get_vehicle_config, null, 2)}
            </pre>
          </div>
          <p className="text-yellow-400 description-nested text-l">
            <p className="description text-l text-secondary-text">
              This is a post api to upload vehicle configuration
            </p>
            https://bridgestone-api.nirmitee.io/api/v1/tyres/vehicle_config{" "}
            <span className="text-secondary-text">(post request)</span>
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🟢</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.post_vehicle_config, null, 2)}
            </pre>
          </div>
          <p className="text-yellow-400 description-nested text-l">
            <p className="description text-l text-secondary-text">
              This is a post api to upload vehicle configuration
            </p>
            https://bridgestone-api.nirmitee.io/api/v1/tyres/vehicle_config{" "}
            <span className="text-secondary-text">
              (post request, incorrect data types)
            </span>
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🔴</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(
                responseData.incorrect_post_vehicle_config,
                null,
                2
              )}{" "}
            </pre>
          </div>
        </div>
        <h2
          id="passive-tyre"
          className="pt-6 text-xl font-bold text-secondary-text"
        >
          passive tyre
        </h2>
        <div>
          <p className="description text-l text-secondary-text">
            This api returns all the passive tyre data in the database
          </p>
          <p className="text-yellow-400 description text-l">
            https://bridgestone-api.nirmitee.io/api/v1/tyres/Passive_Tyre_report{" "}
            <span className="text-secondary-text">(get request)</span>
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🟢</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.get_passive_tyre, null, 2)}
            </pre>
          </div>
          <p className="text-yellow-400 description-nested text-l">
            <p className="description text-l text-secondary-text">
              This api returns all the passive tyre data in the database based
              on params passed in the url such as fleet name, contract id,
              pattern and size
            </p>
            https://bridgestone-api.nirmitee.io/api/v1/tyres/Passive_Tyre_report?Fleet_Name=keka&Contract_ID=CT00000036&Pattern=TBR00289&Size=225/45R17
            <span className="text-secondary-text"> (get request)</span>
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🟢</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.get_passive_tyre, null, 2)}
            </pre>
          </div>
          <p className="text-yellow-400 description-nested text-l">
            <p className="description text-l text-secondary-text">
              This is a post api to upload passive tyre data
            </p>
            https://bridgestone-api.nirmitee.io/api/v1/tyres/upload_passive_sheet{" "}
            <span className="text-secondary-text">
              (post request, correct data)
            </span>
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🟢</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.upload_passive_tyre, null, 2)}
            </pre>
          </div>
          <p className="text-yellow-400 description-nested text-l">
            <p className="description text-l text-secondary-text">
              This is a post api to upload passive tyre data
            </p>
            https://bridgestone-api.nirmitee.io/api/v1/tyres/upload_passive_sheet{" "}
            <span className="text-secondary-text">
              (post request, incorrect data)
            </span>
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🔴</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(
                responseData.incorrect_upload_passive_tyre,
                null,
                2
              )}{" "}
            </pre>
          </div>
        </div>
        <h2
          id="active-tyre"
          className="pt-6 text-xl font-bold text-secondary-text"
        >
          active tyre
        </h2>
        <div>
          <p className="description text-l text-secondary-text">
            This api returns all the active tyre data in the database
          </p>
          <p className="text-yellow-400 description text-l">
            https://bridgestone-api.nirmitee.io/api/v1/tyres/Active_Tyre_report{" "}
            <span className="text-secondary-text">(get request)</span>
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🟢</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.active_tyre_report, null, 2)}
            </pre>
          </div>
          <p className="text-yellow-400 description-nested text-l">
            <p className="description text-l text-secondary-text">
              This api returns all the active tyre data in the database based on
              params passed in the url such as fleet name, contract id, pattern
              and size
            </p>
            https://bridgestone-api.nirmitee.io/api/v1/tyres/Active_Tyre_report?Fleet_Name=keka&Contract_ID=CT00000036&Pattern=TBR00289&Size=225/45R17
            <span className="text-secondary-text"> (get request)</span>
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🟢</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.active_tyre_report, null, 2)}
            </pre>
          </div>
          <p className="text-yellow-400 description-nested text-l">
            <p className="description text-l text-secondary-text">
              This is a post api to upload active tyre data
            </p>
            https://bridgestone-api.nirmitee.io/api/v1/tyres/upload_active_sheet{" "}
            <span className="text-secondary-text">
              (post request, correct data)
            </span>
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🟢</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.upload_active_tyre, null, 2)}
            </pre>
          </div>
          <p className="text-yellow-400 description-nested text-l">
            <p className="description text-l text-secondary-text">
              This is a post api to upload active tyre data
            </p>
            https://bridgestone-api.nirmitee.io/api/v1/tyres/upload_active_sheet{" "}
            <span className="text-secondary-text">
              (post request, incorrect data types)
            </span>
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🔴</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(
                responseData.incorrect_upload_active_tyre,
                null,
                2
              )}
            </pre>
          </div>
        </div>
        <h2
          id="damaged-tyre"
          className="pt-6 text-xl font-bold text-secondary-text"
        >
          remove tyre
        </h2>
        <div>
          <p className="description text-l text-secondary-text">
            This api returns all the removed/damaged tyre data in the database
          </p>
          <p className="text-yellow-400 description text-l">
            https://bridgestone-api.nirmitee.io/api/v1/tyres/Damage_disposal_tyre_report/?Tyre_Status=Passive
            <span className="text-secondary-text">(get request)</span>
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🟢</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.removed_tyre_report, null, 2)}
            </pre>
          </div>
          <p className="text-yellow-400 description-nested text-l">
            <p className="description text-l text-secondary-text">
              This api returns all the removed/damaged tyre data in the database
              based on params passed in the url such as damaged category, fleet
              name, contract id, pattern and size
            </p>
            https://bridgestone-api.nirmitee.io/api/v1/tyres/Damage_disposal_tyre_report/?Tyre_Status=Passive
            &Category_wise=Lost&Fleet_Name=keka&Contract_ID=CT00000036&Pattern_Wise=TBR00289
            &Size_wise=225/45R17
            <span className="text-secondary-text"> (get request)</span>
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🟢</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.removed_tyre_report_params, null, 2)}
            </pre>
          </div>
          <p className="text-yellow-400 description-nested text-l">
            <p className="description text-l text-secondary-text">
              This is a post api to upload damaged/remove tyre data sheet
            </p>
            https://bridgestone-api.nirmitee.io/api/v1/tyres/upload_removal_sheet{" "}
            <span className="text-secondary-text">
              (post request, correct data)
            </span>
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🟢</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.upload_remove_tyre, null, 2)}
            </pre>
          </div>
          <p className="text-yellow-400 description-nested text-l">
            <p className="description text-l text-secondary-text">
              This is a post api to upload damaged/remove tyre data sheet
            </p>
            https://bridgestone-api.nirmitee.io/api/v1/tyres/upload_removal_sheet{" "}
            <span className="text-secondary-text">
              (post request, incorrect data types)
            </span>
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🔴</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(
                responseData.incorrect_upload_remove_tyre,
                null,
                2
              )}
            </pre>
          </div>
        </div>
        <h2
          id="vehicle-running"
          className="pt-6 text-xl font-bold text-secondary-text"
        >
          vehicle running
        </h2>
        <div>
          <p className="text-yellow-400 description-nested text-l ">
            <p className="description text-l text-secondary-text">
              This api returns all the vehicle running/billing tyre data in the
              database based on params passed in the url such as fleet name,
              contract id, pattern and size
            </p>
            <p className="text-yellow-400 description text-l">
              http://127.0.0.1:8000/api/v1/tyres/Vehicle_Running_Report/?Contract_ID=CT00000036&Fleet_Name
              =keka&Vehicle_Wise=MH12UT0005&limit=10&offset=0&Start_Date=24-02-019:30:00&End_Date=24-05-01
              9:30:00 <span className="text-secondary-text">(get request)</span>
            </p>
            <span className="text-secondary-text"> (get request)</span>
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🟢</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.vehicle_running_report, null, 2)}
            </pre>
          </div>

          <p className="text-yellow-400 description-nested text-l">
            <p className="description text-l text-secondary-text">
              This is a post api to upload vehicle running and billing tyre data
              sheet
            </p>
            https://bridgestone-api.nirmitee.io/api/v1/tyres/upload_vehicle_running_sheet{" "}
            <span className="text-secondary-text">
              (post request, correct data)
            </span>
          </p>
          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🟢</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.upload_vehicle_running, null, 2)}
            </pre>
          </div>

          <p className="text-yellow-400 description-nested text-l">
            <p className="description text-l text-secondary-text">
              This is a post api to upload vehicle running and billing tyre data
              sheet
            </p>
            https://bridgestone-api.nirmitee.io/api/v1/tyres/upload_vehicle_running_sheet{" "}
            <span className="text-secondary-text">
              (post request, incorrect data types)
            </span>
          </p>

          <div className="relative max-h-[370px]">
            <span className="absolute top-2 right-2">🔴</span>
            <pre className="p-4 overflow-x-auto rounded max-h-[370px] bg-side-bar text-l text-secondary-text">
              {JSON.stringify(responseData.incorrect_vehicle_running, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
