"use client";
import { dummy } from "@/lib/dummyData";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import ShortUniqueId from "short-unique-id";
import { useListContext } from "./Context";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonWrapper from "./ButtonWrapper";
import toast, { Toaster } from "react-hot-toast";

interface EventType {
  id?: number;
  name: string;
  description: string;
  deadline: string;
}

const uid = new ShortUniqueId({ length: 10, dictionary: "number" });

const formSchema = z.object({
  name: z.string().min(4, "Name is required"),
  description: z.string().min(1, "Description is required"),
  deadline: z.string().min(1, "Deadline is required"),
});

const EventForm = () => {
  let { setList } = useListContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EventType>({
    resolver: zodResolver(formSchema),
  });

  // const [eventDetails, setEventDetails] = useState<EventType>({
  //   name: "",
  //   description: "",
  //   deadline: "",
  // });

  const router = useRouter();

  // const handleChange = (
  //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;

  //   setEventDetails((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const onSubmit = (data: EventType) => {
    const newEvent: EventType = {
      id: parseInt(uid.randomUUID(10)),
      ...data,
    };

    console.log(newEvent);

    setList((prev) => [...prev, newEvent]);

    toast.success("Event added successfully!");

    // reset form
    reset();

    router.push("/events");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-[450px] xs:min-w-[340px] min-w-[310] w-full p-4 md:p-6 shadow-lg rounded-xl bg-secondary  border-2 border-gray-100 "
      >
        <Toaster position="bottom-center" reverseOrder={false} />
        <div className="mb-4">
          <label
            className="block text-secondarytext-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            // name="name"
            {...register("name")}
            placeholder="Event name"
            autoFocus
            className="shadow appearance-none rounded w-full text-sm font-medium py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline focus:border-gray-900 border"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-secondarytext-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            // name="description"
            {...register("description")}
            placeholder="Event description "
            className="shadow appearance-none rounded w-full text-sm font-medium py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline focus:border-gray-900 border"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-secondarytext-700 text-sm font-bold mb-2"
            htmlFor="deadline"
          >
            Submission Deadline
          </label>
          <input
            id="deadline"
            type="date"
            // name="deadline"
            // value={eventDetails.deadline}
            // onChange={handleChange}
            {...register("deadline")}
            className="shadow appearance-none rounded w-full text-sm  font-medium py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline focus:border-gray-900 border"
          />
        </div>
        <button
          type="submit"
          className=" mx-auto flex h-10 items-center  justify-center rounded-lg bg-tangerine px-4 font-semibold text-white text-lg focus:ring-4 hover:bg-[#ff6229] transition-all delay-300 shadow-md"
        >
          Submit
        </button>
      </form>
      {errors.name && (
        <p className="text-tangerine  font-bold text-xs mt-1">
          {errors.name.message}
        </p>
      )}
      {errors.description && (
        <p className="text-tangerine  font-bold text-xs mt-1">
          {errors.description.message}
        </p>
      )}
      {errors.deadline && (
        <p className="text-tangerine  font-bold text-xs mt-1">
          {errors.deadline.message}
        </p>
      )}
    </div>
  );
};

export default EventForm;
