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
    desc: "When a customer wants to hire you, they fill out a simple contact form on your website with their name and email."
  },
  {
    id: "box-2",
    num: "02",
    title: "Leads Are Saved",
    desc: "Their details are saved automatically in your list. You do not have to write anything down, and you will never lose a lead."
  },
  {
    id: "box-3",
    num: "03",
    title: "Get Text Notification",
    desc: "You get a text message on your phone right away. This lets you call the customer back fast before they look for someone else."
  }
];

export default function GravityBentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {initialCards.map((card) => (
        <div
          key={card.id}
          className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
        >
          <span className="text-6xl font-black text-slate-200 block leading-none select-none">{card.num}</span>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{card.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              {card.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
