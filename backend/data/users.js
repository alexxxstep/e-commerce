import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@ex.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Bruce Lee',
    email: 'lee@ex.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mark Twen',
    email: 'twen@ex.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
