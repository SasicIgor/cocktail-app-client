import "./../styles/button.scss"

const Button=({type, label, handleClick})=>{

    return(<div className="button_wrapper">
        <button type={type} onClick={handleClick}>{label}</button>
        </div>
    )
}
export default Button;