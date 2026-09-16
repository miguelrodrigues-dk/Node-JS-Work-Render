const express = require("express");

const router = express.Router();

// ========================================
// DADOS
// ========================================

let clientes = [
    {
        id: 1,
        nome: "John Doe",
        email: "john.doe@example.com",
        telephone: "123-456-7890"
    },
    {
        id: 2,
        nome: "Jane Smith",
        email: "jane.smith@example.com",
        telephone: "098-765-4321"
    },
    {
        id: 3,
        nome: "Bob Johnson",
        email: "bob.johnson@example.com",
        telephone: "555-555-5555"
    }
];

router.get("/", (req, res) => {
    res.render("clientes/index", {

        clientes: clientes

    });
});

router.get("/cadastro", (req, res) =>{

    res.render("clientes/form-cadastro");

});

router.post("/", (req, res) => {

    const { nome, email, telephone} = req.body;

    const novoCliente = {
        nome: nome,
        email: email,
        telephone: telephone
    };

    clientes.push(novoCliente);

    res.redirect("/clientes");
});

module.exports = router;