import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header>
                <h1>
                    <Link to="/">CacauShow</Link>
                    </h1>
                <nav>
                    <ul>
                        <Link to={"/cadastro-chocolate"}> Chocolates </Link>
                        <Link to={"/cadastro-cliente"}> Clientes </Link>
                        <Link to={"/gestao-estoque"}> Estoque </Link>
                        <Link to={"/cadastro-pagamento"}> Pagamento </Link>
                        <Link to={"/criacao-promocoes"}> Promoções </Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}