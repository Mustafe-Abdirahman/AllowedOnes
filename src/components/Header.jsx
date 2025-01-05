import React, { useState } from "react";
import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from "../assets/a.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex items-center lg:flex-1">
            {/* Logo comes first, then the name */}
            <a href="#" className="flex items-center -m-1.5 p-1.5">
              <img alt="logo" src={logo} className="h-14 w-auto" />
              <span className="text-lg font-bold text-gray-900 ml-2">
                Kaabe Tech
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <ul className="flex justify-center items-center gap-3">
              <Link to="/" className="text-sm/6 font-semibold text-gray-900">
                <li>Home</li>
              </Link>
              <Link
                to="/PricingTable"
                className="text-sm/6 font-semibold text-gray-900"
              >
                <li>Price</li>
              </Link>
              <Link
                to="/About"
                className="text-sm/6 font-semibold text-gray-900"
              >
                <li>About</li>
              </Link>
            </ul>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button className="rounded-md bg-indigo-600 px-2 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Get in touch
            </button>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              {/* Logo first, name second in mobile view */}
              <a href="#" className="flex items-center -m-1.5 p-1.5">
                <img alt="logo" src={logo} className="h-14 w-auto" />
                <span className="text-lg font-bold text-gray-900 ml-2">
                  Kaabe Tech
                </span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <ul>
                    <Link
                      to="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      <li>Home</li>
                    </Link>
                    <Link
                      to="/PricingTable"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      <li>Price</li>
                    </Link>
                    <Link
                      to="/About"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      <li>About</li>
                    </Link>
                  </ul>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
};

export default Header;
