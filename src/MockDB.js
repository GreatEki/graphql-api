const UserList = [
  {
    id: 1,
    name: "John",
    username: "john",
    age: 20,
    nationality: "Canada",
    friends: [
      {
        id: 2,
        name: "Pedro",
        username: "PedroTech",
        age: 20,
        nationality: "Brazil",
      },
      {
        id: 3,
        name: "Sarah",
        username: "Cameron",
        age: 20,
        nationality: "United States",
      },
    ],
  },
  {
    id: 2,
    name: "Pedro",
    username: "PedroTech",
    age: 20,
    nationality: "Brazil",
    friends: [
      {
        id: 1,
        name: "John",
        username: "john",
        age: 20,
        nationality: "Canada",
      },
    ],
  },
  {
    id: 3,
    name: "Sarah",
    username: "Cameron",
    age: 20,
    nationality: "United States",
  },
  {
    id: 34,
    name: "Kelly",
    username: "kelly2021",
    age: 19,
    nationality: "United States",
    friends: [
      {
        id: 2,
        name: "Pedro",
        username: "PedroTech",
        age: 20,
        nationality: "Brazil",
      },
    ],
  },
];

export default UserList;