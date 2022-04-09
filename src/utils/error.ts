interface IerrorCode {
  EMAIL_NOT_FOUND?: string;
  INVALID_PASSWORD?: string;
}

const ERROR_CODES = {
  EMAIL_NOT_FOUND: "No user with this email was found",
  INVALID_PASSWORD: "Incorrect email address or password",
};

export function error(code: IerrorCode): string {
  return ERROR_CODES[code] ? ERROR_CODES[code] : "unknown error";
}
