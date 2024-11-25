import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListagemPromocoes (){
    const navigate = useNavigate();
    const [idPromocao,setIdpromocao] = useState("")
    const [titulo,setTitulo] = useState("")
    const [descricao,setDescricao] = useState("")
    const [validade,setValidade] = useState("")
    const [cupom,setCupom] = useState("")
    
    function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Listagem de Promoções");
        const promocoes = {
            idPromocao: idPromocao,
            titulo: titulo,
            descricao: descricao,
            validade: validade,
            cupom: cupom
        }
        fetch("http://localhost:8000/promocoes",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(promocoes)
        }).then(response => {
            if(response.status === 200){
                alert("Promoção válida, aproveite!")
                navigate("/")
            }
            else{
                alert("Está promoção não é mais valida!")
            }
        })
    }
    function handleIdpromocao(event:ChangeEvent<HTMLInputElement>){
        setIdpromocao(event.target.value)
    }
    function handleTitulo(event:ChangeEvent<HTMLInputElement>){
        setTitulo(event.target.value)
    }
    function handleDescricao(event:ChangeEvent<HTMLInputElement>){
        setDescricao(event.target.value)
    }
    function handleValidade(event:ChangeEvent<HTMLInputElement>){
        setValidade(event.target.value)
    }
    function handleCupom(event:ChangeEvent<HTMLInputElement>){
        setCupom(event.target.value)
    }

    return(
        <>
        <h1>Tela de Promoções</h1>
        <form onSubmit={handleForm}>
            <div>
                <label htmlFor="itemid">itemid</label>
                <input type="text" name="Itemid" onChange={handleIdpromocao}/>
            </div>
            <div>
                <label htmlFor="nomeproduto">nomeproduto</label>
                <input type="text" name="nomeproduto" onChange={handleTitulo}/>
            </div>
            <div>
                <label htmlFor="descricao">descricao</label>
                <input type="text" name="descricao" onChange={handleDescricao}/>
            </div>
            <div>
                <label htmlFor="valiade">validade</label>
                <input type="text" name="validade" onChange={handleValidade}/>
            </div>
            <div>
                <label htmlFor="cupom">cupom</label>
                <input type="text" name="cupom" onChange={handleCupom}/>
                </div>
                <div>
                    <input type="submit" value="Listar"/>
                </div>
            </form>
        </>
    )
}