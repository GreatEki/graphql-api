export default class ApplicationError extends Error {
  message = "";
  details = {};
  statusCode = 500;

  constructor(message, statusCode, details) {
    super();

    if (message) {
      this.message = message;
    }
    if (statusCode) {
      this.statusCode = statusCode;
    }

    if (details) {
      this.details = details;
    }
  }
}
