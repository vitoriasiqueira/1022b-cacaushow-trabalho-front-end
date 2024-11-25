import { FormEvent, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function RegistroPagamento(){
    const navigate = useNavigate();
    const [idpagamento,setIdpagamento] = useState("")
    const [formapag,setFormapag] = useState("")
    const [descricao,setDescricao] = useState("")
    const [valor,setValor] = useState("")

    function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Tentei registrar pagamentos");
        const pagamento = {
            idpagamento: idpagamento,
            formapag: formapag,
            descricao: descricao,
            valor: valor
        }
        fetch("http://localhost:8000/pagamento",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pagamento)
        }).then(response => {
            if(response.status === 200){
                alert("Pagamento registrado com sucesso")
                navigate("/")
            }
            else{
                alert("Erro ao registrar pagamento")
            }
        })
    }
    function handleIdpagamento(event:ChangeEvent<HTMLInputElement>){
        setIdpagamento(event.target.value)
    }
    function handleFormapag(event:ChangeEvent<HTMLInputElement>){
        setFormapag(event.target.value)
    }
    function handleDescricao(event:ChangeEvent<HTMLInputElement>){
        setDescricao(event.target.value)
    }
    function handleValor(event:ChangeEvent<HTMLInputElement>){
        setValor(event.target.value)
    }
    return(
        <>
            <h1>Tela Registro Pagamento</h1>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="idpagamento">idpagamento</label>
                    <input type="text" name="Idpagamento" onChange={handleIdpagamento} />
                </div>
                <div>
                    <label htmlFor="formapag">formapag</label>
                    <input type="text" name="formapag" onChange={handleFormapag} />
                </div>
                <div>
                    <label htmlFor="descricao">descricao</label>
                    <input type="text" name="descricao" onChange={handleDescricao} />
                </div>
                <div>
                <label htmlFor="valor">valor</label>
                <input type="text" name="valor" onChange={handleValor} />
                </div>
                <div>
                    <input type="submit" value="Registrar"/>
                </div>
            </form>
        </>
    )
}