import {
  CreateBusinessVal,
  AddCustomerToBusinessVal,
} from "./business.validation";
import * as service from "./business.service";
import { BadRequestError } from "../../errors";

export const createBusiness = (parent, args) => {
  const { value, error } = CreateBusinessVal(args.input);

  if (error)
    throw new BadRequestError(
      "Failed to create Business: Validation Error",
      400,
      error
    );

  const business = service.createBusinessService(value);

  return business;
};

export const updateBusinessInfo = (_, args) => {
  const business = args.input;

  const updBusiness = service.updateBusinessService(business);

  return updBusiness;
};

export const deleteBusiness = (_, args) => {
  const id = args.id;

  const result = service.deleteBusinessService(id);

  return result;
};

export const addCustomerToBusiness = (parent, args) => {
  const { value, error } = AddCustomerToBusinessVal(args.input);

  if (error)
    throw new BadRequestError(
      "Failed to add customer to business: Validation Error",
      null,
      error
    );

  const businessCustomer = service.addCustomerToBusinessService(
    value.business,
    value.customer
  );

  return businessCustomer;
};
