import React, { useState, useEffect } from "react"
import NavBar from "../../components/NavBar/NavBar"
import styles from "./Categories.module.css"

interface ICategory {
    name: string
}

const Categories = () => {

    const [categories, setCategories] = useState<Array<ICategory>>([])

    const [newCategory, setNewCategory] = useState<string>("")

    useEffect(() => {
        fetch("http://localhost:3000/api/category")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((err) => console.log(err))
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCategory(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        fetch("http://localhost:3000/api/category", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: newCategory })
        })
            .then((res) => res.json())
            .then((data) => {
                setCategories([...categories, data])
                setNewCategory("")
            })
            .catch((err) => {
                console.log(err)
        })
    }

    return (
        <NavBar>
            <div className={styles["container"]}>
                <h2>Gestionar Categorias</h2>
                <form className={styles["category-form"]} onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Nueva Categoría"
                        value={newCategory}
                        onChange={handleChange}
                    />
                    <button type="submit">Agregar Categoría</button>
                </form>
                <div className={styles["categories-container"]}>
                    {
                        categories.map((category) => {
                            return (
                                <h3>
                                    {category.name}
                                </h3>
                            )
                        })
                    }
                </div>
            </div>
        </NavBar>
    )
}

export default Categories