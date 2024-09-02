import NavBar from "../../components/NavBar/NavBar"
import styles from "./NewEquipments.module.css"

const NewEquipments = () => {
    return (
        <NavBar>
            <div className={styles["container"]}>
                <h2>Agregar Nuevo Equipo</h2>
                <form className={styles["equipment-form"]}>
                    <select defaultValue={"Tipo"}>
                        <option value="Tipo">Tipo</option>
                        <option value="Notebook">Notebook</option>
                        <option value="Impresora">Impresora</option>
                        <option value="Router">Router</option>
                    </select>
                    <select defaultValue={"Marca"}>
                        <option value="Marca">Marca</option>
                        <option value="Notebook">Asus</option>
                        <option value="Impresora">HP</option>
                        <option value="Router">Dell</option>
                    </select>
                    <input 
                        type="text" 
                        placeholder="Modelo"
                    />
                    <input 
                        type="text" 
                        placeholder="Número de Serie"
                    />
                    <input 
                        type="number" 
                        placeholder="Cantidad"
                    />
                    <button type="submit">Agregar</button>
                </form>
            </div>
        </NavBar>
    )
}

export default NewEquipments