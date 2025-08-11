import { createClient } from '@supabase/supabase-js';

export async function getServerSideProps({ params }) {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  const { data } = await supabase
    .from('links')
    .select('url')
    .eq('code', params.code)
    .single();

  if (!data) {
    return { notFound: true };
  }

  return {
    redirect: {
      destination: data.url,
      permanent: false,
    },
  };
}

export default function RedirectPage() {
  return null;
}