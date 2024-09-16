import { IEquipment } from '../../interfaces/equipment.interface'
import UpdateStockForm from '../UpdateStockForm/UpdateStockForm'
import styles from './UpdateStockModal.module.css'

interface UpdateStockModalProps {
    isOpen: boolean
    handleClose: () => void
    equipmentData: IEquipment
}

const UpdateStockModal = ({ isOpen, handleClose, equipmentData }: UpdateStockModalProps) => {
    return (
        <div className={styles["modal-overlay"]} style={{ display: isOpen ? 'flex' : 'none'}}>
            <dialog open={isOpen} className={styles["container-modal"]}>
                <div className={styles["modal-header"]}>
                    <h3>Actualizar Stock</h3>
                    <p onClick={handleClose}>x</p>
                </div>
                <div className={styles["modal-body"]}>
                    <UpdateStockForm 
                        category={equipmentData.category}
                        model={equipmentData.model}
                        brand={equipmentData.brand}
                        serial={equipmentData.serial}
                        stock={equipmentData.stock}
                    />
                </div>
                <div className={styles["modal-buttons"]}>
                    <button onClick={handleClose}>Close</button>
                    <button onClick={handleClose}>Update</button>
                </div>
            </dialog>
        </div>
    )
}

export default UpdateStockModal