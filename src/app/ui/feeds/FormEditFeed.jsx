"use client";

// ReactJS
import { useForm } from "react-hook-form";

// Custom Hook
import useFeeds from "@/hooks/useFeeds";

// External Dependencies
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";

export default function FormEditFeed({ id, feed, onCancel }) {
    // Hooks
    const { handleEditFeed } = useFeeds();

    // Validation
    const schema = yup.object().shape({
        dose: yup.string().required("Dose is required"),
        description: yup.string().required("Description is required"),
    });

    // Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            dose: feed.dose,
            description: feed.description,
        },
    });

    // Functions
    const onSubmit = (data) => {
        handleEditFeed(id, data)
            .then(() => {
                toast.success("Feed edited successfully");
                onCancel();
            })
            .catch(() => {
                toast.error("Error editing feed");
            });
    };

    return (
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
                <label htmlFor="dose" className="block text-sm font-medium leading-6 text-gray-900">
                    Dose
                </label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            {...register("dose")}
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            defaultValue={feed.dose}
                            id="dose"
                            name="dose"
                            placeholder="Enter dose"
                            type="text"
                        />
                    </div>
                </div>
                {errors.dose && <p className="text-red-500 text-xs mt-1">{errors.dose.message}</p>}
            </div>

            <div className="col-span-full">
                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                    Description
                </label>
                <div className="mt-2">
                    <textarea
                        {...register("description")}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={feed.description}
                        id="description"
                        name="description"
                        placeholder="Enter description"
                        rows={3}
                    />
                </div>
                {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
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
                    Edit
                </button>
            </div>
        </form>
    );
}