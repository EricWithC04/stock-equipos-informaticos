import React, { useState, useEffect } from "react"
import NavBar from "../../components/NavBar/NavBar"
import styles from "./Brands.module.css"

interface IBrand {
    name: string
}

const Brands = () => {

    const [brands, setBrands] = useState<Array<IBrand>>([])

    const [newBrand, setNewBrand] = useState<string>("")

    useEffect(() => {
        fetch("http://localhost:3000/api/brand")
            .then((res) => res.json())
            .then((data) => setBrands(data))
            .catch((err) => console.log(err))
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewBrand(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        fetch("http://localhost:3000/api/brand", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: newBrand })
        })
            .then((res) => res.json())
            .then((data) => {
                setBrands([...brands, data])
                setNewBrand("")
            })
            .catch((err) => {
                console.log(err)
        })
    }

    return (
        <NavBar>
            <div className={styles["container"]}>
                <h2>Gestionar Categorias</h2>
                <form className={styles["brand-form"]} onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Nueva Marca"
                        value={newBrand}
                        onChange={handleChange}
                    />
                    <button type="submit">Agregar Marca</button>
                </form>
                <div className={styles["brands-container"]}>
                    {
                        brands.map((brand) => {
                            return (
                                <h3>
                                    {brand.name}
                                </h3>
                            )
                        })
                    }
                </div>
            </div>
        </NavBar>
    )
}

export default Brands