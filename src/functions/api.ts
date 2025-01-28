export const API_URL = process.env.NEXT_API_URL;

const barberShopId = process.env.NEXT_BARBERSHOP_ID;

export function SIGNIN_USER() {
  return {
    url: API_URL + "/auth/login",
  };
}

export function SIGNUP_USER() {
  return {
    url: API_URL + "/auth",
  };
}

export function RECUPERAR_SENHA() {
  return {
    url: API_URL + "/auth/recovery-password",
  };
}

export function RESETAR_SENHA(token: string) {
  return {
    url: API_URL + `/auth/reset-password?token=${token}`,
  };
}

export function USER_GET() {
  return {
    url: API_URL + "/auth/me",
  };
}

export function VERIFY_TOKEN(token: string) {
  return {
    url: API_URL + `/auth/check-token?token=${token}`,
  };
}

export function SERVICES_GET() {
  return {
    url: API_URL + `/global-service?barberShopId=${barberShopId}`,
  };
}

export function UNITS_GET() {
  return {
    url: API_URL + `/unit?barberShopId=${barberShopId}`,
  };
}

export function UNITS_BY_ID_GET(unidadeId: string) {
  return {
    url: API_URL + `/unit/${unidadeId}/?barberShopId=${barberShopId}`,
  };
}

export function APPOINTMENTS_GET(userId: string) {
  return {
    url: API_URL + `/appointment/user/${userId}?barberShopId=${barberShopId}`,
  };
}

export function APPOINTMENTS_GET_BY_ID(appointmentById: string) {
  return {
    url:
      API_URL + `/appointment/${appointmentById}?barberShopId=${barberShopId}`,
  };
}

export function AVAILABLE_HOURS_GET(unitId: string, date: string) {
  return {
    url:
      API_URL +
      `/appointment/available-times/${unitId}?date=${date}&barberShopId=${barberShopId}`,
  };
}

export function APPOINTMENTS_DELETE(appointmentId: string) {
  return {
    url: API_URL + `/appointment/${appointmentId}?barberShopId=${barberShopId}`,
  };
}

export function CREATE_APPOINTMENT() {
  return {
    url: `http://localhost:5000/appointment?barberShopId=${barberShopId}`,
  };
}

export function EDIT_APPOINTMENT(appointmentId: string) {
  return {
    url: `http://localhost:5000/appointment/${appointmentId}?barberShopId=${barberShopId}`,
  };
}
