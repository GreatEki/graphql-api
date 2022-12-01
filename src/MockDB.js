const UserList = [
  {
    id: 1,
    firstName: "John",
    lastName: "john",
    email: "johndoe@testmail.com",
  },
];

const MovieList = [
  {
    id: 1,
    name: "Avengers Endgame",
    yearOfPublication: 2019,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "Interstellar",
    yearOfPublication: 2007,
    isInTheaters: true,
  },
  {
    id: 3,
    name: "Superbad",
    yearOfPublication: 2010,
    isInTheaters: true,
  },
];

export const Business = [
  {
    id: 1,
    name: "John Doe Ventures Ltd",
    yearOfEstablishment: 2022,
    owner: 1,
  },
];

export const Customer = [
  {
    id: 1,
    firstName: "Frank",
    lastName: "Thomas",
    email: "frankthomas@mail.com",
  },
];

export const BusinessCustomer = [
  {
    id: 1,
    business: {
      id: 1,
      name: "John Doe Ventures Ltd",
      yearOfEstablishment: 2022,
      owner: 1,
    },
    customer: {
      id: 1,
      firstName: "Frank",
      lastName: "Thomas",
      email: "frankthomas@mail.com",
    },
  },
];
export { UserList, MovieList };
