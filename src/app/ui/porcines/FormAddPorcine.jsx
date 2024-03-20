"use client";

// ReactJS
import { useForm } from "react-hook-form";

// Custom Hook
import usePorcines from "@/hooks/usePorcines";
import useClients from "@/hooks/useClients";
import useFeeds from "@/hooks/useFeeds";

// External Dependencies
import { toast } from "sonner";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function FormAddPorcine({ onCancel }) {
    // Hooks
    const { handleCreatePorcine } = usePorcines();
    const { clients } = useClients();
    const { feeds } = useFeeds();

    // Validation
    const schema = yup.object().shape({
        breed: yup.string().required("Breed is required"),
        age: yup.number().required("Age is required"),
        weight: yup.number().required("Weight is required"),
        client: yup.number().required("Client is required"),
        feed: yup.number().required("Feed is required"),
    });

    // Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    // Functions
    const onSubmit = (data) => {
        const refactoredData = {
            breed: data.breed,
            age: data.age,
            weight: data.weight,
            clientId: data.client,
            feedId: data.feed,
        };

        handleCreatePorcine(refactoredData)
            .then(() => {
                toast.success("Porcine created successfully");
                onCancel();
            })
            .catch(() => {
                toast.error("Error creating porcine");
            });
    };

    return (
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
                <label htmlFor="breed" className="block text-sm font-medium leading-6 text-gray-900">
                    Breed
                </label>
                <div className="mt-2">
                    <select
                        {...register("breed")}
                        id="breed"
                        name="breed"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        <option value="york">York</option>
                        <option value="hamp">Hamp</option>
                        <option value="duroc">Duroc</option>
                    </select>
                </div>
            </div>
            
            <div className="flex flex-col">
                <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">
                    Age
                </label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            {...register("age")}
                            type="number"
                            min="1"
                            name="age"
                            id="age"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Enter age"
                        />
                    </div>
                </div>
                {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>}
            </div>

            <div className="flex flex-col">
                <label htmlFor="weight" className="block text-sm font-medium leading-6 text-gray-900">
                    Weight
                </label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            {...register("weight")}
                            type="number"
                            min="1"
                            name="weight"
                            id="weight"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Enter weight"
                        />
                    </div>
                </div>
                {errors.weight && <p className="text-red-500 text-xs mt-1">{errors.weight.message}</p>}
            </div>

            <div className="flex flex-col">
                <label htmlFor="client" className="block text-sm font-medium leading-6 text-gray-900">
                    Client
                </label>
                <div className="mt-2">
                    <select
                        {...register("client")}
                        id="client"
                        name="client"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        {clients.map((client) => (
                            <option key={client.id} value={client.id}>
                                {client.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="flex flex-col">
                <label htmlFor="feed" className="block text-sm font-medium leading-6 text-gray-900">
                    Feed
                </label>
                <div className="mt-2">
                    <select
                        {...register("feed")}
                        id="feed"
                        name="feed"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        {feeds.map((feed) => (
                            <option key={feed.id} value={feed.id}>
                                {feed.dose}
                            </option>
                        ))}
                    </select>
                </div>
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