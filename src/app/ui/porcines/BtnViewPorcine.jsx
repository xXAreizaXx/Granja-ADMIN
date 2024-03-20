"use client";

// ReactJS
import { useState } from "react";

// Components
import DialogComponent from "@/components/Dialog";

// Custom Hook
import usePorcines from "@/hooks/usePorcines";

// Heroicons
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function BtnViewPorcine({ id }) {
    // Hooks
    const { porcine } = usePorcines(id);

    // State
    const [open, setOpen] = useState(false);

    const btnConfirm = {
        onClick: () => console.log("View porcine"),
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
                title="View Porcine"
                type="view"
            >
                <div className="flex flex-col gap-2">
                    <h3 className="text-md font-bold">
                        Breed: <span className="text-black font-normal">{porcine?.breed?.charAt(0).toUpperCase() + porcine?.breed?.slice(1)}</span>
                    </h3>
                    <h3 className="text-md font-bold">
                        Age: <span className="text-black font-normal">{porcine?.age} years</span>
                    </h3>
                    <h3 className="text-md font-bold">
                        Weight: <span className="text-black font-normal">{porcine?.weight} kg</span>
                    </h3>

                    <br />

                    <h3 className="text-md font-bold">CLIENT</h3>

                    <h3 className="text-md font-bold">
                        Name: <span className="text-black font-normal">{porcine?.client?.name}</span>
                    </h3>
                    <h3 className="text-md font-bold">
                        Last Name: <span className="text-black font-normal">{porcine?.client?.lastName}</span>
                    </h3>
                    <h3 className="text-md font-bold">
                        Document: <span className="text-black font-normal">{porcine?.client?.document}</span>
                    </h3>
                    <h3 className="text-md font-bold">
                        Address: <span className="text-black font-normal">{porcine?.client?.address}</span>
                    </h3>
                    <h3 className="text-md font-bold">
                        Cellphone: <span className="text-black font-normal">{porcine?.client?.cellphone}</span>
                    </h3>   

                    <br />

                    <h3 className="text-md font-bold">FEEDS</h3>

                    <h3 className="text-md font-bold">
                        Dose: <span className="text-black font-normal">{porcine?.feed?.dose}</span>
                    </h3>
                    <h3 className="text-md font-bold">
                        Description: <span className="text-black font-normal">{porcine?.feed?.description}</span>
                    </h3>                 
                </div>
            </DialogComponent>
        </>
    );
}