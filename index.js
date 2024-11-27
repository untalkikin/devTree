import express from "express"

const app = express()



app.get('/', (req, res) => {
        res.send('Hola mundo en express')
    }
)

const port = process.env.PORT || 4000

app.listen(port, ()=>{
    console.log(`Servidoe corriendo en el puerto: ${port}`)
    }
)