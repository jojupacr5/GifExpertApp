import { useState } from "react"
import { GifGrid, AddCategory } from "./components"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ])

  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return; // no es muy estricto pero funciona, ejemplo si se agrega el mismo valor pero en minuscula igual lo agrega.

    // console.log(newCategory)
    // setCategories( cat => [...cat, 'Valorant'])
    setCategories([newCategory, ...categories ])
    // setCategories([...categories, 'Valorant'])
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory 
        // setCategories={setCategories} 
        onNewCategory={ value => onAddCategory(value) }
      />

      {/* listado de gifs */}
      
      { 
        categories.map( category => 
          (
            <GifGrid key={category} category={category} />
          )) 
      }

    </>
  )
}