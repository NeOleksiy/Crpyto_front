
// import { Button } from '../components/button';
import Header from '../../components/Header';
import {CryptoList} from '../../components/crypto/Crypto';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';



const cryptocurrencies = [
    { id: 1, name: 'Bitcoin', price: '50000' },
    { id: 2, name: 'Ethereum', price: '4000' },
];

function Home() {
const navigate = useNavigate()
    return (
        <div className={styles.container}>
            <Header 
                onClick={() => navigate("/about")} 
            />
            <h1>Crypto-mania!!!</h1>

            <h2>Список криптовалют</h2>
            <CryptoList cryptocurrencies={cryptocurrencies} />
        </div>
    );
}

export default Home;
