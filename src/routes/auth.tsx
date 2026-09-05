import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const TITLE = "Owner sign in — Raparthi Navaneeth";
const DESCRIPTION = "Sign in to read website enquiries sent from the portfolio contact form.";

export const Route = createFileRoute("/auth")({
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
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const field =
    "mt-1 w-full rounded-xl bg-cream px-4 py-3 text-sm text-ink outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-apricot/60";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      if (mode === "signup") {
        const { error: err } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/dashboard` },
        });
        if (err) throw err;
        setNotice("Account created. If a confirmation email arrives, open it, then sign in.");
        setMode("signin");
      } else {
        const { error: err } = await supabase.auth.signInWithPassword({ email, password });
        if (err) throw err;
        navigate({ to: "/dashboard" });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid min-h-screen place-items-center bg-cream px-5 py-16 font-body text-ink">
      <div className="w-full max-w-md rounded-3xl bg-white p-7 ring-1 ring-black/5">
        <h1 className="font-display text-2xl font-semibold tracking-tight">
          {mode === "signin" ? "Sign in" : "Create your account"}
        </h1>
        <p className="mt-2 text-sm text-ink/60">Private area for reading enquiries from your website.</p>

        <form onSubmit={submit} className="mt-6">
          <label className="block">
            <span className="text-xs font-semibold text-ink/60">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={field}
            />
          </label>
          <label className="mt-4 block">
            <span className="text-xs font-semibold text-ink/60">Password</span>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={field}
            />
          </label>
          {error && <p className="mt-4 text-sm font-medium text-berry">{error}</p>}
          {notice && <p className="mt-4 text-sm font-medium text-ink/70">{notice}</p>}
          <button
            type="submit"
            disabled={busy}
            className="mt-5 w-full rounded-full bg-apricot px-6 py-3 text-sm font-semibold text-cream disabled:opacity-60"
          >
            {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>

        <button
          type="button"
          onClick={() => {
            setMode(mode === "signin" ? "signup" : "signin");
            setError(null);
          }}
          className="mt-5 w-full text-sm font-semibold text-berry"
        >
          {mode === "signin" ? "Need an account? Create one" : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
}
