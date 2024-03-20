"use client";

// Custom Hook
import usePorcines from "@/hooks/usePorcines";

// Components
import TableComponent from "@/components/Table";

// UI
import BtnAddPorcine from "./BtnAddPorcine";
import BtnDeletePorcine from "./BtnDeletePorcine";
import BtnEditPorcine from "./BtnEditPorcine";
import BtnViewPorcine from "./BtnViewPorcine";

// Headers
const headers = ["ID", "Breed", "Age", "Weight", "Actions"];
      
export default function TablePorcines() {
    // Hooks
    const { porcines } = usePorcines();

    return (
        <div className="flex flex-col w-full p-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <p className="mt-2 text-sm text-gray-700">
                        In this section you can view, add, edit and delete porcines.
                    </p>
                </div>
                <BtnAddPorcine />
            </div>

            <TableComponent headers={headers}>
                {porcines.map((porcine) => (
                    <tr key={porcine?.id}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{porcine?.id}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{porcine?.breed?.charAt(0).toUpperCase() + porcine?.breed?.slice(1)}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{porcine?.age} years</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{porcine?.weight} kg</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 gap-4 flex justify-center">
                            <BtnViewPorcine />
                            <BtnEditPorcine />
                            <BtnDeletePorcine />
                        </td>
                    </tr>
                ))}
            </TableComponent>
        </div>
    );
}
      