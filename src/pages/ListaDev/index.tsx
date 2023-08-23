import "./style.css"
import Logo from "../../assets/img/logo.svg"

import Facebook from "../../assets/img/facebook.svg"
import Instagram from "../../assets/img/instagram.svg"
import Linkedin from "../../assets/img/linkedin.svg"
import CardDev from "../../Componentes/CardDev"
import { useEffect, useState } from "react"

import api from "../../utils/api";

export default function ListaDev(){

    const [devs, setDevs] = useState<any[]>([
       
    ]);

    const [skillDigitada, setSkillDigitada] = useState<string>("");

    const [listaDevsFiltrados, setListaDevsFiltrados] = useState<any[]>(devs);

   // toda vez que lista devs carregar, vai executar o que tiver  dentro de use effect
    useEffect( () => {
        document.title = "VSConnect - Lista de Devs"
        listarDesenvolvedores()
    }, [] )

    //faze uma function para dar função para a barra de busca

    function buscarPorSkill(event: any){
        event.preventDefault();

        const devsFiltadros = devs.filter((dev: any) => dev.hardSkills.includes(skillDigitada.toLocaleUpperCase()));

        if(devsFiltadros.length === 0){
            alert("Nenhum desenvolvedor foi encontrado com essa skill")
        }else{
            setListaDevsFiltrados(devsFiltadros)
        }
    }

    function retornoDevsGeral (event: any){
        if(event.target.value === ""){
            listarDesenvolvedores()
        }

        setSkillDigitada(event.target.value);
    }

    function listarDesenvolvedores(){
        api.get("users").then((resposta: any) =>{
            console.log(resposta.data)
            setDevs(resposta.data);
        })

    }


    return(
        <>
        <main id="lista-servicos">  
            <div className="container container_lista_devs">
                <div className="lista_devs_conteudo">
                    <h1>Lista de Devs</h1>
                    <hr/>
                    <form method="post" onSubmit={buscarPorSkill}>
                        <div className="wrapper_form">
                            <label htmlFor="busca">Procurar desenvolvedores</label>
                            <div className="campo-label">
                                <input type="search" name="campo-busca" id="busca" placeholder="Buscar desenvolvedores por tecnologias..." onChange={retornoDevsGeral}/>
                                <button type="submit">Buscar</button>
                            </div>
                        </div>
                    </form>
                    <div className="wrapper_lista">
                        <ul>

                            {devs.map((dev: any, index: number) => {
                                return <li>
                                    <CardDev
                                    id={dev.id}
                                    foto={dev.user_img}
                                    nome={dev.nome}
                                    email={dev.email}
                                    techs={dev.hardSkills}
                                    />
                                </li>
                            }
                            )}
                          
                
                        </ul>
                    </div>
                </div>
            </div>
        </main>
        
        <footer>
        <div className="container rodape">
            <div className="rodape_conteudo">
                <div className="rodape_conteudo_paginas">
                    <h2>Páginas</h2>
                    <ul>
                        <li>Login</li>
                        <li>Home</li>
                        <li>Listar Serviços</li>
                        <li>Cadastrar Cliente</li>
                        <li>Cadastrar Desenvolvedor</li>
                    </ul>
                </div>
                <img src={Logo} alt=""/>
                <div className="rodape_conteudo_contatos">
                    <h2>Contatos</h2>
                    <div>
                        <a href="#"><img src={Facebook} alt=""/></a>
                        <a href="#"><img src={Instagram} alt=""/></a>
                        <a href="#"><img src={Linkedin} alt=""/></a>
                    </div>
                    <a href="mailto:">contato@vsconnect.com</a>
                </div>
            </div>
            <p>todos os direitos reservados ©.</p>
        </div>
    </footer>

    </>
    )
} 