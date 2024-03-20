"use client";

// ReactJS
import { useState } from "react";

// Components
import DialogComponent from "@/components/Dialog";

// UI
import FormAddClient from "./FormAddClient";

// Heroicons
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function BtnAddClient() {
    // State
    const [open, setOpen] = useState(false);

    const btnConfirm = {
        onClick: () => console.log("Add Client"),
        text: "Create",
    };
    
    return (
        <>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button
                    className="block rounded-md bg-violet-900 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => setOpen(true)}
                    type="button"
                >
                    <PlusCircleIcon className="h-5 w-5 inline-block -mt-1 mr-1" aria-hidden="true" />
                    Add Client
                </button>
            </div>

            <DialogComponent
                btnConfirm={btnConfirm}
                hasBtns={false}
                open={open}
                setOpen={setOpen}
                title="Create Client"
                type="create"
            >
                <FormAddClient onCancel={() => setOpen(false)} />
            </DialogComponent>
        </>
    );
}