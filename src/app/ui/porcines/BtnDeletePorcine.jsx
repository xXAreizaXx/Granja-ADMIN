"use client";

// ReactJS
import { useState } from "react";

// Components
import DialogComponent from "@/components/Dialog";

// Custom Hook
import usePorcines from "@/hooks/usePorcines";

// Heroicons
import { TrashIcon } from "@heroicons/react/24/outline";

export default function BtnDeletePorcine({ id }) {
    // Hooks
    const { handleDeletePorcine } = usePorcines(id);

    // State
    const [open, setOpen] = useState(false);

    // Constants
    const btnConfirm = {
        onClick: () => handleDeletePorcine(id),
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
                title="Delete Porcine"
                type="delete"
            >
                <div className="flex flex-col gap-2">
                    <h3 className="text-md font-bold">
                        Are you sure you want to delete this porcine?
                    </h3>
                </div>
            </DialogComponent>
        </>
    );
}