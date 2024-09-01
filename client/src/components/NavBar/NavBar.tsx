import React from "react"
import { useNavigate } from "react-router-dom"
import { RiComputerLine } from "react-icons/ri"
import { MdOutlineInventory2 } from "react-icons/md"
import { PiTrademark } from "react-icons/pi"
import { FaRegPlusSquare } from "react-icons/fa"
import styles from "./NavBar.module.css"

const NavBar = ({ children }: { children: React.ReactNode }) => {

    const navigate = useNavigate()

    return (
        <div className={styles["main-container"]}>
            <nav className={styles["nav-container"]}>
                <h1>Stock Equipos</h1>
                <div className={styles["options"]}>
                    <div onClick={() => navigate("/")}>
                        <MdOutlineInventory2 />
                        <p>Inventario</p>
                    </div>
                    <div onClick={() => navigate("/register-equipment")}>
                        <FaRegPlusSquare />
                        <p>Nuevo Equipo</p>
                    </div>
                    <div onClick={() => navigate("/brands")}>
                        <PiTrademark />
                        <p>Marcas</p>
                    </div>
                    <div onClick={() => navigate("/categories")}>
                        <RiComputerLine />
                        <p>Categorias</p>
                    </div>
                </div>
            </nav>
            <div className={styles["content-container"]}>
                { children }
            </div>
        </div>
    )
}

export default NavBar