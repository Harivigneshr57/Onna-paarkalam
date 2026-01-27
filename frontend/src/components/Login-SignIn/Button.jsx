export default function Button({children,className,onClick,id}){
    return(
        <button className={className} onClick={onClick} id={id}>{children}</button>
    )
}