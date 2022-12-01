import { Customer } from "../../MockDB";
import * as service from "./customer.service";

export const getCustomers = () => {
  return Customer;
};

export const getCustomer = (parent, args) => {
  const { id } = args;

  const customer = service.getCustomerService(id);

  return customer;
};
