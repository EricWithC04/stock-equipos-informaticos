import React, { createContext, useContext, useState } from "react";
import { IEquipment } from "../interfaces/equipment.interface";

interface UpdateStockContextProps {
    selectedEquipment?: IEquipment
    selectEquipment?: (equip: IEquipment) => void
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

    return (
        <UpdateStockContext.Provider value={{ selectedEquipment, selectEquipment }}>
            {children}
        </UpdateStockContext.Provider>
    )
}