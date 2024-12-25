export const API_URL = "http://localhost:5000";

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

export function USER_GET() {
  return {
    url: API_URL + "/auth/me",
  };
}

export function SERVICES_GET() {
  return {
    url: API_URL + "/global-service?barberShopId=6750fddb11f132668419af0a",
  };
}

export function UNITS_GET() {
  return {
    url: API_URL + "/unit?barberShopId=6750fddb11f132668419af0a",
  };
}

export function UNITS_BY_ID_GET(unidadeId: string) {
  return {
    url: API_URL + `/unit/${unidadeId}/?barberShopId=6750fddb11f132668419af0a`,
  };
}

export function APPOINTMENTS_GET() {
  return {
    url:
      API_URL +
      "/appointment/user/675127668bfce413f02cf81d?barberShopId=6750fddb11f132668419af0a",
  };
}

export function APPOINTMENTS_DELETE(appointmentId: string) {
  return {
    url:
      API_URL +
      `/appointment/${appointmentId}?barberShopId=6750fddb11f132668419af0a`,
  };
}
