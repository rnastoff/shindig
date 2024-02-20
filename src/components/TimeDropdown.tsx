"use client";

import Link from "next/link";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const TimeDropdown = () => {
  // const [active]

  const handleDropdown = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {};

  return (
    <Menu as="div" className="relative inline-block text-left w-32">
      <div>
        <Menu.Button className="bg-background border-[1px] border-primary text-white outline-none flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm ">
          ANY TIME
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-white"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 border-[1px] border-primary text-right mt-2 w-40 origin-top-right rounded-md text-white bg-background focus:outline-none">
          <div className="">
            <Menu.Item>
              {({ active }) => (
                <div
                  // href="#"
                  onClick={(e) => {}}
                  className={classNames(
                    active
                      ? "bg-primarydark text-white rounded-md"
                      : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  TODAY
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  TOMORROW
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  THIS WEEK
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  THIS WEEKEND
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  NEXT WEEK
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default TimeDropdown;
