export interface Rptra {
  id: number;
  kecID: number;
  nama: string;
  alamat: string;
  created_at: string;
  updated_at: string;
  kecamatan: Kecamatan;
}

interface Kecamatan {
  id: number;
  nama: string;
}
