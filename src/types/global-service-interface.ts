export interface Appointment extends Document {
  client: string;
  barber: string;
  barbershop: string;
  service: string;
  serviceType: "local" | "global";
  date: string;
  status: "scheduled" | "completed" | "cancelled";
  unit: string;
}
