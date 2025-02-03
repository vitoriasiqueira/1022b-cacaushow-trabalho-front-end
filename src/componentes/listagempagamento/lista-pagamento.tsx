import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type PagamentoType = {
    idpagamento:number,
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
      function handleExcluir(idpagamento:number){
        fetch(`https://one022b-cacaushow-trabalho.onrender.com/pagamento/${idpagamento}`,{
          method:"DELETE"
        })
        .then(resposta=>{
          if(resposta.status==200){
            alert("Excluído com sucesso")
            window.location.reload()
          }
          else{
            alert("Erro ao excluir")
          }
        })
      }
    return (
        <>
         <div className='container-link'>
         <Link to={"/cadastro-pagamento"} className="link-bonitao">Pagamentos</Link>
         </div>
            {pagamento.map(paga => {
                return (
                    <div key={paga.idpagamento}className='cliente-item'>
                    <h1>{paga.formapag}</h1>
                    <p>{paga.descricao}</p>
                    <p>{paga.valor}</p>
                    <button onClick={()=>{handleExcluir(paga.idpagamento)}}>Excluir</button>
              <Link to={`/alterar-pagamento/${paga.idpagamento}`}>Alterar</Link>
                  </div>
                )
            })}
        </>
    )
}