const Input=({label, name, ...props})=>{
    return(
        <div className="input_wrapper">
            <label htmlFor={name}>{label}:</label>
            <input name={name} {...props}/>
        </div>
    
        )
}


export default Input;