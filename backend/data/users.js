import bcrypt from 'bcryptjs'

const users = [
  {
    name: "Admin User",
    email: "test1@mail.ru",
    password: bcrypt.hashSync("root", 10),
    isAdmin: true,
  },
  {
    name: "Peter Duskin",
    email: "test2@mail.ru",
    password: bcrypt.hashSync("root", 10),
  },
  {
    name: "John Doe",
    email: "test3@mail.ru",
    password: bcrypt.hashSync("root", 10),
  },
];

export default users