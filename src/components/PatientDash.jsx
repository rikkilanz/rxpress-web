import React, { useState } from "react";
import data from "../data/data.json";
import newOrder from "../data/newOrderData.json";
import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const cols = ["Order ID", "Order Status", "Date", "Doctor", "Company", "Total"];

export default function PatientDash() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="bg-sky-50/75 col-span-3 py-16 px-8 overflow-y-scroll p-8">
      <h1 className="text-sky-600 text-[48px] font-bold mb-8">Prescriptions</h1>
      <div>
        <div className="text-black flex flex-col bg-white p-8 rounded shadow-md border border-sky-200">
          <div className="text-primary-300 text-2xl mb-8">
            <h2>Upcoming Orders</h2>
          </div>
          {newOrder.map((item) => (
            <div
              className="flex gap-8 items-center justify-between"
              key={item.id}
            >
              <div>
                <h2 className="text-primary underline pb-2">Order Id</h2>
                <h3>{item.order_id}</h3>
              </div>
              <div>
                <h2 className="text-primary underline pb-2">Order Status</h2>
                <h3>{item.order_status}</h3>
              </div>
              <div>
                <h2 className="text-primary underline pb-2">Description</h2>
                <h3>{item.desc}</h3>
              </div>
              <div>
                <h2 className="text-primary underline pb-2">Date</h2>
                <h3>{item.date}</h3>
              </div>
              <div>
                {" "}
                <h2 className="text-primary underline pb-2">Quantity</h2>
                <h3>{item.qty}</h3>
              </div>
              <div>
                <h2 className="text-primary underline pb-2">Doctor</h2>
                <h3>{item.doctor}</h3>
              </div>
              <div>
                <h2 className="text-primary underline pb-2">Company</h2>
                <h3>{item.company}</h3>
              </div>
              <div>
                <h2 className="text-primary underline pb-2">Total</h2>
                <h3>{item.total}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Orders Section */}
      {/* Filter Section ( May not get to it but if possible would be a nice feature) */}

      <div>
        <div className="text-black mt-5 flex flex-col bg-white p-8 rounded shadow-md border border-sky-200">
          <div className="mb-2">
            <div className="text-primary-300 text-2xl mb-4">
              <h2>Your Past Orders</h2>
            </div>
            <div className="flex justify-between mb-8 bg-gray-50 border border-gray-200 p-4 rounded">
              <div className="flex items-center">
                <FunnelIcon className="w-6 h-6 mr-2 text-gray-400" />
                <span className="text-gray-700">Filters</span>
              </div>
              <div className="relative">
                <input
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  name="search"
                  type="text"
                  placeholder="Search"
                  className="p-2 pl-12"
                />
                <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 absolute left-4 top-2" />
                <span className="p-2 bg-sky-600 text-white h-full">Search</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between bg-sky-50 p-2">
            {cols.map((col, i) => (
              <span
                key={col}
                className={`${i === 2 ? "" : ""} ${
                  i === 1 ? "" : ""
                } text-xl text-sky-900`}
              >
                {col}
              </span>
            ))}
          </div>
          {data.map((item) => (
            <div
              className="flex items-center justify-between text-center py-4"
              key={item.id}
            >
              <div>
                <h3>{item.order_id}</h3>
              </div>
              <div>
                <h3 className="bg-green-300 rounded-full px-4 py-2">
                  {item.order_status}
                </h3>
              </div>
              <div>
                <h3>{item.date}</h3>
              </div>
              <div>
                <h3>{item.doctor}</h3>
              </div>
              <div>
                <h3>{item.company}</h3>
              </div>
              <div>
                <h3>{item.total}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Order Section */}
      </div>
    </div>
  );
}
