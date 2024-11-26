## System Requirement

- [NodeJS v20.16.0](https://nodejs.org/en) or later
- NPM v10.8.1 or later (Build in on Node v20.16.0)
- [NextJS v14.2.13](https://nextjs.org/)
- [TailwindCSS v3.4.1](https://tailwindcss.com/)

## Getting Started

First, Install required dependencies:

```bash
npm install
npm run db:push #push schema database to server
# or
yarn install
yarn run db:push #push schema database to server
# or
pnpm install
pnpm run db:push #push schema database to server
# or
bun install
bun run db:push #push schema database to server
```

Then, build for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

Then, Add Example data from example-data.csv to database manual.

Then, run nodejs server:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Pages

- [x] Beranda
- [ ] Pemerintah Kota
  - [ ] Tentang Jakarta Timur
    - [x] Visi Misi & Kegiatan Strategis
    - [x] Peta dan Batas Wilayah
    - [x] Demografis
    - [x] Prestasi
  - [ ] Satuan dan Unit Kerja
    - [x] Struktur Organisasi
    - [ ] Walikota
    - [x] Sekretariat Kota
    - [x] Bagian Kota
    - [x] UKPD
    - [x] Kecamatan
      - [ ] Detail
    - [x] Kelurahan
      - [ ] Detail
  - [ ] Kepegawaian
- [ ] Layanan
  - [x] Pendidikan
    - [x] Data Sekolah
  - [x] Transportasi
  - [x] PTSP
  - [x] Kanal Aduan
  - [x] Kesehatan
  - [ ] Internet Jak Wifi
  - [x] Pajak
- [ ] Informasi
  - [ ] Pariwisata
  - [ ] Kebudayaan
  - [ ] RPTRA
  - [ ] Urban Farming
  - [ ] Inovasi
  - [x] Statistik
- [ ] PPID
- [ ] Dashboard
- [ ] Publikasi
  - [ ] Berita
    - [ ] List Berita
    - [ ] Detail Berita
  - [ ] Galeri
    - [ ] List Berita
    - [ ] Detail Berita
  - [ ] Video
    - [ ] List Berita
    - [ ] Detail Berita
  - [ ] Buletin
    - [ ] List Berita
    - [ ] Detail Berita
