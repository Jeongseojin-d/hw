export default function Input({label,placeholder}){
    return(
        <>
        <div>
            <label>{label}</label>
            <input type="text" placeholder={placeholder}></input>
        </div>
        </>
    )
}