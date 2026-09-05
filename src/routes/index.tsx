import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { supabase } from "@/integrations/supabase/client";


import portrait from "@/assets/admin.png.asset.json";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectClinic from "@/assets/project-clinic.jpg";
import projectBoutique from "@/assets/project-boutique.jpg";
import demoMobiles from "@/assets/demo-mobiles.jpg";
import demoFurniture from "@/assets/demo-furniture.jpg";
import demoPhoto from "@/assets/demo-photo.jpg";
import demoService from "@/assets/demo-service.jpg";

const TITLE = "Raparthi Navaneeth — Websites for local shops, hospitals & restaurants";
const DESCRIPTION =
  "AI/ML student and web developer in Jaggayyapeta building fast, mobile-friendly websites for local shops, hospitals, clinics and restaurants.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

const EMAIL = "raparthimadhavi49@gmail.com";
const PHONE = "+917780635139";

const services = [
  {
    icon: "🛍️",
    title: "Local shops",
    body: "Catalogue, hours and a click-to-call that works on a customer's phone.",
    bg: "bg-peach/40 ring-peach/50",
  },
  {
    icon: "🏥",
    title: "Hospitals",
    body: "Doctor listings and a booking flow that feels calm, not clinical.",
    bg: "bg-mint/30 ring-mint/40",
  },
  {
    icon: "🍲",
    title: "Restaurants",
    body: "Photo-rich menus and table reservations that fill your evening shift.",
    bg: "bg-berry/20 ring-berry/30",
  },
  {
    icon: "🩺",
    title: "Clinics",
    body: "Specialty pages and appointment slots that patients can trust.",
    bg: "bg-apricot/25 ring-apricot/40",
  },
];

const liveSites = [
  {
    img: demoMobiles,
    tint: "bg-peach/40",
    title: "Sri Lakshmi Mobiles",
    body: "Mobile shop site with product highlights, offers and click-to-call for walk-in customers.",
    href: "https://srilakshmimobiles.netlify.app/",
  },
  {
    img: demoFurniture,
    tint: "bg-mint/30",
    title: "Krishna Furniture",
    body: "Furniture showroom catalogue with photo galleries and an easy enquiry route.",
    href: "https://krishnafuntiure.netlify.app/",
  },
  {
    img: demoPhoto,
    tint: "bg-berry/20",
    title: "Photo Studio",
    body: "Photography studio portfolio with a picture-first layout and booking details.",
    href: "https://phtoshopdemo.netlify.app/",
  },
  {
    img: demoService,
    tint: "bg-apricot/25",
    title: "Aum Sairam Service",
    body: "Home service business site with services listed clearly and one-tap contact.",
    href: "https://aumsairam-service.netlify.app/",
  },
];

const projects = [
  {
    img: projectRestaurant,
    tint: "bg-peach/40",
    title: "Personal Budget Tracker",
    body: "Django web app to track income and expenses with categories and full CRUD.",
    href: "https://personal-budget-tracer.onrender.com",
    linkLabel: "Live demo",
  },
  {
    img: projectClinic,
    tint: "bg-mint/30",
    title: "Citizen Service Portal",
    body: "Built at Code Spark India 2025 — essential citizen services brought online in 24 hours.",
    href: "https://github.com/aum3699",
    linkLabel: "View code",
  },
  {
    img: projectBoutique,
    tint: "bg-berry/20",
    title: "Parent Shield",
    body: "A child safety and monitoring solution built over a 36-hour hackathon at PSCMR.",
    href: "https://github.com/aum3699",
    linkLabel: "View code",
  },
];

const skills = [
  "Python",
  "SQL",
  "PHP",
  "JavaScript",
  "HTML",
  "CSS",
  "Django",
  "Flask",
  "MySQL",
  "MariaDB",
  "Git",
  "Google Colab",
];

const pricing = [
  {
    name: "Starter",
    price: "₹8,000",
    items: ["One-page site + mobile ready", "Click-to-call & map", "One round of edits"],
  },
  {
    name: "Business",
    price: "₹18,000",
    items: [
      "Up to 6 pages + booking form",
      "Database-backed content",
      "SEO basics + 3 revisions",
      "3 months of support",
    ],
    featured: true,
  },
  {
    name: "Growth",
    price: "₹35,000",
    items: ["Multi-location / multi-branch", "Admin dashboard", "Priority support, 6 months"],
  },
];

function Index() {
  const [form, setForm] = useState({ name: "", business: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const { error } = await supabase.from("enquiries").insert({
      name: form.name,
      business: form.business || null,
      phone: form.phone || null,
      message: form.message,
    });
    if (error) {
      setStatus("error");
      return;
    }
    setStatus("sent");
    setForm({ name: "", business: "", phone: "", message: "" });
  };


  const field =
    "mt-1 w-full rounded-xl bg-cream px-4 py-3 text-sm text-ink outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-apricot/60";
  const label = "text-xs font-semibold text-ink/60";

  return (
    <div className="min-h-screen bg-cream font-body text-ink antialiased">
      <header id="top" className="sticky top-0 z-50 bg-cream/85 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-center justify-between py-3">
            <a href="#top" className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-full bg-apricot font-display text-lg font-semibold text-cream">
                R
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">Navaneeth</span>
            </a>
            <nav className="hidden items-center gap-1 md:flex">
              <a href="#services" className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 hover:bg-peach/50">
                Services
              </a>
              <a href="#projects" className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 hover:bg-peach/50">
                Projects
              </a>
              <a href="#resume" className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 hover:bg-peach/50">
                Resume
              </a>
              <a href="#pricing" className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 hover:bg-peach/50">
                Pricing
              </a>
            </nav>
            <a href="#contact" className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream">
              Get a quote
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-20 -right-16 size-72 rounded-full bg-mint/30 blur-3xl" />
          <div className="pointer-events-none absolute top-40 -left-24 size-72 rounded-full bg-berry/20 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-5 pt-14 pb-16 md:pt-20 md:pb-24">
            <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-berry ring-1 ring-berry/20">
                  <span className="size-2 rounded-full bg-mint" /> Open for local business projects
                </span>
                <h1 className="mt-6 font-display text-5xl leading-none font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl">
                  Hi, I'm <span className="text-apricot">Raparthi Navaneeth</span>.
                </h1>
                <p className="mt-5 max-w-md text-base text-pretty text-ink/70">
                  AI/ML student and web developer building fast, friendly websites for the shops, hospitals and
                  restaurants that make our streets work.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    className="rounded-full bg-apricot px-6 py-3 text-sm font-semibold text-cream shadow-lg shadow-apricot/30 transition-transform hover:-translate-y-0.5"
                  >
                    Start a project
                  </a>
                  <a
                    href="#projects"
                    className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink ring-1 ring-ink/10 transition-transform hover:-translate-y-0.5"
                  >
                    See my work
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink/60">
                  <span>B.Sc. AI &amp; ML student</span>
                  <span>2 national hackathons</span>
                  <span>Jaggayyapeta, Andhra Pradesh</span>
                </div>
              </div>
              <div className="relative">
                <img
                  src={portrait.url}
                  alt="Raparthi Navaneeth working at a laptop"
                  width={1024}
                  height={1280}
                  className="aspect-[4/5] w-full rounded-[min(6vw,40px)] object-cover outline-1 -outline-offset-1 outline-black/5"
                />
                <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5">
                  <p className="text-xs font-medium text-ink/60">Currently</p>
                  <p className="text-sm font-semibold text-ink">Building with Python &amp; Django</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white/60">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.14em] text-berry uppercase">What I do</p>
              <h2 className="mt-3 font-display text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
                Websites for the places you actually go.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <div key={s.title} className={`rounded-3xl p-6 ring-1 transition-transform hover:-translate-y-1 ${s.bg}`}>
                  <div className="grid size-12 place-items-center rounded-2xl bg-white text-2xl">{s.icon}</div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-pretty text-ink/70">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-cream">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="flex items-end justify-between gap-4">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold tracking-[0.14em] text-apricot uppercase">Featured work</p>
                <h2 className="mt-3 font-display text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
                  Projects and hackathon builds.
                </h2>
              </div>
              <a
                href="https://github.com/aum3699"
                className="hidden text-sm font-semibold text-berry hover:underline sm:block"
              >
                View all
              </a>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {liveSites.map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 transition-transform hover:-translate-y-1"
                >
                  <img
                    src={s.img}
                    alt={`${s.title} website`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className={`aspect-[4/3] w-full object-cover ${s.tint}`}
                  />
                  <div className="p-5">
                    <span className="inline-block rounded-full bg-mint/40 px-3 py-1 text-xs font-semibold">Live site</span>
                    <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm text-pretty text-ink/60">{s.body}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-berry">
                      Visit site <span aria-hidden>→</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <h3 className="mt-14 font-display text-2xl font-semibold tracking-tight">Other builds</h3>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {projects.map((p) => (
                <div
                  key={p.title}
                  className="group overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 transition-transform hover:-translate-y-1"
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className={`aspect-[4/3] w-full object-cover ${p.tint}`}
                  />
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-pretty text-ink/60">{p.body}</p>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-berry"
                    >
                      {p.linkLabel} <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="bg-white/60">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.14em] text-mint uppercase">The resume side</p>
              <h2 className="mt-3 font-display text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
                Student, developer, competitor.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl bg-cream p-6 ring-1 ring-ink/5">
                <h3 className="font-display text-lg font-semibold">Education</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-sm font-semibold">B.Sc. Artificial Intelligence &amp; Machine Learning</p>
                    <p className="text-sm text-ink/60">VBDC College, Jaggayyapeta · 2025 — Present</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Intermediate (MPC)</p>
                    <p className="text-sm text-ink/60">SAV &amp; NVJR Junior College · 2023–2025 · 934 marks</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">SSC (10th Class)</p>
                    <p className="text-sm text-ink/60">Telangana State Board, Suryapet · CGPA 8.3</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-cream p-6 ring-1 ring-ink/5">
                <h3 className="font-display text-lg font-semibold">Skills</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.map((s, i) => (
                    <span
                      key={s}
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        ["bg-peach/50", "bg-mint/40", "bg-berry/25", "bg-apricot/30"][i % 4]
                      }`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-ink/60">
                  Data science, EDA, visualisation and databases — plus practical full-stack web development.
                </p>
              </div>
              <div className="rounded-3xl bg-cream p-6 ring-1 ring-ink/5">
                <h3 className="font-display text-lg font-semibold">Hackathons</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-sm font-semibold">Code Spark India 2025 — KBN College, Vijayawada</p>
                    <p className="text-sm text-ink/60">24-hour national hackathon · Citizen Service Portal</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">MIND SPRINT-2K25 — PSCMR College, Vijayawada</p>
                    <p className="text-sm text-ink/60">36-hour national hackathon · Parent Shield</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-cream p-6 ring-1 ring-ink/5">
                <h3 className="font-display text-lg font-semibold">Experience</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-sm font-semibold">Web Development Intern — APSSDC</p>
                    <p className="text-sm text-ink/60">
                      Hands-on HTML, CSS and web development basics on real-time tasks.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Customer Support Executive — Swiggy</p>
                    <p className="text-sm text-ink/60">
                      Dec 2025 – Jan 2026 · Communication, issue resolution and customer service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-cream">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.14em] text-apricot uppercase">Simple pricing</p>
              <h2 className="mt-3 font-display text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
                Priced for local budgets.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {pricing.map((p) =>
                p.featured ? (
                  <div key={p.name} className="rounded-3xl bg-apricot p-7 text-cream ring-1 ring-apricot/40">
                    <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                      Most popular
                    </span>
                    <h3 className="mt-3 font-display text-lg font-semibold">{p.name}</h3>
                    <p className="mt-2 font-display text-4xl font-semibold">
                      {p.price}
                      <span className="text-base text-cream/70"> /site</span>
                    </p>
                    <ul className="mt-5 space-y-2 text-sm text-cream/90">
                      {p.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="mt-6 block rounded-full bg-white px-5 py-2.5 text-center text-sm font-semibold text-apricot"
                    >
                      Choose {p.name}
                    </a>
                  </div>
                ) : (
                  <div key={p.name} className="rounded-3xl bg-white p-7 ring-1 ring-black/5">
                    <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                    <p className="mt-4 font-display text-4xl font-semibold">
                      {p.price}
                      <span className="text-base text-ink/50"> /site</span>
                    </p>
                    <ul className="mt-5 space-y-2 text-sm text-ink/70">
                      {p.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="mt-6 block rounded-full bg-ink/5 px-5 py-2.5 text-center text-sm font-semibold text-ink"
                    >
                      Choose {p.name}
                    </a>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white/60">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm font-semibold tracking-[0.14em] text-berry uppercase">Let's talk</p>
                <h2 className="mt-3 font-display text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
                  Tell me about your business.
                </h2>
                <p className="mt-4 max-w-md text-base text-pretty text-ink/70">
                  Send a few details and I'll reply within a day with a plan and a price. No jargon, no pressure.
                </p>
                <div className="mt-6 space-y-2 text-sm text-ink/70">
                  <p>
                    <a href={`mailto:${EMAIL}`} className="hover:underline">
                      {EMAIL}
                    </a>
                  </p>
                  <p>
                    <a href={`tel:${PHONE}`} className="hover:underline">
                      +91 77806 35139
                    </a>
                  </p>
                  <p>
                    <a href="https://github.com/aum3699" target="_blank" rel="noreferrer" className="hover:underline">
                      github.com/aum3699
                    </a>
                  </p>
                </div>
              </div>
              <form onSubmit={submit} className="rounded-3xl bg-white p-6 ring-1 ring-black/5 sm:p-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className={label}>Your name</span>
                    <input
                      type="text"
                      required
                      placeholder="Priya Rao"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={field}
                    />
                  </label>
                  <label className="block">
                    <span className={label}>Business name</span>
                    <input
                      type="text"
                      placeholder="Rao Tiffins"
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      className={field}
                    />
                  </label>
                </div>
                <label className="mt-4 block">
                  <span className={label}>Phone</span>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={field}
                  />
                </label>
                <label className="mt-4 block">
                  <span className={label}>Message</span>
                  <textarea
                    rows={4}
                    required
                    placeholder="I run a small restaurant and need a menu site with reservations…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`resize-none ${field}`}
                  />
                </label>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-5 w-full rounded-full bg-apricot px-6 py-3 text-sm font-semibold text-cream shadow-lg shadow-apricot/30 transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send enquiry"}
                </button>
                {status === "sent" && (
                  <p className="mt-3 text-sm font-semibold text-berry">
                    Thanks — your enquiry has reached me. I'll reply within a day.
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-3 text-sm font-semibold text-berry">
                    Sorry, that didn't send. Please try again or call {"+91 77806 35139"}.
                  </p>
                )}

              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-cream/80">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-full bg-apricot font-display text-lg font-semibold text-cream">
                R
              </span>
              <span className="font-display text-lg font-semibold text-cream">Raparthi Navaneeth</span>
            </div>
            <p className="text-sm">Made in India · © 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
