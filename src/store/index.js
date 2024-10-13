import { createStore } from "vuex";
import { jwtDecode } from "jwt-decode";

export default createStore({
  state: {
    user: null,
    token: localStorage.getItem("token"), // Retrieve token from localStorage
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
      state.token = null;
    }, // Added for logout functionality
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        const token = localStorage.getItem("token");

        const decodedToken = jwtDecode(token);
        commit("setUser", decodedToken);
        console.log("User fetched:", token);
      } catch (error) {
        console.error("Error fetching user:", error);
        commit("clearUser"); // Clear user data on error (optional)
      }
    },
    logout({ commit }) {
      commit("clearUser");
      localStorage.removeItem("token"); // Remove token from localStorage
    },
  },
});
