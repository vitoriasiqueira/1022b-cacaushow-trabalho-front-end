import { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import './App.css'

type ChocolateType = {
  id:number,
  nome:string,
  descricao:string,
  preco:string,
  imagem:string
};

type ClienteType = {
  clienteId:number,
  nome:string,
  cpf:string
}

type PagamentoType = {
  Idpagamento:number,
  formapag:string,
  descricao:string,
  valor:string
}

type EstoqueType = {
  itemId:number,
  nomeProduto:string,
  quantidade:string,
  localizacao:string
}

type PromocoesType = {
  idpromocao:number,
  titulo:string,
  descricao:string,
  validade:Date,
  cupom:string
}

function App() {
  const [chocolates, setChocolates] = useState<ChocolateType[]>([])
  const [cliente, setCliente] = useState<ClienteType[]>([])
  const [pagamento, setPagamento] = useState<PagamentoType[]>([])
  const [estoque, setEstoque] = useState<EstoqueType[]>([])
  const [promocoes, setPromocoes] = useState<PromocoesType[]>([])
  //useEffect(O Que fazer, Quando fazer)
  useEffect(()=>{
    fetch("https://one022b-cacaushow-trabalho.onrender.com/chocolates")
    .then(resposta=>resposta.json())
    .then(dados=>setChocolates(dados))
  },[]); 

  useEffect(()=>{
    fetch("https://one022b-cacaushow-trabalho.onrender.com/cliente")
    .then(resposta=>resposta.json())
    .then(dados=>setCliente(dados))
  },[])

  useEffect(()=>{
    fetch("https://one022b-cacaushow-trabalho.onrender.com/pagamento")
    .then(resposta=>resposta.json())
    .then(dados=>setPagamento(dados))
  },[])

  useEffect(()=>{
    fetch("https://one022b-cacaushow-trabalho.onrender.com/estoque")
    .then(resposta=>resposta.json())
    .then(dados=>setEstoque(dados))
  },[])

  useEffect(()=>{
    fetch("https://one022b-cacaushow-trabalho.onrender.com/promocoes")
    .then(resposta=>resposta.json())
    .then(dados=>setPromocoes(dados))
  },[])

  return (
    <>
    <Link to={"/cadastro-chocolate"}>Link Cadastro Chocolate</Link>
    <div className="coitaner-chocolates">
    {chocolates.map(choco=>{
      return(
        <div key={choco.id}className='chocolate-item'>
          <h1>{choco.nome}</h1>
          <img src={choco.imagem} alt="Imagem do chocolate" />
          <p>{choco.preco}</p>
          <p>{choco.descricao}</p>
      </div>
     ) 
    })}

    <Link to={"/cadastro-cliente"}>Link Cadastro Cliente</Link>
    </div>
     <div className='container-cliente'>
      {cliente.map(clien=>{
        return(
          <div key={clien.clienteId}className='cliente-item'>
            <h1>{clien.nome}</h1>
            <p>{clien.cpf}</p>
          </div>
        )
      })}

    <Link to={"/controle-estoque"}>Link Controle Estoque</Link>
     </div>
     <div className='container-pagamento'>
      {pagamento.map(paga=>{
        return(
          <div key={paga.Idpagamento}className='pagamento-item'>
            <h1>{paga.formapag}</h1>
            <p>{paga.descricao}</p>
            <p>{paga.valor}</p>
          </div>
        )
      })}

      <Link to={"/registro-pagamento"}>Link Registrar Pagamentos</Link>
       </div>
       <div className='container-estoque'>
      {estoque.map(esto=>{
        return(
          <div key={esto.itemId}className='estoque-item'>
            <h1>{esto.nomeProduto}</h1>
            <p>{esto.quantidade}</p>
            <p>{esto.localizacao}</p>
          </div>
        )
      })}

      <Link to={"/listagem-promocoes"}>Link Listar Promoções</Link>
       </div>
       <div className='container-promocoes'>
      {promocoes.map(promo=>{
        return(
          <div key={promo.idpromocao}className='promocoes-item'>
            <h1>{promo.titulo}</h1>
            <p>{promo.descricao}</p>
            {/* <p>{promo.validade.getDate()}</p> */}
            <p>{promo.cupom}</p>
          </div>
        )
      })}
       </div>

    </>
  )
}

export default App