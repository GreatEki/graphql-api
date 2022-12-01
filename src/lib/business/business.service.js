import { Business, UserList, Customer, BusinessCustomer } from "../../MockDB";
import { NotFoundError } from "../../errors";
import _ from "lodash";

export function createBusinessService(business) {
  const confirmedOwner = UserList.find(
    (user) => user.id === Number(business.owner)
  );

  if (!confirmedOwner) throw new NotFoundError("No Owner found for record id");

  const lastId = Business[Business.length - 1].id;
  business.id = lastId + 1;
  Business.push(business);
  return business;
}

export function getBusinessService(businessId) {
  const business = Business.find((bus) => bus.id === Number(businessId));

  return business;
}

export function updateBusinessService(business) {
  const { id, name, yearOfEstablishment, owner } = business;

  let updatedBusiness;
  Business.forEach((bus) => {
    if (bus.id === Number(id)) {
      (bus.name = name),
        (bus.yearOfEstablishment = yearOfEstablishment),
        (bus.owner = owner);

      updatedBusiness = bus;
    }
  });

  return updatedBusiness;
}

export function deleteBusinessService(businessId) {
  const business = Business.find((user) => user.id === Number(businessId));
  if (!business) throw new NotFoundError("Business not found");

  _.remove(Business, (bus) => bus.id === Number(businessId));
  return `Business deleted`;
}

export function addCustomerToBusinessService(businessId, customerId) {
  const business = Business.find((bus) => bus.id === Number(businessId));

  if (!business) throw new NotFoundError("No Business found for record id");

  const customer = Customer.find((cus) => cus.id === Number(customerId));

  if (!customer) throw new NotFoundError("No customer found for record id");

  const lastId = BusinessCustomer[BusinessCustomer.length - 1].id;
  const newBusCustomers = {
    id: lastId,
    business,
    customer,
  };
  BusinessCustomer.push(newBusCustomers);
  return newBusCustomers;
}
