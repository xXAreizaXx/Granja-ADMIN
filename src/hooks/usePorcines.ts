// ReactJS
import { useEffect, useState } from "react";

// Services
import {
    createPorcine,
    deletePorcine,
    getAllPorcines,
    getPorcineById,
    updatePorcine,
} from "@/services/porcines";

// Sonner
import { toast } from "sonner";

export default function usePorcines(id) {
    // State
    const [porcines, setPorcines] = useState([]);

    const [porcine, setPorcine] = useState(null);

    // Functions
    const handleCreatePorcine = (data) => {
        return createPorcine(data)
            .then((res) => {
                toast.success("Successfully created porcine");
                return res;
            })
            .catch(() => {
                toast.error("Failed to create porcine");
            });
    };

    const handleEditPorcine = (id, data) => {
        return updatePorcine(id, data)
            .then((res) => {
                toast.success("Successfully edited porcine");
                return res;
            })
            .catch(() => {
                toast.error("Failed to edit porcine");
            });
    };

    const handleDeletePorcine = (id) => {
        return deletePorcine(id)
            .then((res) => {
                toast.success("Successfully deleted porcine");
                return res;
            })
            .catch(() => {
                toast.error("Failed to delete porcine");
            });
    };

    // Effects
    useEffect(() => {
        getAllPorcines()
            .then((res) => {
                setPorcines(res.data);
            })
            .catch(() => {
                toast.error("Failed to load porcines");
            });
    }, []);

    useEffect(() => {
        if (!id) return;

        getPorcineById(id)
            .then((res) => {
                setPorcine(res.data);
            })
            .catch(() => {
                toast.error("Failed to load porcine");
            });
    }, [id]);

    return {
        porcines,
        porcine,
        handleCreatePorcine,
        handleEditPorcine,
        handleDeletePorcine,
    };
}
