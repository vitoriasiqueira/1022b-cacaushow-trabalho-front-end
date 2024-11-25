import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroCliente (){
    const navigate = useNavigate();
    const [clienteId,setClienteId] = useState("")
    const [nome,setNome] = useState("")
    const [cpf,setCPF] = useState("")
    
    function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Tentei cadastrar Cliente");
        const cliente = {
            clienteId: clienteId,
            nome: nome,
            cpf: cpf
        }
        fetch("http://localhost:8000/cliente",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cliente)
        }).then(response => {
            if(response.status === 200){
                alert("Cliente cadastrado com sucesso")
                navigate("/")
            }
            else{
                alert("Erro ao cadastrar o Cliente")
            }
        })
    }
    function handleClienteId(event:ChangeEvent<HTMLInputElement>){
        setClienteId(event.target.value)
    }
    function handleNome(event:ChangeEvent<HTMLInputElement>){
        setNome(event.target.value)
    }
    function handleCPF(event:ChangeEvent<HTMLInputElement>){
        setCPF(event.target.value)
    }

    return(
        <>
        <h1>Tela Cadastro Cliente</h1>
        <form onSubmit={handleForm}>
            <div>
                <label htmlFor="clienteid">clienteid</label>
                <input type="text" name="clienteId" onChange={handleClienteId}/>
            </div>
            <div>
                <label htmlFor="nome">nome</label>
                <input type="text" name="nome" onChange={handleNome}/>
            </div>
            <div>
                <label htmlFor="cpf">cpf</label>
                <input type="text" name="cpf" onChange={handleCPF}/>
            </div>
            <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
        </form>
        </>
    )
}