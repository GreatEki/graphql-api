import ApplicationError from "./ApplicatonError";

export default class BadRequestError extends ApplicationError {
  constructor(message = "Bad Request Error", statusCode = 400, details) {
    super(message, statusCode, details);
  }
}
