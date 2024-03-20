"use client";

// ReactJS
import { useState } from "react";

// Components
import DialogComponent from "@/components/Dialog";

// Custom Hook
import useClients from "@/hooks/useClients";

// Heroicons
import { TrashIcon } from "@heroicons/react/24/outline";

export default function BtnDeleteClient({ id }) {
    // Hooks
    const { handleDeleteClient } = useClients();

    // State
    const [open, setOpen] = useState(false);

    // Constants
    const btnConfirm = {
        onClick: () => handleDeleteClient(id),
        text: "Delete",
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
                <div className="flex flex-col gap-2">
                    <h3 className="text-md font-bold">
                        Are you sure you want to delete this client?
                    </h3>
                </div>
            </DialogComponent>
        </>
    );
}