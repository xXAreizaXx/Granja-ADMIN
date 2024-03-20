// ReactJS
import { useEffect, useState } from "react";

// Services
import { getAllClients } from "@/services/clients";

// Sonner
import { toast } from "sonner";

export default function useClients() {
    // State
    const [clients, setClients] = useState([]);

    // Effects
    useEffect(() => {
        getAllClients()
            .then((res) => {
                setClients(res.data);
                toast.success("Successfully loaded clients");
            })
            .catch(() => {
                toast.error("Failed to load clients");
            });
    }, []);

    return { clients };
}
