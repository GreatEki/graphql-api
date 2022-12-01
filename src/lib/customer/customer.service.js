import { Customer } from "../../MockDB";
import { NotFoundError } from "../../errors";
import _ from "lodash";

export function addCustomerService(customer) {
  const lastId = Customer[Customer.length - 1].id;
  customer.id = lastId + 1;
  Customer.push(customer);
  return customer;
}

export function updateCustomerService(customer) {
  const { id, firstName, lastName, email } = customer;

  let updatedCustomer;
  Customer.forEach((cus) => {
    if (cus.id === Number(id)) {
      (cus.firstName = firstName),
        (cus.lastName = lastName),
        (cus.email = email);

      updatedCustomer = cus;
    }
  });

  return updatedCustomer;
}

export function getCustomerService(customerId) {
  const customer = Customer.find((cus) => cus.id === Number(customerId));

  return customer;
}

export function deleteCustomerService(customerId) {
  const customer = Customer.find((cus) => cus.id === Number(customerId));
  if (!customer) throw new NotFoundError("Customer not found");

  _.remove(Customer, (cus) => cus.id === Number(customerId));
  return `Customer deleted`;
}
