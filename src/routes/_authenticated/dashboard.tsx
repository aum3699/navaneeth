import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const TITLE = "Enquiries dashboard — Raparthi Navaneeth";
const DESCRIPTION = "Read and manage website enquiries sent from the portfolio contact form.";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Dashboard,
});

type Enquiry = {
  id: string;
  name: string;
  business: string | null;
  phone: string | null;
  message: string;
  handled: boolean;
  created_at: string;
};

function Dashboard() {
  const navigate = useNavigate();
  const [rows, setRows] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    const { data, error: err } = await supabase
      .from("enquiries")
      .select("id, name, business, phone, message, handled, created_at")
      .order("created_at", { ascending: false });
    if (err) setError(err.message);
    else {
      setError(null);
      setRows(data ?? []);
    }
    setLoading(false);
  };

  useEffect(() => {
    void load();
  }, []);

  const toggle = async (row: Enquiry) => {
    const { error: err } = await supabase
      .from("enquiries")
      .update({ handled: !row.handled })
      .eq("id", row.id);
    if (!err) setRows((r) => r.map((x) => (x.id === row.id ? { ...x, handled: !x.handled } : x)));
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  };

  return (
    <div className="min-h-screen bg-cream px-5 py-10 font-body text-ink">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl font-semibold tracking-tight">Enquiries</h1>
            <p className="mt-1 text-sm text-ink/60">Everything sent through your website contact form.</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => void load()}
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold ring-1 ring-ink/10"
            >
              Refresh
            </button>
            <button
              onClick={() => void signOut()}
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream"
            >
              Sign out
            </button>
          </div>
        </div>

        {loading && <p className="mt-10 text-sm text-ink/60">Loading…</p>}

        {!loading && error && (
          <div className="mt-10 rounded-3xl bg-white p-6 ring-1 ring-black/5">
            <p className="text-sm font-semibold text-berry">You don't have permission to view enquiries yet.</p>
            <p className="mt-2 text-sm text-ink/60">
              Your account needs to be marked as the owner. Ask for admin access to be added, then refresh.
            </p>
          </div>
        )}

        {!loading && !error && rows.length === 0 && (
          <p className="mt-10 text-sm text-ink/60">No enquiries yet. They'll show up here as soon as someone writes.</p>
        )}

        <div className="mt-8 space-y-4">
          {rows.map((r) => (
            <div key={r.id} className="rounded-3xl bg-white p-6 ring-1 ring-black/5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="font-display text-lg font-semibold">
                    {r.name}
                    {r.business ? ` · ${r.business}` : ""}
                  </h2>
                  <p className="mt-1 text-xs text-ink/50">
                    {new Date(r.created_at).toLocaleString()}
                    {r.phone ? ` · ${r.phone}` : ""}
                  </p>
                </div>
                <button
                  onClick={() => void toggle(r)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold ${
                    r.handled ? "bg-mint/50 text-ink" : "bg-peach/50 text-ink"
                  }`}
                >
                  {r.handled ? "Replied" : "Mark replied"}
                </button>
              </div>
              <p className="mt-3 text-sm text-pretty text-ink/70">{r.message}</p>
              {r.phone && (
                <a href={`tel:${r.phone}`} className="mt-3 inline-block text-sm font-semibold text-berry">
                  Call back →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
