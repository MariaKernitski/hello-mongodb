const mongoose = require("mongoose");

const mongoDB = "mongodb+srv://kernitskimaria:Abacate8907@cluster0.rch5y.mongodb.net/"

async function main() {
    await mongoose.connect(mongoDB);
}

main()
    .then(() => console.log("Conexão realizada com sucesso."))
    .catch(err => console.log(err))

module.exports = mongoose
