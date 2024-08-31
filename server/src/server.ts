import express, { Application } from "express"
import morgan from "morgan"
import cors from "cors"
import helmet from "helmet"

class Server {
    app: Application
    port: number
    host: string

    constructor ( ) {
        this.app = express()
        this.port = 3000
        this.host = 'localhost'
        this.connectDB()
        this.middlewares()
        this.routes()
    }

    connectDB(): void {
        console.log('Conectado a la base de datos');
    }

    middlewares(): void {
        this.app.use(cors())
        this.app.use(helmet())
        this.app.use(morgan('dev'))
        this.app.use(express.json())
    }

    routes(): void {
        this.app.get("/", (_req: any, res: any) => res.send("Hello World!"))
    }

    listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Server running on http://${this.host}:${this.port}`)
        })
    }
}

export { Server }