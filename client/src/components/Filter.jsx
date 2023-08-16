import React, { Fragment, useEffect, useState } from "react";

import { BiFilter } from "react-icons/bi";

import { Combobox, Transition } from "@headlessui/react";
import axios from "axios";

const Filter = ({ setSelected, selected }) => {
  const [query, setQuery] = useState("");
  const [tags, setTags] = useState([]);
  const serverUrl = import.meta.env.VITE_SERVER_URL

  useEffect(() => {
    const fetchTags = async () => {
      try {

        const response = await axios.get(
          `${serverUrl}/post/getcategories`
        );

        setTags(response.data)

      } catch (error) {
        console.error("Error fetching tags", error);
      }
    }

    fetchTags();
  }, []);

  const filteredTag =
    query === ""
      ? tags
      : tags.filter((tag) => {
          return tag.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="w-full flex justify-end">
      <div className="mt-8 sm:mt-28 w-40 relative">
        <Combobox
          value={selected}
          onChange={setSelected}
          as={Fragment}
          nullable
        >
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Aplicar filtros"
            className="w-full pl-7 py-2 border border-gray-500 rounded-lg"
          />

          <Combobox.Button className="absolute top-[14px] left-2">
            <BiFilter />
          </Combobox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute">
              {filteredTag.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) => `
                                    relative border border-gray-500 w-40 rounded-md px-3 py-2 text-base shadow-lg focus:outline-none sm:text-sm z-10 
                                    ${
                                      active
                                        ? "bg-blue-400 text-white"
                                        : "text-gray-900 bg-white"
                                    }
                                `}
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>

                      {/* Show an active blue background color if the option is selected */}
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-purple-600"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </Combobox>
      </div>
    </div>
  );
};

export default Filter;
