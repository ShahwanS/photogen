"use client";

import React, { useState } from "react";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";

type FaqItemProps = {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
};

const FaqItem: React.FC<FaqItemProps> = ({ faq, isOpen, onToggle }) => {
  const contentClass = isOpen
    ? "max-h-96 transition-max-height duration-700 ease-in-out overflow-hidden"
    : "max-h-0 transition-max-height duration-700 ease-in-out overflow-hidden";

  return (
    <div className="border-b border-gray-700">
      <button
        className="flex items-center justify-between w-full p-5 text-left text-lg text-white hover:bg-[#252525]"
        onClick={onToggle}
      >
        <span className="flex-1">{faq.question}</span>
        {isOpen ? (
          <IoIosRemoveCircleOutline size={35} className="flex-shrink-0" />
        ) : (
          <IoIosAddCircleOutline size={35} className="flex-shrink-0" />
        )}
      </button>
      <div className={contentClass}>
        <div className="p-5 text-white bg-[#303030] text-base">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "Wo sind die besten Fotospots in Marburg?",
    answer:
      "Marburg bietet malerische Orte wie das Marburger Schloss, die Altstadt und die Ufer der Lahn.",
  },
  {
    question: "Gibt es Fotografie-Workshops in Marburg?",
    answer:
      "Ja, insbesondere im Sommer und Herbst werden verschiedene Workshops angeboten.",
  },
  {
    question: "Ist Drohnenfotografie in Marburg erlaubt?",
    answer:
      "Drohnenfotografie ist in einigen Gebieten erlaubt, es sollten jedoch lokale Vorschriften und No-Fly-Zonen beachtet werden.",
  },
  {
    question: "Kann man in Marburg Nachtfotografie betreiben?",
    answer:
      "Ja, das lebendige Nachtleben und gut beleuchtete historische Gebäude bieten ausgezeichnete Möglichkeiten für Nachtaufnahmen.",
  },
  {
    question: "Gibt es Fotografievereine in Marburg, denen ich beitreten kann?",
    answer:
      "Es gibt mehrere Fotografievereine und Gemeinschaften in Marburg, die Networking- und Lernmöglichkeiten bieten.",
  },
  {
    question:
      "Welche Jahreszeit eignet sich am besten für Fotografie in Marburg?",
    answer:
      "Der Herbst ist besonders schön für die Fotografie, wenn die Blätter ihre Farben wechseln.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-[#1E1E1E]">
      <div className=" p-6 rounded-lg w-full ">
        <h1 className="text-3xl text-[#9E9E9E] mb-6 self-center">
          Häufig gestellte Fragen
        </h1>

        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            faq={faq}
            isOpen={index === openIndex}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>

      <h1 className="sm:text-5xl text-[#9E9E9E] mb-6 self-center m-5">
        Haben Sie immer noch Fragen?
      </h1>
      <p className="text-2xl text-white">
        Zögern Sie nicht, uns zu kontaktieren
      </p>
      <a
        className="border-2 rounded-xl p-4 m-5 hover:opacity-70 text-white"
        href="/Contact"
      >
        Kontakt
      </a>
    </div>
  );
};

export default Faq;
