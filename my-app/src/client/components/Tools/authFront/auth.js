
export const isAuthenticated = async (onTokenRefreshed) => {
  const token = localStorage.getItem("token");

  if (!token) {

    const refreshed = await tryRefresh(onTokenRefreshed); 
    return refreshed;
  }


  const response = await fetch("/api/auth/validate", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.ok) return true;


  if (response.status === 403) {

    const refreshed = await tryRefresh(onTokenRefreshed);
    return refreshed;
  }

  return false;
};


async function tryRefresh(onTokenRefreshed) {
  try {
    const refreshResponse = await fetch("/api/refresh", {
      method: "POST",
      credentials: "include",
    });

    if (!refreshResponse.ok) return false;

    const data = await refreshResponse.json();
    
    onTokenRefreshed(data.accessToken); 
    
    return true;

  } catch (err) {
    return false;
  }
}
// logout frontedn requesting logout from the backend and then exporting it 
export async function logout(){
  await fetch("/api/logout", {
  method: "POST",
  credentials: "include",
});

// localStorage.removeItem("token");
}
