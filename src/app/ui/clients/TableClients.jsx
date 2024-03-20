"use client";

// Components
import TableComponent from "@/components/Table";

// Custom Hook
import useClients from "@/hooks/useClients";

// UI
import BtnAddClient from "./BtnAddClient";
import BtnDeleteClient from "./BtnDeleteClient";
import BtnEditClient from "./BtnEditClient";
import BtnViewClient from "./BtnViewClient";

// Headers
const headers = ["ID", "Name", "Last Name", "Document", "Address", "Cellphone", "Actions"];
      
export default function TableClients() {
    // Hooks
    const { clients } = useClients();

    return (
        <div className="flex flex-col w-full p-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <p className="mt-2 text-sm text-gray-700">
                        In this section you can view, add, edit and delete Clients.
                    </p>
                </div>
                <BtnAddClient />
            </div>

            <TableComponent headers={headers}>
                {clients.map((client) => (
                    <tr key={client?.id}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{client?.id}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{client?.name?.charAt(0).toUpperCase() + client?.name?.slice(1)}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{client?.lastName?.charAt(0).toUpperCase() + client?.lastName?.slice(1)}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{client?.document}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{client?.address}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{client?.cellphone}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 gap-4 flex justify-center">
                            <BtnViewClient id={client?.id} />
                            <BtnEditClient id={client?.id} client={client} />
                            <BtnDeleteClient id={client?.id} />
                        </td>
                    </tr>
                ))}
            </TableComponent>
        </div>
    );
}
      