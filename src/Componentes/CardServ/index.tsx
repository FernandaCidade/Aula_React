import "./style.css"

export default function CardServ(props: any) {
    return (
        <div className="servico">
            <div className="topo_servico">
                <h3>{props.titulo}</h3>
                <p>{props.preco}</p> 
               </div> 
                <p>{props.texto}</p>
           
            <div className="techs">
               {props.techs.map((tech: string, index: number) => {
                return <span key={index}>{tech}</span>
               })}
            </div>
        </div>
    )
}