import { useState, useEffect } from "react"
import NavBar from "../../components/NavBar/NavBar"
import styles from "./Categories.module.css"

interface ICategory {
    name: string
}

const Categories = () => {

    const [categories, setCategories] = useState<Array<ICategory>>([])

    useEffect(() => {
        fetch("http://localhost:3000/api/category")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <NavBar>
            <div className={styles["container"]}>
                <h2>Gestionar Categorias</h2>
                <form className={styles["category-form"]}>
                    <input type="text" placeholder="Nueva Categoría"/>
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