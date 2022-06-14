// import User from '../classes/User.class.js';
// import UserSchema from '../schemas/User.schema.js';

const DB = [
  {
    id: 1,
    name: "Rick Sanchez"
  },
  {
    id: 8,
    name: "Adjudicator Rick"
  },
  {
    id: 15,
    name: "Alien Rick"
  },
  {
    id: 19,
    name: "Antenna Rick"
  },
  {
    id: 22,
    name: "Aqua Rick"
  },
  {
    id: 48,
    name: "Black Rick"
  },
  {
    id: 56,
    name: "Bootleg Portal Chemist Rick"
  },
  {
    id: 69,
    name: "Commander Rick"
  },
  {
    id: 72,
    name: "Cool Rick"
  }
];

const DBBackup = [
  {
    id: 1,
    name: "Rick Sanchez"
  },
  {
    id: 8,
    name: "Adjudicator Rick"
  },
  {
    id: 15,
    name: "Alien Rick"
  },
  {
    id: 19,
    name: "Antenna Rick"
  },
  {
    id: 22,
    name: "Aqua Rick"
  },
  {
    id: 48,
    name: "Black Rick"
  },
  {
    id: 56,
    name: "Bootleg Portal Chemist Rick"
  },
  {
    id: 69,
    name: "Commander Rick"
  },
  {
    id: 72,
    name: "Cool Rick"
  }
];

const UserController = {
  getUsers() {
    return DB;
  },

  findUser: ({ id }) => {
    const user = DB.find(res => res.id == id)
    return user
  },

  updateUser(id) {
    const user = DB.find(res => res.id == id);
    console.log('id', id.data.id);
    console.log('name', id.data.name);
    user.name = id.data.name;
    return user
  },

  deleteUser() {
    let i = 0
    const deleted = []
    while (i < DB.length) {
      if (DB[i].id) {
        deleted.push(DB.splice(i, 1)[0])
      } else {
        i++
      }
      console.log('deleted', deleted);
      return deleted;
    }
  }
}

export default UserController;