export default function validateUsername(username) {
    if (username.length < 5) {
        return "Username should be atleast 5 characters long \n";
    }
}