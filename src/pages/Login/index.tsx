//estilização

import { useEffect, useState } from "react";
import api from "../../utils/api";
import "./style.css";



function Login() {

    const [email,setEmail] = useState<string>("");
    const [senha,setSenha] = useState<string>("");

    function fazerLogin(event: any){
        event.preventDefault();
        console.log(email,senha)

        const usuario: object = {
            email: email,
            password: senha
        }
        api.post("login", usuario).then((response) => {
            console.log(response)
        })


    }


    return (
        <main id="main_login">
            <div className="container container_login">
                <div className="login_conteudo">
                    <h1>Login</h1>
                    <hr />
                    <form onSubmit={fazerLogin} className="login_formulario" method="POST">
                        <div className="login_box_input">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="Digite aqui seu e-mail:"
                                required
                            />
                        </div>
                        <div className="login_box_input">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                onChange={(event) => setSenha(event.target.value)}
                                placeholder="Digite aqui sua senha:"
                                required
                            />
                        </div>
                        <button className="login_botao" type="submit">Logar</button>
                    </form>
                </div>
            </div>
        </main>

    );
}

export default Login;