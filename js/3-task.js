const user = {
    name: 'Marko',
    email: '1234@gmail.com',
    password: 1234,
    emailCheck() {
        const checkEmail = prompt("Введіть email:")
    if (checkEmail === user.email) {
        alert("Правильно")
    } else {
        alert("error")
    }
    },
    passwordCheck() {
        const checkPassword = Number(prompt("Введіть password:"))
    if (checkPassword === user.password) {
    alert("Правильно")
} else {
    alert("error")
}
    }
}
user.emailCheck()
user.passwordCheck()
