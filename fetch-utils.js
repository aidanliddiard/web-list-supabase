const SUPABASE_URL = 'https://euyvcwbxbvsyohlvlxjk.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1eXZjd2J4YnZzeW9obHZseGprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NTMxNDEsImV4cCI6MTk2MDAyOTE0MX0.2SIvdAPNpzyD2t_5zjQNhqc-WzDTJc5iAdX7Bws1Tc0';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

