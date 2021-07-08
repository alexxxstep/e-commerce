import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Diana Ford',
    email: 'diana@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Fred Couper',
    email: 'fred@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John Doe',
    email: 'doe@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
