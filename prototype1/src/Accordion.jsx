import React, { useState } from "react";

const Accordion = ({ info, details }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="py-1">
            <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-center w-full font-bold">
                <span className={`${accordionOpen ? "[&>div]:transition-all [&>div]:rounded-b-none transition-all delay-150 border-b-gray-500 border-b" : "[&>div]:transition-all [&>div]:delay-100"}`}>{info}</span>
            </button>
            <div className={`justify-center w-full grid overflow-hidden transition-all relative duration-300 rounded-t-none ease-in-out text-slate-600
            ${accordionOpen ? "grid-rows-[1fr] opacity-100 " : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">{details}</div>
            </div>
        </div>
    );
};

export default Accordion;