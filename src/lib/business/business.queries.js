import { Business } from "../../MockDB";
import * as service from "./business.service";

export const getBusinessess = () => {
  return Business;
};

export const getBusiness = (_, args) => {
  const businessId = args.id;

  const business = service.getBusinessService(businessId);

  return business;
};
