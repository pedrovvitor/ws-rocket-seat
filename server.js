//usei o express pra criar e configurar meu servidor
const express = require("express")
const server = express()

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, voluptatum velit? Debitis",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, voluptatum velit? Debitis",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, voluptatum velit? Debitis",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Karaokê",
        category: "Família",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, voluptatum velit? Debitis",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729078.svg",
        title: "Pintura",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, voluptatum velit? Debitis",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729048.svg",
        title: "Recortes",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, voluptatum velit? Debitis",
        url: "https://rocketseat.com.br"
    }
    

]

//configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

//configuracao do nunjucks (modulo que permite uso de variaveis dentro de um html)
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true // impede o nunjucks de fazer cache de alguns arquivos recomendado para ambiente de dev
})

//criei uma rota /
//e capturo o pedido do cliente para responder

server.get("/", function(req, res){
    const reversedIdeas = [...ideas].reverse()
    let lastIdeas = []
    for(let idea of reversedIdeas) {
        if(lastIdeas.length < 2){
            lastIdeas.push(idea)
        }
    }

    return res.render("index.html", {ideas: lastIdeas})
})

server.get("/ideias", function(req, res){
    const reversedIdeas = [...ideas].reverse()
    return res.render("ideias.html", {ideas : reversedIdeas})
})

//liguei meu servidor
server.listen(3000)