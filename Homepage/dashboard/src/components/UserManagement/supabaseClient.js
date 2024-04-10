import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ychmaybketjyugnaiqsa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljaG1heWJrZXRqeXVnbmFpcXNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0NjE1MjUsImV4cCI6MjAyODAzNzUyNX0.JeX_UGvR7tQa82NJQL2G0AoNyZGpiJkoy-gi1j-hsCc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
