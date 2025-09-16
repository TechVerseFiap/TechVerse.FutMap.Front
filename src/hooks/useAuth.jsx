import { useQuery } from "@tanstack/react-query";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(
        `https://68c7351e442c663bd028fb2c.mockapi.io/futmap/api/users`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      return response.json();
    },
  });
}

export function loginUser(users, data) {
  if (!users || !data) return false;
  
  let user = users.find(
    (user) => user.email === data.email && user.senha === data.password
  );

  let isUserExist = !!user;

  setAuthenticated(isUserExist, user);
  return isUserExist;
}

export function clearLocalStorage(){
  localStorage.clear()
}

export function getAuthenticated() {
  return JSON.parse(localStorage.getItem("isAuthenticated")) || false;
}

export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

function setAuthenticated(isAuthenticated, user) {
  if (isAuthenticated) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));

}
