import React, { useState, useEffect } from "react"
import NavBar from "../../components/NavBar/NavBar"
import styles from "./Brands.module.css"

interface IBrand {
    name: string
}

const Brands = () => {

    const [brands, setBrands] = useState<Array<IBrand>>([])


    useEffect(() => {
        fetch("http://localhost:3000/api/brand")
            .then((res) => res.json())
            .then((data) => setBrands(data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <NavBar>
            <div className={styles["container"]}>
                <h2>Gestionar Categorias</h2>
                <form className={styles["brand-form"]} >
                    <input 
                        type="text" 
                        placeholder="Nueva Marca"
                        
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