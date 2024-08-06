import { useState } from "react"
import AddCategory from "./components/AddCategory"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch', 'Dragonball' ])

  const onAddCategory = () => {
    // setCategories( cat => [...cat, 'Valorant'])
    // setCategories(['Valorant', ...categories ])
    setCategories([...categories, 'Valorant'])
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory />

      <button onClick={onAddCategory}>Agregar</button>

      {/* listado de gifs */}
      <ol>
        { categories.map( category => {
            return <li key={category}>{category}</li>;
          }) 
        }
        {/* <li>ABC</li> */}
      </ol>
        {/* gif item */}
    </>
  )
}