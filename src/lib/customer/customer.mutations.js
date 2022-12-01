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

export const updateCustomer = (parent, args) => {
  const customer = args.input;

  const updCustomer = service.updateCustomerService(customer);
  return updCustomer;
};

export const deleteCustomer = (parent, args) => {
  const customerId = args.id;

  const result = service.deleteCustomerService(customerId);
  return result;
};
