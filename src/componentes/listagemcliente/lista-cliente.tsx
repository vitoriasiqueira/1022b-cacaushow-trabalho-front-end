import { useEffect, useState } from 'react'
type ClienteType = {
    clienteId:number,
    nome:string,
    cpf:string
  }
export default function ListaCliente() {
    
    const [cliente, setCliente] = useState<ClienteType[]>([])
    useEffect(()=>{
        fetch("https://one022b-cacaushow-trabalho.onrender.com/cliente")
        .then(resposta=>resposta.json())
        .then(dados=>setCliente(dados))
      },[])
    return (
        <>
            {cliente.map(clien => {
                return (
                    <div key={clien.clienteId}className='cliente-item'>
                    <h1>{clien.nome}</h1>
                    <p>{clien.cpf}</p>
                  </div>
                )
            })}
        </>
    )
}