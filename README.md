# TCS Website

## Development

- `npm install`
- Create `.env` (see below) and run `npm run dev`

## Supabase (Auth + Database)

This project integrates Supabase for authentication and blog storage.

Environment variables (create `.env` in project root or `.env.local`):

```
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Database schema (execute in Supabase SQL editor):

```sql
create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text,
  content text,
  image text,
  tags text[] default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create or replace function trigger_set_timestamp()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_posts_updated_at on posts;
create trigger set_posts_updated_at
before update on posts
for each row
execute function trigger_set_timestamp();

alter table posts enable row level security;

create policy "Public can read posts" on posts
for select using (true);

create policy "Authenticated can upsert posts" on posts
for insert with check (auth.role() = 'authenticated');

create policy "Authenticated can update posts" on posts
for update using (auth.role() = 'authenticated');

create policy "Authenticated can delete posts" on posts
for delete using (auth.role() = 'authenticated');
```

Auth

- Enable Email/Password in Supabase Auth settings
- Create an admin user and use it to log in at `/admin/login`
