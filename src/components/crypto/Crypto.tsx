import './Crypto.css'; // Импортируем стили

// Интерфейс для криптовалюты
interface Cryptocurrency {
    id: number;
    name: string;
    price: string;
}

// Пропсы для компонента
interface CryptoListProps {
    cryptocurrencies: Cryptocurrency[];
}

export const CryptoList: React.FC<CryptoListProps> = ({ cryptocurrencies }) => {
    return (
        <div className="crypto-list">
            {cryptocurrencies.map((crypto) => (
                <div key={crypto.id} className="crypto-item">
                    <h2>{crypto.name}</h2>
                    <p>Цена: {crypto.price} USD</p>
                </div>
            ))}
        </div>
    );
};

