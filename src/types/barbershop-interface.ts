export interface BarberShop {
  name: string;
  description: string;
  avatar: string;
  thumbnail: string;
  appointments: string[];
  socialLinks: {
    facebook?: string;
    instagram?: string;
    threads?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    tiktok?: string;
  };
  auth: string[];
  globalService: string[];
  unit: string[];
}
