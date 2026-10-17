export type Project = {
  slug: string;
  name: string;
  lede: string;
  problem: string;
  solution: string;
  changed: string[];
  url: string;
  shot: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "mobwik",
    name: "Mobwik",
    lede: "A website for a mobile repair shop. The manuals open on the phone, even when the connection is weak.",
    problem: "The people doing the repair needed the manuals on the job. A slow connection meant the page never finished opening, so the job waited.",
    solution: "The pages are light, and the manuals stay on the phone. They can open them without waiting on the network.",
    changed: [
      "Built for a phone, where the work actually happens.",
      "The manuals still open when the connection drops.",
      "The business owns the files.",
    ],
    url: "https://mobwik.vercel.app",
    shot: "/screenshots/mobwik.webp",
  },
  {
    slug: "dakeek",
    name: "Dakeek",
    lede: "A website for a property maintenance company. The job goes to the driver, without a chain of texts.",
    problem: "Dispatchers typed addresses into texts by hand. Drivers waited, and the same job was booked twice.",
    solution: "The job goes to the driver's phone. They update it there, and the office can see what is still open.",
    changed: [
      "The address reaches the driver without a chain of texts.",
      "The same job is not booked twice.",
      "The team can see what is still open.",
    ],
    url: "https://dakeek.ae",
    shot: "/screenshots/dakeek.webp",
  },
  {
    slug: "checkersmark",
    name: "Checkersmark",
    lede: "An app that tracks tasks, customers, and daily work. An enquiry is saved, and you get a text when someone writes.",
    problem: "Enquiries sat in a spreadsheet and a crowded inbox. A reply took long enough that the customer called someone else.",
    solution: "The form saves the enquiry and sends a text. Nothing has to be copied by hand.",
    changed: [
      "The enquiry is saved when they write.",
      "You get a text while they are still looking.",
      "The follow-up lives in one place.",
    ],
    url: "https://checkersmark.com",
    shot: "/screenshots/checkersmark.webp",
  },
  {
    slug: "novacookers",
    name: "Nova",
    lede: "A website for a shop that sells cookers, hobs, and ovens. The products open on a phone.",
    problem: "The catalog was slow on a phone. People left before they saw what the shop sold.",
    solution: "The products open quickly, and a customer can search on the page.",
    changed: [
      "A customer can see the products on a phone.",
      "Search works on the page.",
      "The shop owns the site.",
    ],
    url: "https://novacookers.vercel.app",
    shot: "/screenshots/novacookers.webp",
  },
  {
    slug: "ksingh",
    name: "KSingh",
    lede: "A website for a home renovation company. The work shows on a phone.",
    problem: "The old site was slow, and the drawings did not show properly on a phone. People could not see the work.",
    solution: "Rebuilt so the work shows immediately, on a phone and on a computer. The drawings stay sharp.",
    changed: [
      "The work is visible on a phone.",
      "The drawings stay sharp.",
      "The page matches the firm.",
    ],
    url: "https://ksinghconstruction.vercel.app",
    shot: "/screenshots/ksingh.webm",
  },
  {
    slug: "jsgastech",
    name: "JS",
    lede: "A website for gas stove repair and pipeline fitting. The page matches the search, and the call is on that page.",
    problem: "The ads sent people to a homepage that did not match the search. They could not see how to book, so the visit did not become a call.",
    solution: "The page is written for the search they already typed. Call now sits on that page, and the enquiry is saved.",
    changed: [
      "The visit lands on the page about the repair.",
      "The call is on that page.",
      "The enquiry is saved.",
    ],
    url: "https://jsgastech.com",
    shot: "/screenshots/jsgastech.webp",
  },
];

export function projectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug) ?? null;
}
