import express from "express"
const app = express()
app.use(express.json())

usuarios = []

app.get('/', (req, res) => {
    res.status(200).json(usuarios)

  } )

  app.post('/usuario', (req, res) => {
    const {nome,idade} = req.body
    console.log(nome, idade)
    usuarios.push({nome,idade})
    console.log(usuarios)

    res.status(201).send("Usuario Criado")
  })

  
app.listen(3333, () => {
    console.log("Servidor rodando na porta em http://localhost:3333")
})

