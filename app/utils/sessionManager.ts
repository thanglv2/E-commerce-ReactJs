export default class SessionManager {
    private static _user = null;

    static get user() {
        const storedUser = JSON.parse(localStorage.getItem("user"))
        if (!this._user && storedUser) {
            this._user = storedUser;
        }
        return this._user;
    }

    static set user(newUser) {
        this._user = newUser;
        localStorage.setItem("user", JSON.stringify(newUser));
    }

    static logout = () => {
        SessionManager._user = null;
        localStorage.removeItem("user");
    }
}
