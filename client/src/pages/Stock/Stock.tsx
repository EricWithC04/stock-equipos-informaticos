import { useState, useEffect } from "react"
import NavBar from "../../components/NavBar/NavBar"
import { GoPencil, GoTrash } from "react-icons/go"
import styles from "./Stock.module.css"
import { IEquipment } from "../../interfaces/equipment.interface"

const Stock = () => {

    const [stock, setStock] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/api/equipment")
            .then((res) => res.json())
            .then((data) => setStock(data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <NavBar>
            <div className={styles["container"]}>
                <table className={styles["table-container"]}>
                    <thead>
                        <tr>
                            <th>Categoria</th>
                            <th>Modelo</th>
                            <th>Marca</th>
                            <th>Número de Serie</th>
                            <th>Cantidad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stock.map((equip: IEquipment) => {
                                return (
                                    <tr>
                                        <td>{equip.category.name}</td>
                                        <td>{equip.model}</td>
                                        <td>{equip.brand.name}</td>
                                        <td>{equip.serial}</td>
                                        <td>{equip.stock}</td>
                                        <td className={styles["actions"]}>
                                            <div>
                                                <GoPencil />
                                            </div>
                                            <div>
                                                <GoTrash />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </NavBar>
    )
}

export default Stock