import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type PromocoesType = {
    idpromocao:number,
    titulo:string,
    descricao:string,
    validade:Date,
    cupom:string
  }
export default function ListaPromocoes() {
    
    const [promocoes, setPromocoes] = useState<PromocoesType[]>([])
    useEffect(()=>{
        fetch("https://one022b-cacaushow-trabalho-1r6f.onrender.com/promocoes")
        .then(resposta=>resposta.json())
        .then(dados=>setPromocoes(dados))
      },[])
    return (
        <>
        <Link to={"/criacao-promocoes"}>Link Criação Promoções</Link>
            {promocoes.map(promo => {
                return (
                    <div key={promo.idpromocao}className='promocoes-item'>
                    <h1>{promo.titulo}</h1>
                    <p>{promo.descricao}</p>
                    {/* <p>{promo.validade.getDate()}</p> */}
                    <p>{promo.cupom}</p>
                  </div>
                )
            })}
        </>
    )
}