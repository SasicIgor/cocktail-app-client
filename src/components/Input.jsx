const Input=({label, id, ...props})=>{
    return(
        <div className="input_field">
            <label htmlFor={id}>{label}:</label>
            <input id={id} {...props}/>
        </div>
    
        )
}


export default Input;