import UpdateStockForm from '../UpdateStockForm/UpdateStockForm'
import { useUpdateStockContext } from '../../context/UpdateStockContext'
import styles from './UpdateStockModal.module.css'

interface UpdateStockModalProps {
    isOpen: boolean
    handleClose: () => void
}

const UpdateStockModal = ({ isOpen, handleClose }: UpdateStockModalProps) => {

    const { handleUpdateStock } = useUpdateStockContext()

    return (
        <div className={styles["modal-overlay"]} style={{ display: isOpen ? 'flex' : 'none'}}>
            <dialog open={isOpen} className={styles["container-modal"]}>
                <div className={styles["modal-header"]}>
                    <h3>Actualizar Stock</h3>
                    <p onClick={handleClose}>x</p>
                </div>
                <div className={styles["modal-body"]}>
                    <UpdateStockForm />
                </div>
                <div className={styles["modal-buttons"]}>
                    <button onClick={handleClose}>Close</button>
                    <button onClick={handleUpdateStock}>Update</button>
                </div>
            </dialog>
        </div>
    )
}

export default UpdateStockModal