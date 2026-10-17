export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  minutes: number;
  lede: string;
  description: string;
  closeTitle: string;
  close: string;
  closeHref: string;
  closeLabel: string;
  sections: ArticleSection[];
};

export const ARTICLES: Article[] = [
  {
    slug: "google-ads-and-the-website",
    title: "How Google Ads help a website.",
    minutes: 2,
    lede: "The ad finds someone who is already searching. The page is what turns that visit into a call.",
    description: "Why a Google Ad only works when the page matches the search, and what the website has to do after the click.",
    closeTitle: "The ads, and the page.",
    close: "The prices for the website, and for running the ads, are on the pricing page. You pay Google for the clicks. Running the ads is separate.",
    closeHref: "/pricing#ads",
    closeLabel: "See the ads",
    sections: [
      {
        heading: "Someone is already looking.",
        paragraphs: [
          "A Google Ad does one job. It puts the business in front of a person who typed what they need. They searched for gas stove repair, or a cooker, or a renovation. They are closer to a phone call than someone who scrolled past a post.",
          "The click is not the enquiry. The click opens a page. If that page is a general homepage, with a welcome line and a menu of everything the business does, a lot of those people leave. They asked for one thing. The page made them look for it.",
        ],
      },
      {
        heading: "The page has to match the search.",
        paragraphs: [
          "The words they typed should be on the page they land on. Call now should be on that page, not one tap deeper. A form sits under it for the person who will not call from a shop, or from a meeting.",
          "If you run an ad for one service, that ad should open the page about that service. A repair ad that opens a page about the company history is a visit you paid for, and then lost.",
        ],
      },
      {
        heading: "What the money is for.",
        paragraphs: [
          "You pay Google for the clicks. For a local business, about ₹30,000 a month to Google is where enquiries start to come in. That money goes to Google. I set the campaigns up and keep them running, and that fee is separate.",
          "Ads are not required. A website can take calls on its own, from search and from people you send the link to. Ads are for the searches that are already happening, when you want those people this month.",
          "On the premium website, Google Analytics shows which search brought people, and which page made them call. That is how you can tell the ads are earning their place. A new advertiser in India may get ₹20,000 in Google Ads credit after they spend ₹20,000 in 60 days. Google decides who qualifies.",
        ],
      },
    ],
  },
  {
    slug: "a-premium-website-and-a-cheap-one",
    title: "A premium website, and a cheap one.",
    minutes: 2,
    lede: "A cheap site is usually a template you rent. A smaller site that you own is a different thing.",
    description: "What people mean by a cheap website, and what the one-page, basic, and premium websites here actually include.",
    closeTitle: "See the three websites.",
    close: "One page, the basic website, and the premium website are priced on one page, with what each one is for.",
    closeHref: "/pricing#websites",
    closeLabel: "See the prices",
    sections: [
      {
        heading: "What cheap usually means.",
        paragraphs: [
          "A cheap website, in the way most shops sell one, is a template. It is often under ₹20,000. The logo changes. The layout does not. It looks like a lot of other businesses, because it is the same page.",
          "The builder often charges every month to keep it online. You do not get the files. If you stop paying, the site goes. The phone number sits wherever the template left a gap. On a phone, the page can be slow, because the builder loaded it with things the business never asked for.",
        ],
      },
      {
        heading: "A smaller site can still be yours.",
        paragraphs: [
          "That is not the same as a smaller website that you own.",
          "One page here is ₹25,000, paid once. It is a complete page. Basic SEO, so Google has a page it can show. Vercel Analytics. Call now, and a form. Hosting with no monthly fee, and no ads sitting on the page. A free subdomain, ready to share. You can stop there.",
          "The basic website is ₹75,000, paid once. It is for a business that needs customers to find it and call. They see the work, and they reach you from the page. It is the same kind of site: you own the files, and hosting is not a monthly bill.",
        ],
      },
      {
        heading: "What the premium website adds.",
        paragraphs: [
          "The premium website is ₹1,50,000, paid once. It is for an owner who wants to know which search brought the call. Advanced SEO prepares the page for the words people already type. Google Analytics shows who visited, and which page. You get a text when someone writes, while they are still interested. I write the pages from what you tell me. The first month of small fixes is included.",
          "The smaller site is not a worse site. It can take a call, and you own it. The premium site is the one that tells you what happened after they arrived.",
          "The basic website and the premium website can be paid over a year. The year costs a little more than paying once. The ₹25,000 page is paid once.",
        ],
      },
    ],
  },
  {
    slug: "what-a-conversion-website-looks-like",
    title: "What a conversion-focused website looks like.",
    minutes: 2,
    lede: "The first screen says what you do, and how to call. Everything else has to earn its place.",
    description: "What a customer should see on the phone, and why the page is built around the call.",
    closeTitle: "That is the shape of the site.",
    close: "Every website starts with that shape. The pricing page shows what is included, and what you can add.",
    closeHref: "/pricing#included",
    closeLabel: "See what is included",
    sections: [
      {
        heading: "The first screen has one job.",
        paragraphs: [
          "A conversion-focused website does not open with a slogan about quality. It says what the business does, in the words a customer would use, and it shows how to reach you.",
          "Most people in India open it on a phone. Call now has to be there without a hunt. It rings your phone. A form sits under it for the person who would rather leave a name and a number.",
        ],
      },
      {
        heading: "Short, and about the work.",
        paragraphs: [
          "The page stays short. What you do. Where you do it. Proof you have done it, in photos of the real work. Then the call again.",
          "Each page has one job. A repair page talks about the repair and ends on the call. It does not also try to tell the whole company history. If you run an ad, the ad and the page say the same thing, so the person who clicked does not have to start over.",
        ],
      },
      {
        heading: "It has to open.",
        paragraphs: [
          "A heavy page loses the person before they see the number. Photos are light. There is no pile of extra scripts between them and the button. On a weak connection, the page should still show the work and the phone.",
          "You own the files. Hosting has no monthly fee, and there are no ads on your page. The one-page website is that shape, once. A larger site adds pages. The premium website adds the text when someone writes, and a way to see which page made them call.",
        ],
      },
    ],
  },
  {
    slug: "from-the-search-to-the-call",
    title: "From the search to the call.",
    minutes: 2,
    lede: "Search, the right page, a way to reach you, a text while they still care, and a record so you can follow up.",
    description: "The path a customer takes from a search to a saved enquiry, and where each part of the website sits on that path.",
    closeTitle: "Build that path.",
    close: "The website, the call, the form, and the text are on the pricing page. You choose which of them you want. Ads can feed the search. They are not required for the rest.",
    closeHref: "/pricing#websites",
    closeLabel: "See the websites",
    sections: [
      {
        heading: "They search, then they land.",
        paragraphs: [
          "Someone types the work, and often the city, because they want it done. Google shows a result, or an ad. If the words match, they tap.",
          "They should land on a page about that work. A homepage that makes them choose from a menu is a second search, and a lot of people will not do it. They go back to the results and call the next business.",
        ],
      },
      {
        heading: "They call, or they write.",
        paragraphs: [
          "On that page they can see what you do, and they can see the phone. They call. Or they write a name and a number, because they are with a customer, or they do not like calling a stranger.",
          "If they write, you should hear about it while they are still on the page. A text at that moment is when the job is still yours to take. If the message only sits in an email, they have often called someone else by the time you see it. The text is part of the premium website. The form itself is on every site.",
        ],
      },
      {
        heading: "The follow-up still has a place to live.",
        paragraphs: [
          "The enquiry is saved. The name, the number, and what they asked for are not only in a notification you might swipe away. If you missed the ring, you still have a way back to them the next morning.",
          "That is the path. Search. The right page. A way to call or write. A text to you. A record, so the follow-up happens. Each of those is a choice on the pricing page, and the first page does not have to include all of them.",
        ],
      },
    ],
  },
];

export function articleBySlug(slug: string) {
  return ARTICLES.find((article) => article.slug === slug) ?? null;
}

export function readLabel(minutes: number) {
  return minutes === 1 ? "1 minute" : `${minutes} minutes`;
}
