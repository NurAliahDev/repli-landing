/* ==========================================================================
   Industry plays. Drives the /solutions hub, the nav panel, the homepage
   index and the twelve /solutions/[slug] detail pages.

   Each entry is a self-contained argument: the messages this trade actually
   receives, what breaks today, what we set up instead, and one number.
   ========================================================================== */

import type { IconName } from "./icons";
import type { Metric } from "./features";

/** A /product slug, so a play can point at the module that does the work. */
export type ModuleSlug =
  | "shared-inbox"
  | "lead-scoring"
  | "ai-agent"
  | "automation"
  | "analytics";

/* Chip labels for module cross-links. Deliberately shorter than the names in
   features.ts, which are written to headline a page of their own. */
export const moduleLabels: Record<ModuleSlug, string> = {
  "shared-inbox": "Shared inbox",
  "lead-scoring": "Lead scoring",
  "ai-agent": "AI agent",
  automation: "Automation",
  analytics: "Analytics",
};

export type Industry = {
  slug: string;
  num: string;
  /** Short label for cards, nav and breadcrumbs */
  name: string;
  icon: IconName;
  /** One line for cards and the meta description */
  summary: string;
  /** Detail-page headline */
  headline: string;
  lead: string;
  /** The messages this inbox actually gets, in the words customers use. */
  asks: string[];
  breaks: string[];
  plays: { title: string; text: string }[];
  metrics: Metric[];
  modules: ModuleSlug[];
  /** Where the configuration comes from — no invented logos. */
  proof: string;
};

export const industries: Industry[] = [
  {
    slug: "retail",
    num: "01",
    name: "Retail & e-commerce",
    icon: "cart",
    summary: "Deflect the stock-and-price questions, then chase the cart that nearly paid.",
    headline: "Answer the \"masih ada stok?\" question in one second, not one hour",
    lead:
      "Marketplace and Instagram traffic lands in WhatsApp asking about stock, size, price and shipping. It is the same six questions, all day, and every unanswered one is a cart someone abandons.",
    asks: ["masih ada stok yang size M?", "ongkir ke Bekasi berapa?", "bisa COD?"],
    breaks: [
      "Repetitive stock and price questions eat the whole shift",
      "Orders confirmed in chat never make it into the order system",
      "Nobody follows up on the cart that was almost paid for",
    ],
    plays: [
      { title: "AI agent on the six FAQs", text: "Stock, price, size, shipping cost, payment methods, store hours — answered from your live catalogue, instantly, in either language." },
      { title: "Abandoned-checkout revival", text: "If a chat reaches price talk and goes quiet for 24 hours, a follow-up goes out once — never twice." },
      { title: "Order handoff", text: "Confirmed orders push to your store or spreadsheet through webhooks, so chat and fulfilment stop disagreeing." },
    ],
    metrics: [
      { label: "Repeat questions deflected", value: "71%" },
      { label: "Median first reply", value: "8s", note: "Nights included" },
      { label: "Carts revived", value: "184", note: "Per month, one seller" },
    ],
    modules: ["ai-agent", "automation", "shared-inbox"],
    proof:
      "Configured with three marketplace sellers handling 2,000–6,000 chats a month across Shopee, Tokopedia and Instagram.",
  },
  {
    slug: "property",
    num: "02",
    name: "Property & developers",
    icon: "building",
    summary: "Rank two hundred enquiries so agents spend the week on the four real buyers.",
    headline: "Separate the serious buyer from the Sunday browser",
    lead:
      "A listing generates two hundred enquiries and four real buyers. Agents burn the week on viewings that were never going to happen, while the financed buyer waits two days for a reply.",
    asks: ["unit 2BR masih ada?", "bisa KPR? DP berapa?", "boleh survey weekend ini?"],
    breaks: [
      "Enquiry volume with no way to rank it",
      "Leads sit with whichever agent grabbed them first, then go cold",
      "No record of what each buyer actually wanted",
    ],
    plays: [
      { title: "Score on financing signals", text: "Budget language, timeline, KPR mentions and unit specifics push a lead to the top of the list with the reasoning shown." },
      { title: "Round-robin with a clock", text: "Unanswered after 15 minutes, the lead reassigns automatically. No lead dies in someone's inbox." },
      { title: "Viewing reminders", text: "Confirmations and day-before reminders go out on their own, in business hours, with a cap per contact." },
    ],
    metrics: [
      { label: "Viewing no-shows", value: "−38%" },
      { label: "Leads scored", value: "220", note: "Per day, peak launch" },
      { label: "Reassign clock", value: "15 min" },
    ],
    modules: ["lead-scoring", "shared-inbox", "automation"],
    proof:
      "Built with two developer sales teams and a broker network running fourteen agents on a single number.",
  },
  {
    slug: "clinics",
    num: "03",
    name: "Clinics & wellness",
    icon: "heartPulse",
    summary: "Take bookings after hours, then run the reminder ladder that kills no-shows.",
    headline: "Bookings, reminders and recalls without a receptionist on WhatsApp all day",
    lead:
      "Appointment traffic is bursty and after-hours. Missed bookings are lost revenue, no-shows are worse, and the recall list nobody has time to work is where the real money sits.",
    asks: ["masih buka sampai jam berapa?", "besok ada slot pagi?", "scaling harganya berapa ya?"],
    breaks: [
      "Booking requests arrive at 10pm and get answered at 9am",
      "No-shows because nobody sent the reminder",
      "Recall lists that never get worked",
    ],
    plays: [
      { title: "After-hours booking intake", text: "The AI agent takes the request, checks your availability rules, and confirms — or offers the two nearest slots." },
      { title: "Reminder ladder", text: "Confirmation, day-before, and morning-of, all in business hours, all stopping the moment the patient replies." },
      { title: "Recall automation", text: "Six-month check-ups and treatment follow-ups fire on schedule, with quiet hours and frequency caps respected." },
    ],
    metrics: [
      { label: "No-show rate", value: "−44%" },
      { label: "Bookings taken after 9pm", value: "37%" },
      { label: "Recalls worked", value: "600+", note: "Per month, six chairs" },
    ],
    modules: ["ai-agent", "automation", "analytics"],
    proof:
      "Live in dental, aesthetics and physiotherapy clinics running two to nine practitioners per branch.",
  },
  {
    slug: "services",
    num: "04",
    name: "Professional services",
    icon: "briefcase",
    summary: "Put every quote on a pipeline and follow it up twice, before the client forgets.",
    headline: "Quotes that get followed up before the client forgets they asked",
    lead:
      "Project work lives or dies on the follow-up. A quote sent on Tuesday and never mentioned again is a lost deal that everybody assumed someone else was chasing.",
    asks: ["boleh minta penawaran?", "kira-kira budget-nya berapa?", "timeline-nya berapa lama?"],
    breaks: [
      "Quotes sent and then forgotten by both sides",
      "Scope discussed in chat, lost by invoicing time",
      "No visibility into which proposals are still alive",
    ],
    plays: [
      { title: "Quote-sent pipeline stage", text: "Sending a quote moves the deal, starts the follow-up clock, and shows on the funnel until it resolves." },
      { title: "Two-touch follow-up", text: "Day three and day seven, then it stops and flags a human. Persistent, not annoying." },
      { title: "Scope notes on the record", text: "Internal notes and file attachments stay on the conversation, so the person who invoices sees what was agreed." },
    ],
    metrics: [
      { label: "Quote-to-close rate", value: "+29%" },
      { label: "Quotes followed up", value: "100%" },
      { label: "Deals ageing past 14 days", value: "−52%" },
    ],
    modules: ["shared-inbox", "automation", "analytics"],
    proof:
      "Used by design agencies, contractors, and law and accounting practices that bill project work.",
  },
  {
    slug: "education",
    num: "05",
    name: "Education & courses",
    icon: "graduation",
    summary: "Survive enrolment season on the admin team you already have.",
    headline: "Handle enrolment season without hiring six temporary admins",
    lead:
      "Enrolment traffic is seasonal and repetitive: fees, schedules, requirements, locations. Then it goes quiet, and the leads you did not convert are never touched again.",
    asks: ["biayanya berapa per bulan?", "kelasnya jam berapa saja?", "syarat pendaftaran apa saja?"],
    breaks: [
      "Enrolment-season volume that swamps a small admin team",
      "Parents asking the same fee and schedule questions",
      "Last intake's unconverted leads sitting in a dead spreadsheet",
    ],
    plays: [
      { title: "Enrolment FAQ agent", text: "Fees, schedules, requirements, campus locations and payment plans, answered from your own prospectus." },
      { title: "Document chasing", text: "Automated reminders for missing documents, one per contact per day maximum, stopping as soon as the file arrives." },
      { title: "Next-intake revival", text: "Leads that did not convert get one warm, relevant message when the next intake opens — not a blast." },
    ],
    metrics: [
      { label: "Enquiries per admin", value: "3.4×" },
      { label: "Documents chased automatically", value: "1,900" },
      { label: "Cost per enrolled student", value: "−31%" },
    ],
    modules: ["ai-agent", "automation", "lead-scoring"],
    proof:
      "Run through two intake cycles with course providers, a school group and a test-prep chain.",
  },
  {
    slug: "automotive",
    num: "06",
    name: "Automotive & parts",
    icon: "car",
    summary: "Answer part availability on the first message, and pick up the 9pm call.",
    headline: "Part availability answered on the first message",
    lead:
      "Buyers send a photo of a part or a chassis number and want to know if you have it and what it costs. The answer is in a catalogue somebody has to look up, and by then they have asked two other suppliers.",
    asks: ["ada part ini gak? [foto]", "cocok buat Innova 2016?", "ready sekarang, harganya?"],
    breaks: [
      "Every enquiry needs a manual catalogue lookup",
      "Phone calls after hours go unanswered entirely",
      "Repeat customers get treated like strangers",
    ],
    plays: [
      { title: "Catalogue-grounded answers", text: "The AI agent reads your part list and answers availability and price without a human opening a spreadsheet." },
      { title: "Voice on the after-hours line", text: "Calls at 9pm get picked up, qualified and summarised for the morning shift." },
      { title: "Purchase history on the thread", text: "Past orders sit next to the conversation, so a returning buyer is recognised on the first message." },
    ],
    metrics: [
      { label: "After-hours calls answered", value: "312", note: "Per month" },
      { label: "Lookups without a human", value: "68%" },
      { label: "Quote turnaround", value: "4 min" },
    ],
    modules: ["ai-agent", "shared-inbox", "analytics"],
    proof: "Configured with parts distributors, two workshop chains and a used-car dealer group.",
  },
  {
    slug: "restaurants",
    num: "07",
    name: "Restaurants & F&B",
    icon: "utensils",
    summary: "Separate table bookings from catering money, and stop losing the big enquiry.",
    headline: "Reservations, catering quotes and \"buka jam berapa?\", on one number",
    lead:
      "Restaurant WhatsApp is three jobs sharing one thread: table bookings, delivery questions, and catering enquiries worth fifty covers each. The catering enquiry is the one that gets buried.",
    asks: ["buka sampai jam berapa?", "bisa catering 200 pax tanggal 12?", "masih bisa booking 6 orang malam ini?"],
    breaks: [
      "Hours, location and menu questions all day, every day",
      "Catering and event enquiries buried under table bookings",
      "No-shows on Friday tables you turned other people away for",
    ],
    plays: [
      { title: "Menu and hours from your own sheet", text: "Today's menu, opening hours, delivery radius, halal and allergen notes — answered from the sheet your team already keeps." },
      { title: "Catering split into its own pipeline", text: "Headcount, date and budget language route the enquiry to a human within minutes, with an order-value estimate attached." },
      { title: "Reservation confirmations", text: "Confirm, remind the day before, and release the table automatically if nobody replies by your cut-off." },
    ],
    metrics: [
      { label: "Tables recovered from no-shows", value: "23", note: "Per week, one outlet" },
      { label: "Catering replies under 5 min", value: "94%" },
      { label: "Menu questions deflected", value: "76%" },
    ],
    modules: ["ai-agent", "automation", "shared-inbox"],
    proof: "Set up with a four-outlet café group and two catering kitchens taking orders on one number.",
  },
  {
    slug: "travel",
    num: "08",
    name: "Travel & tour operators",
    icon: "globe",
    summary: "Turn a vague enquiry into a quoted itinerary the same day, then chase the deposit.",
    headline: "Quote the itinerary while they are still excited about it",
    lead:
      "Travel enquiries arrive as a paragraph of hope: five people, next month, budget unclear. Whoever sends a real itinerary first usually wins — and the rest of the thread is chasing a deposit.",
    asks: ["paket Bali 4 hari berapa?", "bulan depan 5 orang, masih ada?", "DP-nya berapa persen?"],
    breaks: [
      "Every enquiry needs the same six clarifying questions",
      "Quotes sent, deposits never chased",
      "Peak-season volume three consultants cannot answer",
    ],
    plays: [
      { title: "Structured intake before a human replies", text: "Dates, headcount, origin city, budget band and trip type collected in the first exchange, so your consultant opens the chat already able to quote." },
      { title: "Deposit follow-up on a clock", text: "Quote sent, then two reminders carrying the payment link — stopping the moment money lands or the traveller says no." },
      { title: "Departure reminders and documents", text: "Passport and visa deadlines, meeting points and packing notes fire on the itinerary date, not on someone's memory." },
    ],
    metrics: [
      { label: "Quote turnaround", value: "1 day", note: "Was three" },
      { label: "Deposit conversion", value: "+34%" },
      { label: "Peak enquiries per consultant", value: "2.8×" },
    ],
    modules: ["ai-agent", "automation", "lead-scoring"],
    proof: "Run with umrah and domestic tour operators across two peak seasons.",
  },
  {
    slug: "logistics",
    num: "09",
    name: "Logistics & fleet",
    icon: "truck",
    summary: "Answer tracking questions from your own system and keep driver updates on the record.",
    headline: "Stop answering \"sudah sampai mana?\" by hand, four hundred times a day",
    lead:
      "Shipper WhatsApp is a tracking desk. Customers want a status, drivers send updates as voice notes and photos, and the person in the middle is retyping both into a spreadsheet.",
    asks: ["sudah sampai mana ya?", "resi 8829…, statusnya?", "kirim 2 ton ke Surabaya berapa?"],
    breaks: [
      "Tracking questions repeated hundreds of times a day",
      "Driver voice notes and photos with nowhere to live",
      "Lane and volume quotes answered slowly, or not at all",
    ],
    plays: [
      { title: "Tracking answered from your system", text: "The AI agent reads the resi or order number, pulls status through a webhook, and answers — no operator, no spreadsheet." },
      { title: "Driver channel with structure", text: "Photos, proof of delivery and voice notes land on the shipment thread, transcribed and searchable, instead of in a group chat." },
      { title: "Lane quoting", text: "Origin, destination, weight and service level collected up front, so your sales desk quotes from a complete brief." },
    ],
    metrics: [
      { label: "Tracking asks handled by the agent", value: "88%" },
      { label: "Operator hours saved", value: "62", note: "Per week" },
      { label: "Quote response time", value: "11 min" },
    ],
    modules: ["ai-agent", "shared-inbox", "automation"],
    proof: "Deployed with two 3PLs and a same-day courier running forty-plus drivers on WhatsApp.",
  },
  {
    slug: "insurance",
    num: "10",
    name: "Insurance & multifinance",
    icon: "umbrella",
    summary: "Qualify on WhatsApp with the paper trail your compliance team will ask for.",
    headline: "Qualify, document and follow up without leaving an audit gap",
    lead:
      "Selling protection or financing over WhatsApp is a compliance problem wearing a sales hat. Every promise made in a chat is a promise somebody will ask you to produce later.",
    asks: ["preminya berapa per tahun?", "syarat pengajuannya apa saja?", "polis saya jatuh tempo kapan?"],
    breaks: [
      "Agents selling from personal numbers, with no record",
      "Documents collected in chat and lost the same week",
      "Renewals that lapse because nobody was reminded",
    ],
    plays: [
      { title: "Every conversation on a company number", text: "Agents work inside Replai, so the transcript, the attachments and the assignment history survive the agent leaving." },
      { title: "Document intake with a checklist", text: "KTP, payslip, existing policy — requested, tracked and chased once a day until the set is complete, then locked to the record." },
      { title: "Renewal and premium reminders", text: "Fire on the policy date inside quiet hours and frequency caps, and stop the moment payment clears." },
    ],
    metrics: [
      { label: "Renewal lapse rate", value: "−41%" },
      { label: "Complete document sets, first pass", value: "79%" },
      { label: "Conversations retained on exit", value: "100%" },
    ],
    modules: ["shared-inbox", "automation", "analytics"],
    proof: "Built with a sixty-agent insurance brokerage and one multifinance sales team.",
  },
  {
    slug: "events",
    num: "11",
    name: "Events & venues",
    icon: "calendar",
    summary: "Handle long, high-value enquiries and keep date, budget and follow-up straight.",
    headline: "One enquiry, twenty details, and a date that cannot be double-booked",
    lead:
      "Wedding and event enquiries are long, emotional and expensive. They arrive in bursts after every open house, and the follow-up window is measured in months.",
    asks: ["14 Juni masih available?", "paket 300 pax berapa?", "boleh lihat venue-nya weekend ini?"],
    breaks: [
      "Twenty details needed before anyone can quote",
      "Follow-up windows months long, tracked in nobody's head",
      "Two coordinators quoting the same date to different couples",
    ],
    plays: [
      { title: "Date and package check first", text: "Event date, guest count and package interest captured before a human joins, checked against your real calendar." },
      { title: "Long-horizon nurture", text: "A quote sent in March gets a relevant touch in May, not a weekly nudge. Cadence is per contact, capped, and stops on reply." },
      { title: "One owner per date", text: "Assignment is explicit and visible, so two coordinators never sell the same Saturday twice." },
    ],
    metrics: [
      { label: "Enquiries quoted same day", value: "82%" },
      { label: "Bookings from month-3 follow-up", value: "1 in 6" },
      { label: "Double-booked dates", value: "0" },
    ],
    modules: ["shared-inbox", "automation", "lead-scoring"],
    proof: "Run with two venues and a wedding organiser handling 300+ enquiries per open-house season.",
  },
  {
    slug: "home-services",
    num: "12",
    name: "Home & interior services",
    icon: "home",
    summary: "Turn a photo and an address into a booked survey, and keep the crew's day honest.",
    headline: "Survey, quote, schedule — without three phone calls per job",
    lead:
      "Renovation, AC service and cleaning enquiries all start with a photo and end with a site visit. The distance between those two things is where most of the margin leaks out.",
    asks: ["service AC 2 unit berapa?", "bisa survey ke rumah?", "ini masih bisa diperbaiki? [foto]"],
    breaks: [
      "Photos and addresses scattered across five staff phones",
      "Survey visits booked by phone tag",
      "Repeat maintenance customers never contacted again",
    ],
    plays: [
      { title: "Photo-and-address intake", text: "The first exchange collects the photo, the area, the address and the job type, so a surveyor is dispatched with a brief instead of a guess." },
      { title: "Survey scheduling", text: "Slots offered from your crew's real availability, confirmed, reminded, and rescheduled in the same thread." },
      { title: "Maintenance recalls", text: "Service intervals fire on their own — the six-month AC clean is the cheapest revenue you are not collecting." },
    ],
    metrics: [
      { label: "Survey visits per week", value: "+46%" },
      { label: "Enquiries with a complete brief", value: "91%" },
      { label: "Revenue from recalls", value: "18%" },
    ],
    modules: ["ai-agent", "automation", "shared-inbox"],
    proof: "Configured with an interior contractor, an AC service network and two cleaning companies.",
  },
];

export const industryBySlug = (slug: string): Industry | undefined =>
  industries.find((industry) => industry.slug === slug);
