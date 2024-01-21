import React from "react";
import NavMenu from "./NavMenu";
import { NavLink } from "react-router-dom";
import { logo } from "../assets";

import {
  Cog6ToothIcon,
  CreditCardIcon,
  BellAlertIcon,
  PaperClipIcon,
  BanknotesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

export default function UserProfile() {
  return (
    <main className="bg-white col-span-3 py-16 px-8 overflow-y-scroll">
      <div>
        <h1 className="text-sky-600 mb-8 text-[48px] font-bold">Settings</h1>
      </div>

      <div className="ml-10 p-6 flex">
        <div className="basis-[50%]">
          <div className="flex gap-4 mb-12">
            <div className="">
              <Cog6ToothIcon className="text-slate-500 bg-slate-200 rounded-lg w-12 p-1" />
            </div>
            <div className="">
              <h2 className="text-primary font-bold">General</h2>
              <p>View and update your details</p>
            </div>
          </div>

          <div className="flex gap-4 mb-12">
            <div className="">
              <CreditCardIcon className="text-slate-500 bg-slate-200 rounded-lg w-12 p-1" />
            </div>
            <div className="">
              <h2 className="text-primary font-bold">Payments</h2>
              <p>View and update your payment details</p>
            </div>
          </div>

          <div className="flex gap-4 mb-12">
            <div className="">
              <BellAlertIcon className="text-slate-500 bg-slate-200 rounded-lg w-12 p-1" />
            </div>
            <div className="">
              <h2 className="text-primary font-bold">Notifications</h2>
              <p>Manage your notifications</p>
            </div>
          </div>
        </div>

        <div className="basis-[50%]">
          <div className="flex gap-4 mb-12">
            <div className="">
              <PaperClipIcon className="text-slate-500 bg-slate-200 rounded-lg w-12 p-1" />
            </div>
            <div className="">
              <h2 className="text-primary font-bold">Files</h2>
              <p>Upload images, videos and important documents</p>
            </div>
          </div>

          <div className="flex gap-4 mb-12">
            <div className="">
              <BanknotesIcon className="text-slate-500 bg-slate-200 rounded-lg w-12 p-1" />
            </div>
            <div className="">
              <h2 className="text-primary font-bold">Billing</h2>
              <p>Manage your billing information and view your invoices</p>
            </div>
          </div>

          <div className="flex gap-4 mb-12">
            <div className="">
              <UserGroupIcon className="text-slate-500 bg-slate-200 rounded-lg w-12 p-1" />
            </div>
            <div className="">
              <h2 className="text-primary font-bold">Plans & Permissions</h2>
              <p>View plan information and edit user permissions</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
