import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import NavBar from "../../components/NavBar/NavBar"
import styles from "./NewEquipments.module.css"

interface IBrand {
    id: number
    name: string
}

interface ICategory {
    id: number
    name: string
}

interface INewEquipment {
    model: string
    serial: string
    stock: number
    brandId: number
    categoryId: number
}

const NewEquipments = () => {

    const navigate = useNavigate()

    const [brands, setBrands] = useState<Array<IBrand>>([])
    const [categories, setCategories] = useState<Array<ICategory>>([])
    const [fetchError, setFetchError] = useState<{ message: string } | null>(null)
    const [newEquipment, setNewEquipment] = useState<INewEquipment>({
        model: "",
        serial: "",
        stock: 0,
        brandId: 0,
        categoryId: 0
    })

    useEffect(() => {
        fetch("http://localhost:3000/api/brand")
            .then((res) => {
                if (res.status === 404) {
                    setFetchError({ message: "Aún no hay marcas registradas" })
                    return []
                } else return res.json()
            })
            .then((data) => setBrands(data))
            .catch((err) => console.log(err))
        
        fetch("http://localhost:3000/api/category")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((err) => console.log(err))
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewEquipment({
            ...newEquipment,
            [e.target.name]: e.target.value
        })
    }

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setNewEquipment({
            ...newEquipment,
            [e.target.name]: parseInt(e.target.value)
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        fetch("http://localhost:3000/api/equipment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEquipment)
        })
            .then((_res) => navigate("/"))
            .catch((err) => console.log(err))
        
        setNewEquipment({
            model: "",
            serial: "",
            stock: 0,
            brandId: 0,
            categoryId: 0
        })
    }

    return (
        <NavBar>
            {
                brands.length && categories.length ? (
                    <div className={styles["container"]}>
                        <h2>Agregar Nuevo Equipo</h2>
                        <form className={styles["equipment-form"]} onSubmit={handleSubmit}>
                            <select defaultValue={""} name="categoryId" onChange={handleSelect}>
                                <option value="">Tipo</option>
                                {
                                    categories.map((category) => (
                                        <option 
                                            key={category.id} 
                                            value={category.id}
                                        >
                                            {category.name}
                                        </option>
                                    ))
                                }
                            </select>
                            <select defaultValue={""} name="brandId" onChange={handleSelect}>
                                <option value="">Marca</option>
                                {
                                    brands.map((brand) => (
                                        <option
                                            key={brand.id}
                                            value={brand.id}
                                        >
                                            {brand.name}
                                        </option>
                                    ))
                                }
                            </select>
                            <input 
                                type="text" 
                                placeholder="Modelo"
                                name="model"
                                onChange={handleChange}
                            />
                            <input 
                                type="text" 
                                placeholder="Número de Serie"
                                name="serial"
                                onChange={handleChange}
                            />
                            <input 
                                type="number" 
                                placeholder="Cantidad"
                                name="stock"
                                onChange={handleChange}
                            />
                            <button type="submit">Agregar</button>
                        </form>
                    </div>
                ) : <h1>{fetchError ? `Error: ${fetchError.message}` : "Cargando..."}</h1>
            }
        </NavBar>
    )
}

export default NewEquipments