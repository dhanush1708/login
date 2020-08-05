export default function validatePassword(password) {
    if (password.length < 5) {
        return "Password should be atleast 5 characters long \n";
    }
}