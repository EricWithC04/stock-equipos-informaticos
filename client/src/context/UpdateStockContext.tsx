import React, { createContext, useContext, useState } from "react";
import { IEquipment } from "../interfaces/equipment.interface";

interface UpdateStockContextProps {
    selectedEquipment?: IEquipment
    selectEquipment?: (equip: IEquipment) => void
    handleUpdateStock?: () => void
    handleChangeEquipment?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UpdateStockContext = createContext<UpdateStockContextProps>({});

export const useUpdateStockContext = () => useContext(UpdateStockContext)

export const UpdateStockProvider = ({ children }: { children: React.ReactNode }) => {

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
    });

    const selectEquipment = (equip: IEquipment) => {
        setSelectedEquipment(equip)
    }

    const handleChangeEquipment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedEquipment({
            ...selectedEquipment,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdateStock = () => {
        fetch(`http://localhost:3000/api/equipment/${selectedEquipment!.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(selectedEquipment)
        })
            .then(res => res.json())
            .then(_data => window.location.reload())
            .catch(err => console.log(err))
    }

    return (
        <UpdateStockContext.Provider value={{ 
            selectedEquipment, 
            selectEquipment, 
            handleUpdateStock,
            handleChangeEquipment
        }}>
            {children}
        </UpdateStockContext.Provider>
    )
}