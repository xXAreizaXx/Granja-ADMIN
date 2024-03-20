"use client";

// ReactJS
import { useState } from "react";

// Components
import DialogComponent from "@/components/Dialog";

// UI
import FormEditFeed from "./FormEditFeed";

// Heroicons
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function BtnEditFeed({ id, feed }) {
    // State
    const [open, setOpen] = useState(false);

    const btnConfirm = {
        onClick: () => console.log("Edit Feed"),
        text: "Edit",
    };
    
    return (
        <>
            <button type="button" onClick={() => setOpen(true)}>
                <PencilSquareIcon className="h-5 w-5 text-gray-500 hover:text-blue-700" aria-hidden="true" />
            </button>
            <DialogComponent
                btnConfirm={btnConfirm}
                hasBtns={false}
                open={open}
                setOpen={setOpen}
                title="Edit Feed"
                type="edit"
            >
                <FormEditFeed id={id} feed={feed} onCancel={() => setOpen(false)} />
            </DialogComponent>
        </>
    );
}