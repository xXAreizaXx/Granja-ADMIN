// ReactJS
import { useEffect, useState } from "react";

// Services
import {
    createClient,
    deleteClient,
    getAllClients,
    getClientById,
    updateClient,
} from "@/services/clients";

// Sonner
import { toast } from "sonner";

export default function useClients(id) {
    // State
    const [clients, setClients] = useState([]);

    const [client, setClient] = useState(null);

    // Functions
    const handleCreateClient = (data) => {
        return createClient(data)
            .then((res) => {
                toast.success("Successfully created client");
                return res;
            })
            .catch(() => {
                toast.error("Failed to create client");
            });
    };

    const handleEditClient = (id, data) => {
        return updateClient(id, data)
            .then((res) => {
                toast.success("Successfully edited client");
                return res;
            })
            .catch(() => {
                toast.error("Failed to edit client");
            });
    };

    const handleDeleteClient = (id) => {
        return deleteClient(id)
            .then((res) => {
                toast.success("Successfully deleted client");
                return res;
            })
            .catch(() => {
                toast.error("Failed to delete client");
            });
    };

    // Effects
    useEffect(() => {
        getAllClients()
            .then((res) => {
                setClients(res.data);
            })
            .catch(() => {
                toast.error("Failed to load clients");
            });
    }, []);

    useEffect(() => {
        if (!id) return;

        getClientById(id)
            .then((res) => {
                setClient(res.data);
            })
            .catch(() => {
                toast.error("Failed to load client");
            });
    }, [id]);

    return {
        clients,
        client,
        handleCreateClient,
        handleEditClient,
        handleDeleteClient,
    };
}
