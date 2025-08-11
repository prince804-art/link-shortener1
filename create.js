import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  const url = req.body.url || req.query.url;
  const code = Math.random().toString(36).substring(2, 8);

  const { error } = await supabase.from('links').insert([{ url, code }]);
  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ shortUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/${code}` });
}