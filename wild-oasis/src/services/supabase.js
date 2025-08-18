import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://ywzbyukfyxspcwlqmfrc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3emJ5dWtmeXhzcGN3bHFtZnJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2NTYzNzYsImV4cCI6MjA3MDIzMjM3Nn0.5pNLw6H-99txJqTkm0fyWTG9rZHNXkJSW20RiJIk8iA'
export const supabase = createClient(supabaseUrl, supabaseKey)
