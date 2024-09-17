import { useState, useEffect } from "react"
import NavBar from "../../components/NavBar/NavBar"
import { GoPencil, GoTrash } from "react-icons/go"
import styles from "./Stock.module.css"
import { IEquipment } from "../../interfaces/equipment.interface"
import UpdateStockModal from "../../components/UpdateStockModal/UpdateStockModal"
import { useUpdateStockContext } from "../../context/UpdateStockContext"
import { useUserContext } from "../../context/UserContext"

const Stock = () => {

    const { selectEquipment } = useUpdateStockContext()
    const { userData, setUserData } = useUserContext()

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

    useEffect(() => {
        const token = localStorage.getItem('token')
        fetch('http://localhost:3000/auth/user-data', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUserData!({
                    ...userData,
                    isLogged: token ? true : false,
                    role: data.role
                })
            })
            .catch(err => console.log(err))
    }, [])

    const handleDeleteEquipment = (id: number) => {
        if (userData!.role === "admin") {
            fetch(`http://localhost:3000/api/equipment/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(_data => window.location.reload())
                .catch(err => console.log(err))
        } else {
            alert("La opción de eliminar solo está disponible para administradores")
        }
    } 

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
                                            <div onClick={() => handleDeleteEquipment(equip.id!)}>
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