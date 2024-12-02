import server from "./server"
import colors from "colors"
import { bgCyan } from './../node_modules/colors/safe.d';

const port = process.env.PORT || 4000

server.listen(port, ()=>{
    console.log(colors.bgCyan(`Servidor corriendo en el puerto: ${port}`))
    }
)