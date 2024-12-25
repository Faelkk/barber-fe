// utils/formatPhoneNumber.ts
export function formatPhoneNumber(phoneNumber: string): string {
  // Remove qualquer caractere não numérico
  const cleaned = phoneNumber.replace(/\D/g, "");

  // Formata o número de acordo com o padrão (xx) xxxxx-xxxx
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  // Retorna o número original caso não seja possível formatá-lo
  return phoneNumber;
}
