"use client";

// ReactJS
import { useState } from "react";

// Components
import DialogComponent from "@/components/Dialog";

// Custom Hook
import useFeeds from "@/hooks/useFeeds";

// Heroicons
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function BtnViewFeed({ id }) {
    // Hooks
    const { feed } = useFeeds(id);

    // State
    const [open, setOpen] = useState(false);

    const btnConfirm = {
        onClick: () => setOpen(false),
        text: "Confirm",
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
                title="View Feed"
                type="view"
            >
                <div className="flex flex-col gap-2">
                    <h3 className="text-md font-bold">
                    Dose: <span className="text-black font-normal">{feed?.dose}</span>
                    </h3>
                    <h3 className="text-md font-bold">
                    Description: <span className="text-black font-normal">{feed?.description}</span>
                    </h3>
                </div>
            </DialogComponent>
        </>
    );
}