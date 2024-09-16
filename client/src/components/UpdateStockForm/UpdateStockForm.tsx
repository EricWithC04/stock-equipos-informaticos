import { IEquipment } from '../../interfaces/equipment.interface'
import styles from './UpdateStockForm.module.css'

const UpdateStockForm = ({ category, model, brand, serial, stock }: IEquipment) => {
    return (
        <form className={styles["modal-form"]}>
            <input type="text" value={category.name} />
            <input type="text" value={model} />
            <input type="text" value={brand.name} />
            <input type="text" value={serial} />
            <input type="text" value={stock} />
        </form>
    )
}

export default UpdateStockForm