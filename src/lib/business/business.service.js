import { Business, UserList } from "../../MockDB";
import { NotFoundError } from "../../errors";

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
