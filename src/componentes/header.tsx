import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header>
                <h1>
                    <Link to="/">CacauShow ★</Link>
                </h1>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/cadastro-chocolate">Chocolates</Link></li>
                        <li><Link to="/lista-cliente">Clientes</Link></li>
                        <li><Link to="/lista-estoque">Estoque</Link></li>
                        <li><Link to="/lista-pagamento">Pagamento</Link></li>
                        <li><Link to="/lista-promocoes">Promoções</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
