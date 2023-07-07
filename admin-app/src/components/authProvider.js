

export const authProvider = {
    // Called when user attempts to log in
    login: ({username}) => {
        localStorage.setItem("username", username);
        // Accept all username/password combinations
        return Promise.resolve();
    },
    // Called when user clicks the logout button
    logout: () => {
        localStorage.removeItem("username");
        return Promise.resolve();
    },
    // Called when the API gets an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem("username");
            return Promise.reject();
        } 
        return Promise.resolve();
    },
    // Called when the user navigates to a new location, to check for auth
    checkAuth: () => {
        return localStorage.getItem("username")
            ? Promise.resolve()
            : Promise.reject();
    },
    // Called when the user navigates to a new location, to check permissions/roles
    getPermissions: () => Promise.resolve(),
}
