import React from 'react';



interface HeaderProps {
    onClick: () => void;

}


const Header:  React.FC<HeaderProps> = ({onClick}) => {
    return (
        <header style={headerStyle}>
            <div style={buttonContainerStyle}>
                <button onClick={onClick} style={buttonStyle}>Главная</button>
                <button style={buttonStyle}>Новости</button>
                <button style={buttonStyle}>О нас</button>
            </div>
        </header>
    );
};

const headerStyle: React.CSSProperties = {
    backgroundColor: '#333', 
    padding: '30px 0',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',  
    top: 0, 
    width: '100%', 
    zIndex: 1000, 
};

const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '50px', 
};

const buttonStyle: React.CSSProperties = {
    backgroundColor: 'transparent', 
    color: '#fff', 
    border: '2px solid #fff', 
    padding: '15px 30px', 
    cursor: 'pointer',
    fontSize: '18px', 
    minWidth: '150px',
    transition: 'background-color 0.3s, color 0.3s',
};

export default Header;

