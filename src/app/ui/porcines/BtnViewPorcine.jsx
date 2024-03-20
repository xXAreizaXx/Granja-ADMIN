"use client";

// ReactJS
import { useState } from "react";

// Components
import DialogComponent from "@/components/Dialog";

// Heroicons
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function BtnViewPorcine() {
    // State
    const [open, setOpen] = useState(false);

    const btnConfirm = {
        onClick: () => console.log("View porcine"),
        text: "View porcine",
    };
    
    return (
        <>
            <button type="button" onClick={() => setOpen(true)}>
                <InformationCircleIcon className="h-5 w-5 text-gray-500 hover:text-gray-700" aria-hidden="true" />
            </button>
            <DialogComponent
                btnConfirm={btnConfirm}
                open={open}
                setOpen={setOpen}
                title="View Porcine"
                type="view"
            >
                <h1 className="text-2xl font-bold">View Porcine</h1>
            </DialogComponent>
        </>
    );
}