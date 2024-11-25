import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ControleEstoque (){
    const navigate = useNavigate();
    const [itemId,setItemid] = useState("")
    const [nomeProduto,setNomeProduto] = useState("")
    const [quantidade,setQuantidade] = useState("")
    const [localizacao,setLocalizacao] = useState("")
    
    function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Tentei atualizar Estoque");
        const estoque = {
            itemId: itemId,
            nomeProduto: nomeProduto,
            quatidade: quantidade,
            localizacao: localizacao
        }
        fetch("http://localhost:8000/estoque",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(estoque)
        }).then(response => {
            if(response.status === 200){
                alert("Estoque atualizado com sucesso")
                navigate("/")
            }
            else{
                alert("Erro ao atualizar o Estoque")
            }
        })
    }
    function handleItemid(event:ChangeEvent<HTMLInputElement>){
        setItemid(event.target.value)
    }
    function handleNomeProduto(event:ChangeEvent<HTMLInputElement>){
        setNomeProduto(event.target.value)
    }
    function handleQuantidade(event:ChangeEvent<HTMLInputElement>){
        setQuantidade(event.target.value)
    }
    function handleLocalizacao(event:ChangeEvent<HTMLInputElement>){
        setLocalizacao(event.target.value)
    }

    return(
        <>
        <h1>Tela Atualizar Estoque</h1>
        <form onSubmit={handleForm}>
            <div>
                <label htmlFor="itemid">itemid</label>
                <input type="text" name="Itemid" onChange={handleItemid}/>
            </div>
            <div>
                <label htmlFor="nomeproduto">nomeproduto</label>
                <input type="text" name="id" onChange={handleNomeProduto}/>
            </div>
            <div>
                <label htmlFor="quantidade">descricao</label>
                <input type="text" name="quantidade" onChange={handleQuantidade}/>
            </div>
            <div>
                <label htmlFor="localizacao">localizacao</label>
                <input type="text" name="localizacao" onChange={handleLocalizacao}/>
                </div>
                <div>
                    <input type="submit" value="Atualizar"/>
                </div>
            </form>
        </>
    )
}