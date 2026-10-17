import React from "react";

interface CardData {
  id: string;
  num: string;
  title: string;
  desc: string;
}

const initialCards: CardData[] = [
  {
    id: "box-1",
    num: "01",
    title: "Customer Fills Form",
    desc: "When someone wants to hire you, they fill a short form with their name and phone."
  },
  {
    id: "box-2",
    num: "02",
    title: "Message Is Saved",
    desc: "The message is saved. You do not have to write it down."
  },
  {
    id: "box-3",
    num: "03",
    title: "You Get a Text",
    desc: "You get a text on your phone, so you can call them back."
  },
  {
    id: "box-4",
    num: "04",
    title: "A Short Reply",
    desc: "They get a short reply while they wait for your call."
  }
];

export default function GravityBentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {initialCards.map((card) => (
        <div
          key={card.id}
          className="bg-white p-7 lg:p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between h-full space-y-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
        >
          <span className="text-6xl font-black text-slate-600 block leading-none select-none" aria-hidden="true">{card.num}</span>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-tight whitespace-nowrap">
              {card.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium line-clamp-3 min-h-[4.125rem]">
              {card.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
