import { CreateBusinessVal } from "./business.validation";
import { createBusinessService } from "./business.service";
import { BadRequestError } from "../../errors";

export const createBusiness = (parent, args) => {
  const { value, error } = CreateBusinessVal(args.input);

  if (error)
    throw new BadRequestError(
      "Failed to create Business: Validation Error",
      400,
      error
    );

  const business = createBusinessService(value);

  return business;
};
