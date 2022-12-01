import ApplicationError from "./ApplicatonError";

export default class NotFoundError extends ApplicationError {
  constructor(message = "Bad Request Error", statusCode = 404, details) {
    super(message, statusCode, details);
  }
}
