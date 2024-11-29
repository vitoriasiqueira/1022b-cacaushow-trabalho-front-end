import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type EstoqueType = {
    itemId:number,
    nomeProduto:string,
    quantidade:string,
    localizacao:string
  }
export default function ListaEstoque() {
    
    const [estoque, setEstoque] = useState<EstoqueType[]>([])
    useEffect(()=>{
        fetch("https://one022b-cacaushow-trabalho-1r6f.onrender.com/estoque")
        .then(resposta=>resposta.json())
        .then(dados=>setEstoque(dados))
      },[])
    return (
        <>
        <Link to={"/gestao-estoque"}>Link Gestão Estoque</Link>
            {estoque.map(esto => {
                return (
                    <div key={esto.itemId}className='estoque-item'>
                    <h1>{esto.nomeProduto}</h1>
                    <p>{esto.quantidade}</p>
                    <p>{esto.localizacao}</p>
                    </div>
                )
            })}
        </>
    )
}