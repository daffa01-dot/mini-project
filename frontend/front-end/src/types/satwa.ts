export interface Animal {
  id: string;
  shelterId: string;

  nama: string;
  jenis: string;
  ras: string;

  umur: number;
  kelamin: string;

  foto: string;

  deskripsi: string;

  danaTerkumpul: number;

  status: string;

  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;

  shelter: {
    id: string;
    namaShelter: string;
    alamatLengkap: string;
    kota: string;
    fotoBanner: string | null;
    noWhatsapp: string;
    deskripsi: string;
    status: string;
    isAktif: boolean;
  };
}

export interface AnimalResponse {
  success: boolean;
  message: string;
  data: Animal;
}