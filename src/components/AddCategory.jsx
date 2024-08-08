import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    // console.log(target.value)
    setInputValue(target.value)
  }
  
  const onSubmit = (event) => {
    // console.log(event)
    event.preventDefault(); // previene que se refresque el navegador al usar el submit
    // console.log(inputValue)

    if(inputValue.trim().length <= 1) return; // verifica que no se mande menos de 2 caracteres al arreglo

    // setCategories(categories => [inputValue, ...categories])
    onNewCategory(inputValue.trim()) // envia el input value como parametro a la funcion que viene del componente padre
    setInputValue('') // limpia el input

  }

  return (
    <form onSubmit={ onSubmit } aria-label="form">
      <input 
        type="text" 
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={ onInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}