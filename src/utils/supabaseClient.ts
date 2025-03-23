import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://coorcmzlxazalpklbjak.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvb3JjbXpseGF6YWxwa2xiamFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwOTIxODQsImV4cCI6MjA1NjY2ODE4NH0.-wTKsfOEQJXdeOmzafnTiOyyQ0MD9E7Dk0d5CkS7DDE'; // Replace with your own Supabase API Key

export const supabase = createClient(supabaseUrl, supabaseKey);