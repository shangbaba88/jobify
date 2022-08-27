const FormRow = ( {type,name,value,handleChange,labelText}) => {
  return (
    <div className='form-row'>
          <label htmlFor={name} className='form-label'>
            {labelText||name}
            </label>
          <input 
          value={value}
          className='form-input'
          name={name}
          type={type} 
          onChange={handleChange}></input>
         </div>
  )
}

export default FormRow