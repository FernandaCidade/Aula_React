//estilização
import "./style.css";

//Hook
import { useEffect, useState } from "react";
import api from "../../utils/api";



function CadastroServico() {

    const [techs, setTechs] = useState<string[]>(
        [
            "HTML",
            "CSS",
            "JAVASCRIPT"
        ]
    );
    const [skillsSelecionadas, setSkillsSelecionadas] = useState<string[]>([]);
    const [select, setSelect] = useState<string>("");

    const [titulo, setTitulo] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [proposta, setProposta] = useState<string>("");

    function CadastrarServico(event:any){
        event.preventDeFault();
        const formData = new FormData();

        formData.append("titulo", titulo)
        formData.append("descricao", descricao)
        formData.append("proposta", proposta)
        formData.append("hardSkills", JSON.stringify(skillsSelecionadas))

        
        api.post("servicos", formData).then((response) =>{ 
            console.log(response)
            alert("Usuário criado com sucesso! >.< ")

            //Navegação para login 
        } ).catch((error) => {
            console.log(error)
        })
    }

    function adicionarSkill() {
        //verifica o valor do state select
        if (select === "") {
            //se for igual a string vazia, exibe uma mensagem
            alert("Selecione uma skill para adicionar");
        } else {
            //se não, verifica se no state skillsSelecionadas existe a skill que o usuario selecionou
            if (skillsSelecionadas.includes(select)) {
                //se existir, exibe uma mensagem
                alert("Essa skill já foi selecionada");
            }
            else {
                //se não existir, a variavel novaListaSkillsSelecionadas cria uma cópia do valor do state skillsSelecionadas
                let novaListaSkillsSelecionadas = [...skillsSelecionadas];

                //E adiciona a skill, que foi selecionada pelo usuário
                novaListaSkillsSelecionadas.push(select);

                //Atualiza o valor do state skillsSelecionadas
                setSkillsSelecionadas(novaListaSkillsSelecionadas);
            }
        }
    }
   


    useEffect(() => {
        //Inserindo o título da guia de endereço da página atual.
        document.title = "VSConnect - Lista de Serviços";
    }, []);

    return (
        <main className="main_cad_servico">
            <div className="container container_cad_serv">
                <div className="cad_serv_conteudo">
                    <h1>Cadastro de Serviço</h1>
                    <hr />
                    <form onSubmit={CadastrarServico}className="cad_serv_formulario" action="">
                        <div className="cad_serv_box_input">
                            <label htmlFor="titulo">Titulo do serviço:</label>
                            <input
                                type="text"
                                id="titulo"
                                onChange={(event) =>{setTitulo(event.target.value)}}
                                placeholder="Ex: E-commerce para pizzaria"
                            />
                        </div>
                        <div className="cad_serv_box_input">
                            <label htmlFor="descricao">Descrição do serviço:</label>
                            <textarea
                                name=""
                                id="descricao"
                                onChange={(event) =>{setDescricao(event.target.value)}}
                                placeholder="Digite aqui a descrição resumida do que você precisa:"
                            ></textarea>
                        </div>
                        <div className="cad_serv_box_input">
                            <label htmlFor="proposta">Proposta:</label>
                            <input
                                type="text"
                                id="proposta"
                                onChange={(event) =>{setProposta(event.target.value)}}
                                // onKeyUp={ }
                                maxLength={17}
                                placeholder="Digite o valor que deseja pagar:"
                            />
                        </div>

                        <span>Tecnologias Desejadas</span>
                        <hr />
                        <div className="cad_serv_box_skills">
                            <span>Selecione uma Skill para adicionar</span>
                            <div className="cad_linha_select">
                                            <select
                                                name=""
                                                id="cad_select_skill"
                                                onChange={(e) => setSelect(e.target.value)}>
                                            
                                                <option selected disabled value="">Selecione</option>
                                                {
                                                    techs.map((tech: any, index: number) => {
                                                        return <option key={index} value={tech}>{tech}</option>
                                                    })
                                                }
                                            </select>
                                            <button
                                                type="button"
                                                id="cad_btn_inserir"
                                                onClick={adicionarSkill}>
                                                Inserir
                                            </button>
                                        </div>
                            <div id="cad_lista_skills">

                            </div>
                        </div>
                        <button type="submit" className="cad_botao">Cadastrar</button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default CadastroServico;