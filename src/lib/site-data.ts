import { departments } from "@/lib/academics-data";
import { bhanjyangVolumesSorted } from "./bhanjyang-data";

export const contact = {
  phones: [
    { label: "Reception", number: "015971520" },
    { label: "Account", number: "014370246" },
    { label: "School Health Care Center", number: "014376775" },
  ],
  email: "office@bnks.edu.np",
  address: "Budhanilkantha, Kathmandu, Nepal",
  accountLine:
    "015971520 (Reception), 014370246 (Account Section), 014376775 (School Health Care Center)",
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "History", href: "/about-us/history" },
      { label: "School Profile", href: "/about-us/school-profile" },
      { label: "Board Of Trustees (BOT)", href: "/about-us/board-of-trustees" },
      {
        label: "School Management Committee",
        href: "/about-us/school-management-committee",
      },
      {
        label: "Senior Management Team (SMT)",
        href: "/about-us/senior-management-team",
      },
      { label: "FOBS (Parents' Body)", href: "/about-us/fobs" },
      { label: "SEBS (Alumni)", href: "/about-us/sebs" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: departments.map((d) => ({
      label: d.label,
      href: `/academics/${d.slug}`,
    })),
  },
  {
    label: "Notice",
    href: "/notice",
    children: [
      { label: "General Notices", href: "/notice" },
      {
        label: "Tender Notices",
        href: "/notice/invitation-for-bids-no-bnksncbworks012082-83",
      },
      {
        label: "Vacancy",
        href: "/notice/teachers-and-psychological-counsellor-wanted",
      },
    ],
  },
  
// ...inside navItems array, replace the old Bhanjyang entry with:
{
  label: "Bhanjyang (Annual Magazine)",
  href: "/bhanjyang",
  children: bhanjyangVolumesSorted.map((v) => ({
    label: v.title,
    href: `/bhanjyang/${v.slug}`,
  })),
},
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "Photos", href: "/gallery/photo" },
      { label: "Videos", href: "/gallery/video" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const loginLinks = [
  { label: "Login", href: "/Login" },
  
];


export const tickerNotices = [
  {
    title: "Revised Tender Notice (Wall Construction)",
    href: "/notice/revised-tender-notice-wall-construction",
  },
  {
    title: "BNKS Contributes Rs. 14 Lakh to the Prime Minister's Disaster Relief Fund",
    href: "/notice/bnks-contributes-rs-14-lakh-to-the-prime-ministers-disaster-relief-fund",
  },
  { title: "Graduation Ceremony", href: "/notice/graduation-ceremony" },
  { title: "INVITATION FOR BIDS", href: "/notice/invitation-for-bids" },
];

export const introduction = {
  paragraphs: [
    "The idea of establishing a model school that would provide quality all-round education to meritorious students coming from every walk of life in an environment that fosters unity in diversity was conceived in 1964. The idea was initiated by the Late King Mahendra in consultation with the then British Council representative, Lynndon Clough.",
    "After much planning and forethought, Budhanilkantha School came into existence in 1972. As a joint venture between the Government of the United Kingdom and the Government of Nepal, the Nepali government provided the required land and the British government provided all the technical and financial assistance.",
    "Teaching st...",
  ],
  image: "/Images/about.png",
  imageAlt: "Academic block at Budhanilkantha School",
  href: "/about-us/history",
};

export const latestNews = [
  {
    title: "Invitation for Bids No: BNKS/NCB/Works/01/2082-83",
    publishedOn: "2082-08-23",
    excerpt:
      "Budhanilkantha School (BNKS) invites electronic bids from eligible bidders for the construction of East Side Boundary Wall with V-Drain, Toe Wall and Landscaping, Main Gate and Guard Post (Package-C \u201c1st Phase\u201d) under National Competitive Bidding \u2013 Single Stage Two Envelope Bidding procedures.",
    image: "/Images/announcement.jpg",
    href: "/notice/invitation-for-bids-no-bnksncbworks012082-83",
  },
  {
    title: "Graduation Ceremony",
    publishedOn: "2083-05-10",
    excerpt:
      "Due to the tragic situation resulting from the recent flooding, the Graduation Ceremony for 7000E Batch, originally scheduled for Sunday, 14 Bhadra 2083 (30 August 2026), has been postponed until further notice. The revised date will be communicated to students and parents at a later time.",
    image: "/Images/announcement.jpg",
    href: "/notice/graduation-ceremony",
  },
];

export const ourEvents = [
  {
    title: "Natural Panorama",
    image: "/Images/events.jpg",
    href: "/gallery/photo",
  },
];

export const embeds = {
  // Replace with the school's own calendar / page IDs.
  googleCalendar:
    "https://calendar.google.com/calendar/embed?src=en.np%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKathmandu&mode=AGENDA&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0",
  facebookPage:
    "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbnksofficial&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true",
  // Direct link, used as a fallback whenever the embed above can't load
  // (common on localhost/Safari, where cross-site tracking protection
  // blocks Facebook's iframe cookies).
  facebookPageUrl: "https://www.facebook.com/bnksofficial/?ref=embed_page",
  youtube: "https://www.youtube.com/embed/uN9dYPZy9e0",
};

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Academics", href: "/academics" },
  { label: "Notice", href: "/notice" },
  { label: "Bhangyang ( Annual Magazine )", href: "/bhanjyang" },
  { label: "Gallery", href: "/gallery" },
  { label: "Library", href: "/library" },
];

export const footerBlurb =
  "Budhanilkantha School (CEEB Code: 689070), located in the capital city, Kathmandu, is the government designated National School of Nepal.";

export const socials = {
  facebook: "https://www.facebook.com/bnksofficial/?ref=embed_page",
  youtube: "https://www.youtube.com/embed/uN9dYPZy9e0",
  linkedin: "https://www.linkedin.com/school/budhanilkantha-school",
};