export interface Auth {
  name: string;
  email: string;
  password: string;
  role: "Client";
  phoneNumber: string;
  appointments?: string[];
  barbershop?: string;
}
