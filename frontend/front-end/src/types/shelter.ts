export interface Shelter {
  id: string;
  namaShelter: string;
  kota: string;
  fotoBanner: string | null;
  alamatLengkap: string;

  _count: {
    satwa: number;
  };
}

export interface ShelterResponse {
  success: boolean;
  message: string;
  data: Shelter[];
}
export interface Satwa {
  shelterId: any;
  shelter: any;
  id: string;
  nama: string;
  jenis: string;
  ras: string;
  umur: number;
  kelamin: string;
  foto: string;
  deskripsi: string;
  danaTerkumpul: number;
  status: string;
}

export interface ShelterDetail extends Shelter {
  deskripsi: string;
  noWhatsapp: string;
  status: string;
  isAktif: boolean;
  satwa: Satwa[];
}