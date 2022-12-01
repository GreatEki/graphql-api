import { Customer } from "../../MockDB";

export function addCustomerService(customer) {
  const lastId = Customer[Customer.length - 1].id;
  customer.id = lastId + 1;
  Customer.push(customer);
  return customer;
}

export function getCustomerService(customerId) {
  const customer = Customer.find((cus) => cus.id === Number(customerId));

  return customer;
}
