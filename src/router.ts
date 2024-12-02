import { Router, Response, Request } from "express";
import colors from 'colors';
import { bgGreen } from './../node_modules/colors/safe.d';

const router = Router()

router.post('/auth/register', (req: Request, res: Response) => {
    console.log(colors.bgGreen("Registro"))
    console.log(req.body)
    res.send("PAgina de registro")
    }
)

export default router