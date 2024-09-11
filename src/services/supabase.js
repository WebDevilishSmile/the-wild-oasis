import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://dofhvsbhxbxgvgqcadkl.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvZmh2c2JoeGJ4Z3ZncWNhZGtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1MjYxMDMsImV4cCI6MjA0MDEwMjEwM30.qHAVfiOKRbDZztSIMYVSssNCWUBwKZZSJQJxjKtkaok';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
