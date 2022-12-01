import * as service from "./customer.service";
import { AddCustomerVal } from "./customer.validation";
import { BadRequestError } from "../../errors";

export const addCustomer = (parent, args) => {
  const { value, error } = AddCustomerVal(args.input);

  if (error)
    throw new BadRequestError(
      "Failed to create Customer: Validation Error",
      400,
      error
    );

  const customer = service.addCustomerService(value);

  return customer;
};
