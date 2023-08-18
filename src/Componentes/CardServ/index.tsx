import "./style.css"

export default function CardServ(props: any) {
    return (
        <>
        <div className="servico">
            <div className="topo_servico">
                <h3>{props.nome}</h3>
                <p>{props.valor}</p> 
               </div> 
                <p>{props.descricao}</p>
           
            <div className="techs">
               {props.techs.map((tech: string, index: number) => {
                return <span key={index}>{tech}</span>
               })}
            </div>
        </div>
        </>
    )
}