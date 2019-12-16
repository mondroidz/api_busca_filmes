const app = require('./src/app')
const PORT = 4000

//PORTA
app.listen(PORT || process.env.PORT, (e) => {
    if(e) {
        console.log(' Deu erro na porta')
    } console.log(' Está rodando na porta: ' +PORT)
})

