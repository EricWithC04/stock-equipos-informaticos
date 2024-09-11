import express, { Application } from "express"
import morgan from "morgan"
import cors from "cors"
import helmet from "helmet"
import env from "./environments/environments"
import { connectionDB } from "./config/connectDB"
import equipmentRoutes from "./routes/equipment.routes"
import brandRoutes from "./routes/brand.routes"
import categoryRoutes from "./routes/category.routes"
import userRouter from "./routes/user.routes"

class Server {
    app: Application
    port: number
    host: string

    constructor ( ) {
        this.app = express()
        this.port = parseInt(env.PORT)
        this.host = env.HOST
        this.connectDB()
        this.middlewares()
        this.routes()
    }

    async connectDB(): Promise<void> {
        await connectionDB()
    }

    middlewares(): void {
        this.app.use(cors())
        this.app.use(helmet())
        this.app.use(morgan('dev'))
        this.app.use(express.json())
    }

    routes(): void {
        this.app.use("/api/equipment", equipmentRoutes)
        this.app.use("/api/brand", brandRoutes)
        this.app.use("/api/category", categoryRoutes)
        this.app.use("/api/user", userRouter)
    }

    listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Server running on http://${this.host}:${this.port}`)
        })
    }
}

export { Server }