import { http } from ".";

export const UserManagementService = {
  getUsers: () => {
    return http.get("https://jsonplaceholder.typicode.com/users");
  },
};
