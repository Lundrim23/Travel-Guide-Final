import axios from "axios";

const api = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL
  baseURL: "http://localhost:5000/api/users/",
});

/**
 * An async function that accepts a user information object and registers it.
 *
 * @param {Object} user - User information for registration
 * @param {string} user.username username
 * @param {string} user.email users email
 * @param {string} user.phone users phone
 * @param {string} user.password users Password
 * @param {boolean} user.isAdmin user is admin
 *
 * @returns {Promise} Promise with user saved in db
 *
 * @public
 */
export async function registerUser(user) {
  return await api.post("register", user);
}

/**
 * An async function that accepts a user object and logs the user in.
 *
 *  @param {Object} user - User who is logging in
 *  @param {string} user.email Users Email
 *  @param {string} user.password Users Password
 *
 * @returns {Promise} Promise with existing user and access token
 *
 * @public
 */
export async function login(user) {
  return await api.post("login", user);
}

/**
 * An async function that gets the current User
 *
 * @returns {Promise} Promise with current user
 *
 * @public
 */
export async function getUser() {
  return await api.get("users");
}

// Refresh token
export async function refreshToken() {
  return await api.get("refresh");
}

// Logout endpoint
export async function logout(logOut) {
  return await api.post("logout", logOut);
}

// user get one all and update
export function getOneUser (id){
  return api.get('/users/get/' + id);
}


export function updateUser(id, data) {
  return api.patch("/users/update/" + id, data);
}

export function getAllUsers() {
  return api.get("/users/get");
 }