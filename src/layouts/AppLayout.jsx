"use client";

// NextJS
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// ReactJS
import { Fragment, useState } from "react";

// TailwindCSS
import { Dialog, Transition } from "@headlessui/react";

// Heroicons
import {
    ArchiveBoxIcon,
    Bars3Icon,
    ChartBarIcon,
    FireIcon,
    HeartIcon,
    UsersIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

// Utils
import { joinClassNames } from "@/utils/functions";

const navigation = [
    { name: "Reports", href: "/", icon: ChartBarIcon },
    { name: "Porcines", href: "/porcines", icon: FireIcon },
    { name: "Clients", href: "/clients", icon: UsersIcon },
    { name: "Feeds", href: "/feeds", icon: ArchiveBoxIcon },
];

export default function AppLayout({ children }) {
    // Pathname
    const pathname = usePathname();

    // States
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-50 lg:hidden"
                    onClose={setSidebarOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                        <button
                                            type="button"
                                            className="-m-2.5 p-2.5"
                                            onClick={() =>
                                                setSidebarOpen(false)
                                            }
                                        >
                                            <span className="sr-only">
                                                Close sidebar
                                            </span>
                                            <XMarkIcon
                                                className="h-6 w-6 text-white"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </Transition.Child>

                                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                                    <div className="flex h-18 shrink-0 items-center justify-center">
                                        <Image
                                            src="/logo.png"
                                            alt="Logo"
                                            width={120}
                                            height={40}
                                        />
                                    </div>
                                    <nav className="flex flex-1 flex-col">
                                        <ul className="flex flex-1 flex-col gap-y-7">
                                            <li>
                                                <ul className="-mx-2 space-y-1">
                                                    {navigation.map((item) => (
                                                        <li key={item.name}>
                                                            <Link
                                                                href={item.href}
                                                                className={joinClassNames(
                                                                    pathname ===
                                                                        item.href
                                                                        ? "bg-gray-800 text-white"
                                                                        : "text-gray-400 hover:text-white hover:bg-gray-800",
                                                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                                                )}
                                                            >
                                                                <item.icon
                                                                    className="h-6 w-6 shrink-0"
                                                                    aria-hidden="true"
                                                                />
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                            <li className="mt-auto">
                                                <p className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                                                    <HeartIcon
                                                        className="h-6 w-6 shrink-0"
                                                        aria-hidden="true"
                                                    />
                                                    La Granja SA
                                                </p>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
                    <div className="flex h-18 shrink-0 items-center justify-center">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={120}
                            height={40}
                        />
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul className="-mx-2 space-y-1">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className={joinClassNames(
                                                    pathname === item.href
                                                        ? "bg-gray-800 text-white"
                                                        : "text-gray-400 hover:text-white hover:bg-gray-800",
                                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                                )}
                                            >
                                                <item.icon
                                                    className="h-6 w-6 shrink-0"
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="mt-auto">
                                <p className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                                    <HeartIcon
                                        className="h-6 w-6 shrink-0"
                                        aria-hidden="true"
                                    />
                                    La Granja SA
                                </p>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="lg:pl-72">
                <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                    <button
                        type="button"
                        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Separator */}
                    <div
                        className="h-6 w-px bg-gray-900/10 lg:hidden"
                        aria-hidden="true"
                    />

                    <h1 className="text-lg font-semibold text-gray-900">
                        {pathname === "/"
                            ? "Reports"
                            : pathname?.slice(1)?.[0]?.toUpperCase() +
                              pathname.slice(2)}
                    </h1>
                </div>

                <main className="flex flex-col items-center justify-between p-8 h-[calc(100vh-4rem)] w-full bg-gray-100">
                    <section className="flex overflow-y-auto bg-white p-4 rounded-md shadow-sm w-full h-full">
                        {children}
                    </section>
                </main>
            </div>
        </div>
    );
}
