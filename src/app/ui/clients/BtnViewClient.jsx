"use client";

// ReactJS
import { useState } from "react";

// Components
import DialogComponent from "@/components/Dialog";

// Custom Hook
import useClients from "@/hooks/useClients";

// Heroicons
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function BtnViewClient({ id }) {
    // Hooks
    const { client } = useClients(id);

    // State
    const [open, setOpen] = useState(false);

    const btnConfirm = {
        onClick: () => setOpen(false),
        text: "View Client",
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
                title="View Client"
                type="view"
            >
                <div className="flex flex-col gap-2">
                    <h3 className="text-md font-bold">
                        Name: <span className="text-black font-normal">{client?.name}</span>
                    </h3>
                    <h3 className="text-md font-bold">
                        Last Name: <span className="text-black font-normal">{client?.lastName}</span>
                    </h3>
                    <h3 className="text-md font-bold">
                        Document: <span className="text-black font-normal">{client?.document}</span>
                    </h3>
                    <h3 className="text-md font-bold">
                        Address: <span className="text-black font-normal">{client?.address}</span>
                    </h3>
                    <h3 className="text-md font-bold">
                        Cellphone: <span className="text-black font-normal">{client?.cellphone}</span>
                    </h3>
                </div>
            </DialogComponent>
        </>
    );
}