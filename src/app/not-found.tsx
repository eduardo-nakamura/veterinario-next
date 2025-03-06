// app/not-found.js
import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'space-around', height: '100vh' }}>
            <h1>404 - Página Não Encontrada</h1>
            <p>Desculpe, a página que você está procurando não existe.</p>

            <Link href="/">
                <p>Voltar para a página inicial</p>
            </Link>
        </div>
    );
}