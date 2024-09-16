import { useState, useEffect } from "react"
import NavBar from "../../components/NavBar/NavBar"
import { GoPencil, GoTrash } from "react-icons/go"
import styles from "./Stock.module.css"
import { IEquipment } from "../../interfaces/equipment.interface"
import UpdateStockModal from "../../components/UpdateStockModal/UpdateStockModal"

const Stock = () => {

    const [stock, setStock] = useState([])
    const [selectedEquipment, setSelectedEquipment] = useState<IEquipment>({
        id: 0,
        model: "",
        brand: {
            name: ""
        },
        category: {
            name: ""
        },
        serial: "",
        stock: 0
    })
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
            <UpdateStockModal isOpen={showModal} handleClose={() => setShowModal(false)} equipmentData={selectedEquipment} />
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
                                            <div onClick={() => {setShowModal(true); setSelectedEquipment(equip)}}>
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