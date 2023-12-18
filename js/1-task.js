const addButton = document.getElementById('add-money');
const getButton = document.getElementById('get-money');
const bankAccont = {
    ownerName: "Nazar",
    accountNumber: 1231231,
    balance: 2000,
    deposit: 1000,
    get: 500,
    addMoneyButton() {
        addButton.addEventListener('click', (event) => {
            bankAccont.balance = bankAccont.balance + bankAccont.deposit
            console.log(bankAccont.balance)
        })
    },
    getMoneyButton() {
        getButton.addEventListener('click', (event) => {
            bankAccont.balance = bankAccont.balance - bankAccont.get
            if (bankAccont.balance <= 0) {
                console.log("На рахунку не має грошей")
            }
            console.log(bankAccont.balance)
        })
    }
}
bankAccont.addMoneyButton()
bankAccont.getMoneyButton()