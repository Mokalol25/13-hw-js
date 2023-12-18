const user = {
    name: 'Marko',
    email: '1234@gmail.com',
    password: 1234,
}
const checkEmail = prompt("Введіть email:")
    if (checkEmail === user.email) {
        alert("Правильно")
    } else {
        alert("error")
    }
const checkPassword = Number(prompt("Введіть password:"))
    if (checkPassword === user.password) {
    alert("Правильно")
} else {
    alert("error")
}