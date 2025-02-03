  import { useEffect, useState } from 'react'
  import { Link } from 'react-router-dom';

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
    function handleExcluir(id:number){
      fetch(`https://one022b-cacaushow-trabalho.onrender.com/chocolates/${id}`,{
        method:"DELETE"
      })
    .then(resposta=>{
      if(resposta.status==200){
        alert("Excluido com sucesso")
        window.location.reload()
      }
      else{
        alert("Erro ao excluir")
  }
    })
  }
  
    return (
      <>
          <main className="coitaner-chocolates">
      {chocolates.map(choco=>{
        return(
          <div key={choco.id}className='chocolate-item'>
            <h1>{choco.nome}</h1>
            <img src={choco.imagem} alt="Imagem do chocolate" />
            <p>{choco.preco}</p>
            <p>{choco.descricao}</p>
            <button onClick={()=>{handleExcluir(choco.id)}}>Excluir</button>
            <Link to={`/alterar-chocolate/${choco.id}`}>Alterar</Link>
        </div>
      ) 
      })}
      </main>

      </>
    )
  }

  export default App