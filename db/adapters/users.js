const client = require("../client");

async function createUser({ username, email, password, adm }) {
  try {
    console.log("in the adapter");
    console.log({ username, email, password, adm });

    const {
      rows: [user],
    } = await client.query(
      `
    INSERT INTO users(username, email, password, adm)
            VALUES($1,$2, $3, $4)
            ON CONFLICT (username) DO NOTHING
            returning *
            `,
      [username, email, password, adm]
    );

    return user;
  } catch (error) {
    console.log(error);
    const success = false;
    const message = "failed to create user";
  }
}
async function getAllUsers() {
  const { rows } = await client.query(`
    SELECT * FROM users;
  `);
  return rows;
}
async function getUserByUsername(username) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT *
        FROM users
        WHERE username=$1;
      `,
      [username]
    );
    console.log("user from getUserbyUsername:", user);
    return user;
  } catch (error) {
    console.log(error);
  }
}

async function getUserbytoken() {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    SELECT * from users
    WHERE password = $1
    `,
      [token]
    );
  } catch (error) {
    console.log(error);
  }
}
async function deleteUser(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `DELETE from users WHERE user_id=$1
    `,
      [id]
    );
  } catch (error) {
    console.log(error);
  }
}

module.exports = { createUser, getAllUsers, getUserByUsername, getUserbytoken };
