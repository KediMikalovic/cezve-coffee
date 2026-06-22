-- UUID üretimi için
create extension if not exists "pgcrypto";

create table public.products (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  category    text not null,
  price       numeric(10,2) not null default 0,
  stock       integer not null default 0,
  image_url   text,
  created_at  timestamptz not null default now()
);

-- RLS aç ve anon role tam CRUD izni ver (demo projesi için)
alter table public.products enable row level security;
create policy "anon select" on public.products for select using (true);
create policy "anon insert" on public.products for insert with check (true);
create policy "anon update" on public.products for update using (true) with check (true);
create policy "anon delete" on public.products for delete using (true);

-- Başlangıç verisi (Kolibri ürünleri)
insert into public.products (name, category, price, stock) values
('White Mocha','Sıcak Kahve',52,40),
('Caramel Latte','Sıcak Kahve',54,35),
('Toffeenut Latte','Sıcak Kahve',56,12),
('Cold Brew Latte','Soğuk Kahve',58,25),
('Ice White Mocha','Soğuk Kahve',55,18),
('Berry Special Frappe','Frappe',62,15),
('Caramel Frappe','Frappe',60,8),
('Hazelnut Frappe','Frappe',60,30),
('Milkshake Oreo','Milkshake',65,10),
('San Sebastian','Tatlı',70,22);
