import { LocationQuery, LocationQueryValue } from "vue-router";

const ERROR_CODES = {
  EMAIL_NOT_FOUND: "No user with this email was found",
  INVALID_PASSWORD: "Incorrect email address or password",
  auth: "Please log in.",
};

export function error(
  code: LocationQueryValue | LocationQuery | LocationQueryValue[] | string
): string {
  return ERROR_CODES[code as keyof typeof ERROR_CODES]
    ? ERROR_CODES[code as keyof typeof ERROR_CODES]
    : "unknown error";
}
