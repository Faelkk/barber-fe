export interface Unit {
  address: {
    fullAddress: string;
    road: string;
    neighborhood: string;
    cep: string;
    state: string;
    country: string;
  };
  avatar: string;
  thumbnail: string;
  operatingHours: {
    monday: { start: string; end: string };
    tuesday: { start: string; end: string };
    wednesday: { start: string; end: string };
    thursday: { start: string; end: string };
    friday: { start: string; end: string };
    saturday: { start: string; end: string };
    sunday?: { start?: string; end?: string };
  };
  localService: string[];
  barbershop: string;
}
