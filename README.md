# Local Biz Websites

Portfolio and enquiry site for local businesses. Built with React, TanStack Start, Tailwind CSS, and Supabase.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Deploy to Netlify

1. Push this repository to GitHub.
2. Create a new site in Netlify and connect the repository.
3. Set the build command to: `NITRO_PRESET=netlify npm run build`
4. Set the publish directory to: `.output/public`
5. Add the following environment variables in Netlify:
   - `SUPABASE_URL`
   - `SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`

## Supabase setup

Run the SQL from `supabase/schema.sql` in the Supabase SQL Editor before deploying.
