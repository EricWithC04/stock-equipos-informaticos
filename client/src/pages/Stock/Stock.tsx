import NavBar from "../../components/NavBar/NavBar"
import { GoPencil, GoTrash } from "react-icons/go"
import styles from "./Stock.module.css"

const Stock = () => {
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
                        <tr>
                            <td>Notebook</td>
                            <td>ROG Strix G16</td>
                            <td>Asus</td>
                            <td>AS1234</td>
                            <td>50</td>
                            <td className={styles["actions"]}>
                                <div>
                                    <GoPencil />
                                </div>
                                <div>
                                    <GoTrash />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Notebook</td>
                            <td>Ideapad 3</td>
                            <td>Lenovo</td>
                            <td>LV9876</td>
                            <td>100</td>
                            <td className={styles["actions"]}>
                                <div>
                                    <GoPencil />
                                </div>
                                <div>
                                    <GoTrash />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </NavBar>
    )
}

export default Stock