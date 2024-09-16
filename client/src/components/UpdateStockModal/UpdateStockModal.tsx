import { IEquipment } from '../../interfaces/equipment.interface'
import styles from './UpdateStockModal.module.css'

interface UpdateStockModalProps {
    isOpen: boolean
    handleClose: () => void
    equipmentData: IEquipment
}

const UpdateStockModal = ({ isOpen, handleClose, equipmentData }: UpdateStockModalProps) => {
    return (
        <dialog open={isOpen} className={styles["container-modal"]}>
            <div className={styles["modal-header"]}>
                <h3>Actualizar Stock</h3>
                <p onClick={handleClose}>x</p>
            </div>
            <div className={styles["modal-body"]}>
                <p>{equipmentData.category.name}</p>
                <p>{equipmentData.model}</p>
                <p>{equipmentData.brand.name}</p>
                <p>{equipmentData.serial}</p>
                <p>{equipmentData.stock}</p>
            </div>
            <div className={styles["modal-buttons"]}>
                <button onClick={handleClose}>Close</button>
                <button onClick={handleClose}>Update</button>
            </div>
        </dialog>
    )
}

export default UpdateStockModal