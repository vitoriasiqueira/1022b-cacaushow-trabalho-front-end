import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type PagamentoType = {
    Idpagamento:number,
    formapag:string,
    descricao:string,
    valor:string
  }
 export default function ListaPagamento() {
    const [pagamento, setPagamento] = useState<PagamentoType[]>([])
    useEffect(()=>{
        fetch("https://one022b-cacaushow-trabalho.onrender.com/pagamento")
        .then(resposta=>resposta.json())
        .then(dados=>setPagamento(dados))
      },[])
      return (
        <>
         <Link to={"/cadastro-pagamento"}>Pagamento</Link>
            {pagamento.map(paga => {
                return (
                    <div key={paga.Idpagamento}className='pagamento-item'>
                    <h1>{paga.formapag}</h1>
                    <p>{paga.descricao}</p>
                    <p>{paga.valor}</p>
                  </div>
                )
            })}
        </>
    )
}