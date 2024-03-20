"use client";

// ReactJS
import { useState } from "react";

// Components
import DialogComponent from "@/components/Dialog";

// Heroicons
import { TrashIcon } from "@heroicons/react/24/outline";

export default function BtnDeleteClient() {
    // State
    const [open, setOpen] = useState(false);

    // Constants
    const btnConfirm = {
        onClick: () => console.log("Delete Client"),
        text: "Delete Client",
    };
    
    return (
        <>
            <button type="button" onClick={() => setOpen(true)}>
                <TrashIcon className="h-5 w-5 text-gray-500 hover:text-red-700" aria-hidden="true" />
            </button>
            <DialogComponent
                btnConfirm={btnConfirm}
                open={open}
                setOpen={setOpen}
                title="Delete Client"
                type="delete"
            >
                <h1 className="text-2xl font-bold">Delete Client</h1>
            </DialogComponent>
        </>
    );
}