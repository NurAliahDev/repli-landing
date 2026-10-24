/* ==========================================================================
   Feature catalogue. Drives /product, the nav panel, and the five
   /product/[slug] detail pages.
   ========================================================================== */

import type { IconName } from "./icons";

export type FeaturePoint = { icon: IconName; title: string; text: string };
export type Metric = { label: string; value: string; note?: string };

export type Feature = {
  slug: string;
  num: string;
  /** Short label for cards and nav */
  name: string;
  /** Detail page headline */
  title: string;
  icon: IconName;
  kicker: string;
  summary: string;
  lead: string;
  points: FeaturePoint[];
  metrics: Metric[];
  how: { title: string; text: string }[];
  deeper: { heading: string; body: string[]; checks: string[] };
  mock: "inbox" | "score" | "voice" | "flow" | "chart";
};

export const features: Feature[] = [
  {
    slug: "shared-inbox",
    num: "01",
    name: "Shared WhatsApp inbox",
    title: "One WhatsApp number. Your whole team.",
    icon: "inbox",
    kicker: "Shared inbox",
    summary: "Route every chat to one owner, keep the history when staff leave.",
    lead:
      "Deals are lost in the handover, not the pitch. Repli puts your business number into a shared inbox with real assignment, internal notes, and a conversation history that outlives whoever was holding the phone.",
    points: [
      {
        icon: "users",
        title: "Every chat has exactly one owner",
        text: "Route by product, language, or shift — round-robin or manual. The assignee is visible to the whole team, so nobody wonders whose customer this is.",
      },
      {
        icon: "doc",
        title: "Internal notes the customer never sees",
        text: "Leave the context that matters: budget, objections, the discount someone already promised. Notes live in Repli, never in the WhatsApp thread.",
      },
      {
        icon: "bell",
        title: "No two agents answering at once",
        text: "Live presence on each thread plus a soft lock while someone is typing. The awkward double reply stops happening on day one.",
      },
      {
        icon: "database",
        title: "History that survives turnover",
        text: "When an agent leaves, the conversations stay put. Export any thread to PDF or CSV for audit, dispute handling, or onboarding the replacement.",
      },
    ],
    metrics: [
      { label: "First reply", value: "42s", note: "median cohort, after 30 days" },
      { label: "Agents per number", value: "Unlimited", note: "on Growth and above" },
      { label: "Message retention", value: "Forever", note: "exportable any time" },
    ],
    how: [
      { title: "Connect your number", text: "Scan once with the phone that already runs the business number. Existing chats sync in." },
      { title: "Invite the team", text: "Add agents by email, set roles, decide who can see which pipeline." },
      { title: "Set the routing rule", text: "Round-robin, by keyword, or by working hours — change it whenever the team changes." },
    ],
    deeper: {
      heading: "Built for the way small teams actually sell",
      body: [
        "Most WhatsApp teams start with one phone on a desk and end up with five phones, five chat histories, and no idea which customer was promised what. The usual fix — a spreadsheet and a group chat — collapses the moment volume doubles.",
        "The shared inbox is deliberately boring: assignment, ownership, notes, search. It is the part of Repli your team touches a hundred times a day, so it loads fast, works on a mid-range Android, and keeps its keyboard shortcuts consistent.",
      ],
      checks: [
        "Assignment, reassignment and unassigned queue",
        "Saved replies with variables and per-agent snippets",
        "Full-text search across every conversation and note",
        "Labels, pipeline stages and custom contact fields",
        "Working hours with automatic away messages",
        "Role-based access: owner, manager, agent, read-only",
      ],
    },
    mock: "inbox",
  },
  {
    slug: "lead-scoring",
    num: "02",
    name: "AI lead scoring",
    title: "Know who is ready to buy before you reply.",
    icon: "target",
    kicker: "Lead scoring",
    summary: "A 0–100 score on every inbound chat, with the reasoning attached.",
    lead:
      "Every inbound conversation gets a score within seconds — from what the person actually wrote, how quickly they answered, and how closely they resemble the deals you have already closed.",
    points: [
      {
        icon: "sparkle",
        title: "Reads intent, not keywords",
        text: "Budget hints, urgency, quantity, decision language, and the questions only a serious buyer asks. Works in Bahasa Indonesia, English, and mixed-language chats.",
      },
      {
        icon: "eye",
        title: "Always shows its reasoning",
        text: "Each score comes with the three signals that moved it most. Your team can disagree with the model, and that disagreement is recorded.",
      },
      {
        icon: "filter",
        title: "Scores can route work",
        text: "Send anything above 80 straight to your closer, park anything under 30 in a nurture sequence. Thresholds are yours to set.",
      },
      {
        icon: "refresh",
        title: "Learns from your outcomes",
        text: "Every won and lost deal feeds back in. The model that scores your chats in month three is tuned on your pipeline, not a generic benchmark.",
      },
    ],
    metrics: [
      { label: "Scoring latency", value: "< 3s", note: "from message received" },
      { label: "Signals per score", value: "24", note: "text, timing, history" },
      { label: "Retrain cadence", value: "Weekly", note: "on your own outcomes" },
    ],
    how: [
      { title: "Import what you know", text: "Point Repli at your past won and lost deals, or start cold and let the first weeks calibrate it." },
      { title: "Set your thresholds", text: "Define what hot, warm and cold mean for your business. Two numbers, changeable any time." },
      { title: "Let it sort the queue", text: "The inbox re-orders itself by score, so the first chat your closer opens is the one worth opening." },
    ],
    deeper: {
      heading: "A score you can argue with",
      body: [
        "Opaque scores get ignored. Every Repli score exposes its top contributing signals in plain language — \"asked for bulk pricing\", \"replied within 40 seconds twice\", \"mentioned a competitor by name\" — so a sales lead can sanity-check the model instead of trusting it blindly.",
        "When an agent overrides a score, we keep both the model's answer and the human's. Those disagreements are the most valuable training data you own.",
      ],
      checks: [
        "Score, grade and confidence on every conversation",
        "Top-3 contributing signals in plain language",
        "Manual override with reason, kept for training",
        "Score-based routing, alerts and pipeline entry",
        "Per-agent and per-source score distribution reports",
        "No score is ever exposed to the customer",
      ],
    },
    mock: "score",
  },
  {
    slug: "ai-agent",
    num: "03",
    name: "AI agent: chat & voice",
    title: "An AI agent that answers chats — and picks up the phone.",
    icon: "waveform",
    kicker: "AI customer service",
    summary: "Trained on your catalogue. Replies in text, talks on WhatsApp calls.",
    lead:
      "Give it your catalogue, price list, and policies. It answers in Bahasa Indonesia or English, holds a natural voice conversation on a WhatsApp call, and hands over to a human the moment it should.",
    points: [
      {
        icon: "database",
        title: "Grounded in your own knowledge base",
        text: "Upload PDFs, price lists, spreadsheets, or paste your FAQ. Answers are retrieved from your documents and cite which one they came from.",
      },
      {
        icon: "phone",
        title: "Real voice, on WhatsApp calls",
        text: "Natural speech in Indonesian or English, sub-second turn-taking, and interruption handling. Callers can talk over it the way they talk over a person.",
      },
      {
        icon: "shield",
        title: "Guardrails before creativity",
        text: "It will not invent a price, promise a delivery date, or discount. Anything outside the knowledge base becomes a handover, not a guess.",
      },
      {
        icon: "headset",
        title: "Hands over cleanly",
        text: "On frustration, refund talk, or an explicit request for a human, the thread moves to a live agent with a one-paragraph summary of what happened.",
      },
    ],
    metrics: [
      { label: "First response", value: "Instant", note: "24/7, every channel" },
      { label: "Voice latency", value: "~700ms", note: "per turn, end to end" },
      { label: "Resolved by AI", value: "62%", note: "no human, median across pilots" },
    ],
    how: [
      { title: "Feed the knowledge base", text: "Drop in files or a website URL. Repli indexes it and shows you exactly what it learned." },
      { title: "Set the rules of engagement", text: "Tone, languages, working hours, and the topics that must always reach a person." },
      { title: "Run it in shadow mode", text: "It drafts, your agents send. When you trust the drafts, flip it live — per pipeline, not all at once." },
    ],
    deeper: {
      heading: "Shadow mode first, autonomy later",
      body: [
        "Nobody should hand their front line to a language model on day one. New AI agents start in shadow mode: they draft a reply, your agent reads it, edits if needed, and sends. You get a week of side-by-side evidence before anything goes out unattended.",
        "Voice is the same story. The agent starts by handling after-hours calls only — the calls that currently go unanswered — then takes daytime overflow once you have listened to the recordings.",
      ],
      checks: [
        "RAG over your documents with source citations",
        "Bahasa Indonesia and English, including mixed-language chats",
        "Voice on WhatsApp calls with barge-in support",
        "Shadow mode, per-pipeline rollout, instant kill switch",
        "Full transcripts and recordings for every AI conversation",
        "Escalation rules by sentiment, topic, or customer request",
      ],
    },
    mock: "voice",
  },
  {
    slug: "automation",
    num: "04",
    name: "Workflow automation",
    title: "Follow-ups that fire whether anyone remembers or not.",
    icon: "flow",
    kicker: "Automation",
    summary: "Visual triggers, conditions and actions. No code, no glue services.",
    lead:
      "Pick a trigger, add conditions, choose actions. No code, no third-party glue service, and no quote left sitting unanswered in someone's chat list for nine days.",
    points: [
      {
        icon: "bolt",
        title: "Triggers from real events",
        text: "New chat, stage change, score crossing a threshold, keyword match, no reply for N hours, or a scheduled time. Combine them freely.",
      },
      {
        icon: "layers",
        title: "Conditions that hold up",
        text: "Branch on score, label, pipeline stage, contact field, language, or working hours. Nested branches, with a preview of which path a chat takes.",
      },
      {
        icon: "clock",
        title: "Waits measured in business hours",
        text: "\"Follow up in 2 business days\" means Tuesday, not Sunday at 3am. Holidays and shift calendars are part of the timing engine.",
      },
      {
        icon: "eye",
        title: "Every run is auditable",
        text: "See which workflow touched which conversation, what it sent, and why it stopped. Dry-run any change against last week's traffic first.",
      },
    ],
    metrics: [
      { label: "Workflows", value: "Unlimited", note: "on Growth, no per-run fees" },
      { label: "Trigger types", value: "11", note: "event, time and score based" },
      { label: "Dry-run window", value: "30 days", note: "replay before going live" },
    ],
    how: [
      { title: "Start from a template", text: "Abandoned quote, post-purchase check-in, cold-lead revival, review request. Edit, don't build from scratch." },
      { title: "Dry-run it", text: "Replay the workflow against real traffic from the past month and read exactly what would have been sent." },
      { title: "Turn it on for one pipeline", text: "Scope it narrow, watch the run log for a few days, then widen." },
    ],
    deeper: {
      heading: "Automation your customers do not resent",
      body: [
        "Bad automation is obvious: the same message at the same interval to everyone, including the person who already replied. Repli kills a sequence the moment a human answers, and refuses to send twice in one day to the same contact by default.",
        "Frequency caps, quiet hours, and an opt-out that actually sticks are built in rather than bolted on. You can raise the caps — you have to do it deliberately.",
      ],
      checks: [
        "Visual builder with branching and nested conditions",
        "Business-hours waits, holiday calendars, quiet hours",
        "Auto-stop on human reply, per-contact frequency caps",
        "Dry-run against 30 days of historical traffic",
        "Per-run audit log with the reason for every stop",
        "Templates for the eight sequences most teams need first",
      ],
    },
    mock: "flow",
  },
  {
    slug: "analytics",
    num: "05",
    name: "Sales analytics",
    title: "See what actually closes.",
    icon: "chart",
    kicker: "Analytics",
    summary: "Response times, pipeline movement, workload and revenue by source.",
    lead:
      "Response times, pipeline movement, agent workload, and revenue by source — computed from the conversations themselves, not from what somebody remembered to log at the end of the week.",
    points: [
      {
        icon: "clock",
        title: "Response time that means something",
        text: "First reply and full-resolution time, split by agent, shift, and channel. Percentiles rather than averages, because the average hides the customer who waited two hours.",
      },
      {
        icon: "gauge",
        title: "Pipeline you can trust",
        text: "Stage movement is derived from conversations, so the board reflects reality without anyone dragging cards on a Friday afternoon.",
      },
      {
        icon: "users",
        title: "Workload before burnout",
        text: "Open threads per agent, reply volume by hour, and a fair-share view that shows who is quietly carrying the queue.",
      },
      {
        icon: "upload",
        title: "Exports and scheduled digests",
        text: "CSV and XLSX exports, a read-only link for your accountant, and a Monday morning digest in WhatsApp or email.",
      },
    ],
    metrics: [
      { label: "Dashboard refresh", value: "Live", note: "streamed, not polled" },
      { label: "History retained", value: "24 mo", note: "on Growth and above" },
      { label: "Scheduled reports", value: "Daily+", note: "email or WhatsApp" },
    ],
    how: [
      { title: "Nothing to instrument", text: "The metrics come from conversations you are already having. No tagging discipline required." },
      { title: "Pick your four numbers", text: "Pin the metrics your team is actually judged on to the top of the dashboard." },
      { title: "Send it where people look", text: "Schedule the digest into the WhatsApp group your managers already read every morning." },
    ],
    deeper: {
      heading: "Reports that survive a Monday meeting",
      body: [
        "Most CRM dashboards fail for one reason: they depend on humans logging activity. Repli derives its numbers from the message stream, so the report and the reality cannot drift apart.",
        "Where a number is estimated rather than measured — attributed revenue, for instance — we label it as an estimate and show the assumption behind it.",
      ],
      checks: [
        "First-reply and resolution percentiles, not just averages",
        "Pipeline funnel with stage-to-stage conversion",
        "Agent leaderboard and fair-share workload view",
        "Revenue by source, campaign and AI-vs-human handling",
        "CSV / XLSX export and read-only share links",
        "Scheduled digests to email or a WhatsApp group",
      ],
    },
    mock: "chart",
  },
];

export const featureBySlug = (slug: string): Feature | undefined =>
  features.find((feature) => feature.slug === slug);
