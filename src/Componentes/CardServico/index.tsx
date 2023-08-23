import "./style.css"
import { Link } from "react-router-dom"

export default function ListaServicos(props: any) {
    return (
       <>
            <div className="servico">
                <div className="topo_servico">
                <Link to={"/idServico/" + props.id}> {props.id} </Link>
            </div>
                <div className="techs">
                    {props.techs.map((tech: string, index: number) => {
                        return <span key={index}>{tech}</span>
                    })}
                </div>
            </div>
        </>
    )
}