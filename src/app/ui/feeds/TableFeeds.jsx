"use client";

// Components
import TableComponent from "@/components/Table";

// Custom Hook
import useFeeds from "@/hooks/useFeeds";

// UI
import BtnAddFeed from "./BtnAddFeed";
import BtnDeleteFeed from "./BtnDeleteFeed";
import BtnEditFeed from "./BtnEditFeed";
import BtnViewFeed from "./BtnViewFeed";

// Headers
const headers = ["ID", "Dose", "Description", "Actions"];
      
export default function TableFeeds() {
    // Hooks
    const { feeds } = useFeeds();

    return (
        <div className="flex flex-col w-full p-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <p className="mt-2 text-sm text-gray-700">
                        In this section you can view, add, edit and delete Feeds.
                    </p>
                </div>
                <BtnAddFeed />
            </div>

            <TableComponent headers={headers}>
                {feeds.map((feed) => (
                    <tr key={feed?.id}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{feed?.id}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{feed?.dose}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{feed?.description}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 gap-4 flex justify-center">
                            <BtnViewFeed id={feed?.id} />
                            <BtnEditFeed id={feed?.id} />
                            <BtnDeleteFeed id={feed?.id} />
                        </td>
                    </tr>
                ))}
            </TableComponent>
        </div>
    );
}
      