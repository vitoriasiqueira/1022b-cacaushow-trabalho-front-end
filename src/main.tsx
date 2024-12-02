import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CadastroChocolate from './componentes/cadastrochocolate/CadastroChocolate.tsx';
import CadastroCliente from './componentes/cadastrocliente/CadastroCliente.tsx';
import CadastroPagamento from './componentes/cadastropagamento/CadastroPagamento.tsx';
import CriacaoPromocoes from './componentes/criacaopromocoes/CriacaoPromocoes.tsx';
import GestaoEstoque from './componentes/gestaoestoque/GestaoEstoque.tsx';
import Header from './componentes/header.tsx';
import Footer from './componentes/footer.tsx';
import ListaChocolate from './componentes/listagemchocolate/lista-chocolate.tsx';
import ListaCliente from './componentes/listagemcliente/lista-cliente.tsx';
import ListaEstoque from './componentes/listagemestoque/lista-estoque.tsx';
import ListaPagamento from './componentes/listagempagamento/lista-pagamento.tsx';
import ListaPromocoes from './componentes/listagempromocoes/lista-promocoes.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <><Header/> <App/> <Footer/></>,
  },
  {
    path: "/cadastro-chocolate",
    element:  <><Header/> <CadastroChocolate/> <Footer/></>,
  },
  {
    path: "/cadastro-cliente",
    element:  <><Header/> <CadastroCliente/> <Footer/></>,
  },
  {
    path: "/cadastro-pagamento",
    element: <><Header/> <CadastroPagamento/> <Footer/></>,
  },
  {
    path: "/criacao-promocoes",
    element: <><Header/> <CriacaoPromocoes/> <Footer/></>,
  },
  {
    path: "/gestao-estoque",
    element: <><Header/> <GestaoEstoque/> <Footer/></>,
  },
  {
    path: "/listagem-chocolate",
    element: <><Header/> <ListaChocolate/> <Footer/></>,
  },
  {
    path: "/listagem-cliente",
    element: <><Header/> <ListaCliente/> <Footer/></>,
  },
  {
    path: "/listagem-estoque",
    element: <><Header/> <ListaEstoque/> <Footer/></>,
  },
  {
    path: "/listagem-pagamento",
    element: <><Header/> <ListaPagamento/> <Footer/></>,
  },
  {
    path: "/listagem-promocoes",
    element: <><Header/> <ListaPromocoes/> <Footer/></>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
