import React, {useState} from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () => {

    const [categories, setcategories] = useState(["Naruto"]);

    /*const handleAdd = () => {
        setcategories(["Jojos", ...categories])
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory 
                setCategories={setcategories} 
            />

            <hr/>
            <div>
                {
                    categories.map((category) => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
                
            </div>
        </>
    )
}

export default GifExpertApp
