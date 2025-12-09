import React, { useState } from "react";

const Accordion = ({ info, details }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="py-2 rounded-xl">
            <button onClick={() => setAccordionOpen(!accordionOpen)} className={`flex justify-center w-full
            ${accordionOpen ? "rounded-b-none" : "rounded-xl"}`}>
                <span className={`${accordionOpen ? "rounded-b-none" : "rounded-xl"}`}>{info}</span>
            </button>
            <div className={`grid overflow-hidden transition-all -top-3 relative duration-300 rounded-t-none ease-in-out text-slate-600 text-sm
            ${accordionOpen ? "grid-rows-[1fr] opacity-100 " : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">{details}</div>
            </div>
        </div>
    );
};

export default Accordion;