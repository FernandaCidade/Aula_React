import "./style.css"
import { useEffect, useState } from "react"
import CardServ from "../../Componentes/CardServ";

import api from "../../utils/api";
// import Servicos from "../Servicos";

export default function ListaServicos() {

    const [servs, setSevrs] = useState<any[]>([

       
    ]);

    const [skillDigitada, setSkillDigitada] = useState<string>("");

    const [servicos, setServicos] = useState<any[]>(servs);

    useEffect( () => {
        document.title = "VSConnect - Lista de Serviços"
        listarServicos()
    }, [] )

    function buscarSkill(event: any){
        event.preventDefault();

        const servFiltadros = servs.filter((serv: any) => serv.techs.includes(skillDigitada.toLocaleUpperCase()));

        if(servFiltadros.length === 0){
            alert("Nenhum serviço foi encontrado com esta skill")
           
        }else{
            setServicos(servFiltadros);
        }

    }

    function retornoServGeral (event: any){
        if(event.target.value === ""){
            listarServicos();
        }

        setSkillDigitada(event.target.value);
    }

    function listarServicos(){
        api.get("servicos").then((resposta: any) => {
            setServicos(resposta.data);

        }).catch((error: any) => console.log(error))
    }


    return (
        <main id="lista-servicos">
            <div className="container container_lista_servicos">
                <div className="lista_servicos_conteudo">
                    <h1>Lista de Serviços</h1>
                    <hr/>
                        <form method="post" onSubmit={buscarSkill}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar serviços</label>
                                <div className="campo-label">
                                    <input type="search" name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..." onChange={retornoServGeral}/>
                                        <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                            {servicos.map((serv: any, index: number) => {
                                return <li key={index}>
                                    <CardServ
                                    nome={serv.nome}
                                    valor={serv.valor}
                                    descricao={serv.descricao}
                                    techs={serv.techs}
                                    />
                                </li>
                            }
                            )}
                               
                            </ul>
                        </div>
                </div>
            </div>
        </main>
    )
}

