import { useState, useEffect } from "react"
import NavBar from "../../components/NavBar/NavBar"
import { GoPencil, GoTrash } from "react-icons/go"
import styles from "./Stock.module.css"
import { IEquipment } from "../../interfaces/equipment.interface"
import UpdateStockModal from "../../components/UpdateStockModal/UpdateStockModal"
import { useUpdateStockContext } from "../../context/UpdateStockContext"

const Stock = () => {

    const { selectEquipment } = useUpdateStockContext()

    const [stock, setStock] = useState([])
    
    const [showModal, setShowModal] = useState<boolean>(false)

    useEffect(() => {
        fetch("http://localhost:3000/api/equipment")
            .then((res) => {
                if (res.status === 200) return res.json()
                else return []
            })
            .then((data) => setStock(data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <NavBar>
            <UpdateStockModal isOpen={showModal} handleClose={() => setShowModal(false)}/>
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
                            stock.map((equip: IEquipment, index: number) => {
                                return (
                                    <tr key={index}>
                                        <td>{equip.category.name}</td>
                                        <td>{equip.model}</td>
                                        <td>{equip.brand.name}</td>
                                        <td>{equip.serial}</td>
                                        <td>{equip.stock}</td>
                                        <td className={styles["actions"]}>
                                            <div onClick={() => {setShowModal(true); selectEquipment!(equip)}}>
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