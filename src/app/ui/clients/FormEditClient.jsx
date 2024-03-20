"use client";

// ReactJS
import { useForm } from "react-hook-form";

// Custom Hook
import useClients from "@/hooks/useClients";

// External Dependencies
import { toast } from "sonner";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function FormEditClient({ id, client, onCancel }) {
    // Hooks
    const { handleEditClient } = useClients();

    // Validation
    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        lastName: yup.string().required("Last name is required"),
        document: yup.string().required("Document is required"),
        address: yup.string().required("Address is required"),
        cellphone: yup.string().required("Cellphone is required"),
    });

    // Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: client.name,
            lastName: client.lastName,
            document: client.document,
            address: client.address,
            cellphone: client.cellphone,
        },
    });

    // Functions
    const onSubmit = (data) => {
        handleEditClient(id, data)
            .then(() => {
                toast.success("Client edited successfully");
                onCancel();
            })
            .catch(() => {
                toast.error("Error editing client");
            });
    };
    return (
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Name
                </label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            {...register("name")}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            defaultValue={client.name}
                            id="name"
                            name="name"
                            placeholder="Enter name"
                            type="text"
                        />
                    </div>
                </div>
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div className="flex flex-col">
                <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                    Last Name
                </label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            {...register("lastName")}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            defaultValue={client.lastName}
                            id="lastName"
                            name="lastName"
                            placeholder="Enter Last Name"
                            type="text"
                        />
                    </div>
                </div>
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
            </div>

            <div className="flex flex-col">
                <label htmlFor="document" className="block text-sm font-medium leading-6 text-gray-900">
                    Document
                </label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            {...register("document")}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            defaultValue={client.document}
                            id="document"
                            name="document"
                            placeholder="Enter document"
                            type="text"
                        />
                    </div>
                </div>
                {errors.document && <p className="text-red-500 text-xs mt-1">{errors.document.message}</p>}
            </div>

            <div className="flex flex-col">
                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                    Address
                </label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            {...register("address")}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            defaultValue={client.address}
                            id="address"
                            name="address"
                            placeholder="Enter address"
                            type="text"
                        />
                    </div>
                </div>
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
            </div>

            <div className="flex flex-col">
                <label htmlFor="cellphone" className="block text-sm font-medium leading-6 text-gray-900">
                    Cellphone
                </label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            {...register("cellphone")}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            defaultValue={client.cellphone}
                            id="cellphone"
                            name="cellphone"
                            placeholder="Enter cellphone"
                            type="text"
                        />
                    </div>
                </div>
                {errors.cellphone && <p className="text-red-500 text-xs mt-1">{errors.cellphone.message}</p>}
            </div>

            <div className="flex justify-end gap-4 mt-4">
                <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="bg-violet-700 hover:bg-violet-600 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                >
                    Create
                </button>
            </div>
        </form>
    );
}