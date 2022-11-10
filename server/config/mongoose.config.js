const mongoose = require("mongoose"); //noc conecta con la BD

mongoose.connect("mongodb://localhost/admiproductos", {
    useNewUrlParser: true,
	useUnifiedTopology: true
})
    .then(()=> console.log("Conectado a DB"))
    .catch(err => console.log("Error al conectarse con DB", err))
