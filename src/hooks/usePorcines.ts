// ReactJS
import { useEffect, useState } from "react";

// Services
import { getAllPorcines } from "@/services/porcines";

// Sonner
import { toast } from "sonner";

export default function usePorcines() {
    // State
    const [porcines, setPorcines] = useState([]);

    // Effects
    useEffect(() => {
        getAllPorcines()
            .then((res) => {
                setPorcines(res.data);
                toast.success("Successfully loaded porcines");
            })
            .catch(() => {
                toast.error("Failed to load porcines");
            });
    }, []);

    return { porcines };
}
