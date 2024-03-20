"use client";

// ReactJS
import { useState } from "react";

// Components
import DialogComponent from "@/components/Dialog";

// Heroicons
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function BtnEditClient() {
    // State
    const [open, setOpen] = useState(false);

    const btnConfirm = {
        onClick: () => console.log("Edit Client"),
        text: "Edit Client",
    };
    
    return (
        <>
            <button type="button" onClick={() => setOpen(true)}>
                <PencilSquareIcon className="h-5 w-5 text-gray-500 hover:text-blue-700" aria-hidden="true" />
            </button>
            <DialogComponent
                btnConfirm={btnConfirm}
                open={open}
                setOpen={setOpen}
                title="Edit Client"
                type="edit"
            >
                <h1 className="text-2xl font-bold">Edit Client</h1>
            </DialogComponent>
        </>
    );
}