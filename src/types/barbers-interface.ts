export interface Barber {
  name: string;
  email: string;
  password: string;
  role: "Client" | "Barber" | "Admin" | "Developer";
  phoneNumber?: string;
  appointments: string[];
  barbershop?: string;
  avatar?: string;
  description?: string;
  thumbnail?: string;
  services: string[];
  unit: string[];
}
