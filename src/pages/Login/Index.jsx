import { useState } from "react";
import computerIMG from "../../assets/computer.svg"
import { Link } from "react-router-dom";
import { LayoutComponentes } from "../../components/LayoutComponents/Index";



export const Login = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();

    alert("Enviando os dados: " + email + " - " + password);
        
}
  
    return (
            <LayoutComponentes>  
                <form className="login-form" onSubmit={handleSubmit}>
                    <span className="login-form-title">
                        <img src={computerIMG} alt="Computer Icon" />
                    </span>

                    <span className="login-form-title"> Entrar </span>
                    


                    <div className="wrap-input">
                    <input
                        className={email !== "" ? "has-val input" : "input"}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        onInvalid={(e) => e.target.setCustomValidity("E-mail inválido! Use o formato exemplo@dominio.com")}
                        onInput={(e) => e.target.setCustomValidity("")} 
                    />
                    <span className="focus-input" data-placeholder="Email"></span>
                    </div>

                    <div className="wrap-input">
                    <input
                        className={password !== "" ? "has-val input" : "input"}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Password"></span>
                    </div>

                    <div className="container-login-form-btn">
                    <button className="login-form-btn">Login</button>
                    </div>

                    <div className="text-center">
                    <span className="txt1">Não possui conta? </span>
                    <Link className="txt2" to="/register">
                        Criar conta
                    </Link>
                    </div>
                </form>
            </LayoutComponentes> 
    )
}