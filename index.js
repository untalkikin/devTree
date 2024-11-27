const express = require('express')

const app = express()

const port = 8000

app.get('/', (req, res) => {
        res.send('Hola mundo en express')
    }
)


app.listen(port, ()=>{
    console.log(`Servidoe corriendo en el puerto: ${port}`)
    }
)