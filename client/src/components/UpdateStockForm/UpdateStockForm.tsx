import { useUpdateStockContext } from '../../context/UpdateStockContext'
import styles from './UpdateStockForm.module.css'

const UpdateStockForm = () => {

    const { selectedEquipment } = useUpdateStockContext()

    return (
        <form className={styles["modal-form"]}>
            <input type="text" value={selectedEquipment!.category.name} />
            <input type="text" value={selectedEquipment!.model} />
            <input type="text" value={selectedEquipment!.brand.name} />
            <input type="text" value={selectedEquipment!.serial} />
            <input type="number" value={selectedEquipment!.stock} />
        </form>
    )
}

export default UpdateStockForm