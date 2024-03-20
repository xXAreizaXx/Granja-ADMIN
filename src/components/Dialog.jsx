// ReactJS
import { Fragment, useRef } from "react";

// TailwindCSS
import { Dialog, Transition } from "@headlessui/react";

// Utils
import { joinClassNames } from "@/utils/functions";

// Heroicons
import { InformationCircleIcon, PencilSquareIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function DialogComponent({
    btnConfirm,
    children,
    hasBtns = true,
    open,
    setOpen,
    title,
    type = "view"
}) {
    // Refs
    const cancelButtonRef = useRef(null);

    const TYPE = {
        create: {
            bg: "bg-violet-200",
            color: "bg-violet-700",
            hover: "hover:bg-violet-600",
            icon: <PlusCircleIcon className="h-6 w-6 text-violet-700" aria-hidden="true" />,
            title: "Create",
        },
        view: {
            bg: "bg-gray-200",
            color: "bg-gray-700",
            hover: "hover:bg-gray-500",
            icon: <InformationCircleIcon className="h-6 w-6 text-gray-700" aria-hidden="true" />,
            title: "View",
        },
        edit: {
            bg: "bg-blue-200",
            color: "bg-blue-700",
            hover: "hover:bg-blue-600",
            icon: <PencilSquareIcon className="h-6 w-6 text-blue-700" aria-hidden="true" />,
            title: "Edit",
        },
        delete: {
            bg: "bg-red-200",
            color: "bg-red-700",
            hover: "hover:bg-red-600",
            icon: <TrashIcon className="h-6 w-6 text-red-700" aria-hidden="true" />,
            title: "Delete",
        },
    };

    // Functions
    const handleConfirm = () => {
        btnConfirm?.onClick();
        setOpen(false);
    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className={joinClassNames(
                                            TYPE[type]?.bg,
                                            "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10"
                                        )}>
                                            {TYPE[type]?.icon}
                                        </div>
                                        <div className="flex flex-col gap-6 ml-3 mt-2 w-full">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                {title}
                                            </Dialog.Title>

                                            {children}
                                        </div>
                                    </div>
                                    {hasBtns && (
                                        <div className="flex justify-end gap-4 mt-4">
                                            <button
                                                type="button"
                                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                onClick={() => setOpen(false)}
                                                ref={cancelButtonRef}
                                            >
                                            Cancel
                                            </button>
                                            <button
                                                type="button"
                                                className={joinClassNames(
                                                    TYPE[type]?.color,
                                                    TYPE[type]?.hover,
                                                    "inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                                                )}
                                                onClick={handleConfirm}
                                            >
                                                {btnConfirm?.text || "N/A"}
                                            </button>
                                        </div>
                                    )}
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
