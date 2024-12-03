import { useEffect, useState } from 'react'
import './App.css'

type ChocolateType = {
  id:number,
  nome:string,
  descricao:string,
  preco:string,
  imagem:string
};

function App() {
  const [chocolates, setChocolates] = useState<ChocolateType[]>([])

  //useEffect(O Que fazer, Quando fazer)
  useEffect(()=>{
    fetch("https://one022b-cacaushow-trabalho.onrender.com/chocolates")
    .then(resposta=>resposta.json())
    .then(dados=>setChocolates(dados))
  },[]); 

  return (
    <>
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

    </div>


    </>
  )
}

export default App