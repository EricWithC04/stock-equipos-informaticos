import { useUpdateStockContext } from '../../context/UpdateStockContext'
import styles from './UpdateStockForm.module.css'

const UpdateStockForm = () => {

    const { selectedEquipment, handleChangeEquipment } = useUpdateStockContext()

    return (
        <form className={styles["modal-form"]}>
            {/* <input type="text" name="model" onChange={handleChangeEquipment} value={selectedEquipment!.model} />
            <input type="text" name="serial" onChange={handleChangeEquipment} value={selectedEquipment!.serial} /> */}
            <label htmlFor="stock">Stock: </label>
            <input type="number" name="stock" onChange={handleChangeEquipment} value={selectedEquipment!.stock} />
        </form>
    )
}

export default UpdateStockForm