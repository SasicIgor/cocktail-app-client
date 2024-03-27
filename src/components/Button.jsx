const Button=({type, label})=>{

    return(<div className="input_wrapper">
        <button type={type}>{label}</button>
        </div>
    )
}
export default Button;