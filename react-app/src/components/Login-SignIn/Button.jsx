export default function Button({children,className,onClick,id,icon}){
    return(
        <button className={className} onClick={onClick} id={id}>{icon} {children}</button>
    )
}