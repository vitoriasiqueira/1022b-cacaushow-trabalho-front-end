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


const router = createBrowserRouter([
  {
    path: "/",
    element:<><Header/> <App/> <Footer/></>,
  },
  {
    path: "/cadastro-chocolate",
    element:  <CadastroChocolate/>,
  },
  {
    path: "/cadastro-cliente",
    element:  <CadastroCliente/>,
  },
  {
    path: "/cadastro-pagamento",
    element: <CadastroPagamento/>,
  },
  {
    path: "/criacao-promocoes",
    element: <CriacaoPromocoes/>,
  },
  {
    path: "/gestao-estoque",
    element: <GestaoEstoque/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
