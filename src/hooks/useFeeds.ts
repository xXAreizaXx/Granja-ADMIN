// ReactJS
import { useEffect, useState } from "react";

// Services
import {
    createFeed,
    deleteFeed,
    getAllFeeds,
    getFeedById,
    updateFeed,
} from "@/services/feeds";

// Sonner
import { toast } from "sonner";

export default function useFeeds(id) {
    // State
    const [feeds, setFeeds] = useState([]);

    const [feed, setFeed] = useState(null);

    // Functions
    const handleCreateFeed = (data) => {
        return createFeed(data)
            .then((res) => {
                toast.success("Successfully created feed");
                return res;
            })
            .catch(() => {
                toast.error("Failed to create feed");
            });
    };

    const handleEditFeed = (id, data) => {
        return updateFeed(id, data)
            .then((res) => {
                toast.success("Successfully edited feed");
                return res;
            })
            .catch(() => {
                toast.error("Failed to edit feed");
            });
    };

    const handleDeleteFeed = (id) => {
        return deleteFeed(id)
            .then((res) => {
                toast.success("Successfully deleted feed");
                return res;
            })
            .catch(() => {
                toast.error("Failed to delete feed");
            });
    };

    // Effects
    useEffect(() => {
        getAllFeeds()
            .then((res) => {
                setFeeds(res.data);
            })
            .catch(() => {
                toast.error("Failed to load feeds");
            });
    }, []);

    useEffect(() => {
        if (!id) return;

        getFeedById(id)
            .then((res) => {
                setFeed(res.data);
            })
            .catch(() => {
                toast.error("Failed to load feed");
            });
    }, [id]);

    return { feeds, feed, handleCreateFeed, handleEditFeed, handleDeleteFeed };
}
