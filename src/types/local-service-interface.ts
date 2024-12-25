export interface LocalService {
  name: string;
  description?: string;
  duration: number;
  price: number;
  barbers: string[];
  barbershop: string;
  unit: string;
  type: "local";
  avatar: string;
  thumbnail: string;
}
