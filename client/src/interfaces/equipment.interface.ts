export interface IEquipment {
    id: number
    model: string
    serial: string
    stock: number
    brand: {
        name: string
    }
    category: {
        name: string
    }
}