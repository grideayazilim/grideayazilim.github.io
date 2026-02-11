import React from 'react';
import '../../styles/main.scss';

const Item = ({ item, isSelected, levelId }) => {
    const { id, ad, kategori, miktar, stt, raf_no, gorsel, fiyat } = item;

    // Level 20: Category colors
    let categoryClass = '';
    if (levelId === 20) {
        if (kategori === 'Meyve') categoryClass = 'glow-red';
        else if (kategori === 'Temel') categoryClass = 'glow-blue';
        else if (kategori === 'Baharat' || kategori === 'Sıvı') categoryClass = 'glow-green';
    }

    // Base selection class
    const selectedClass = isSelected ? 'sql-selected' : '';

    return (
        <div className={`shelf-item ${selectedClass} ${categoryClass}`}>
            <div className="item-header">
                <span className="badge-id">#{id}</span>
                <span className="badge-price">{fiyat} ₺</span>
            </div>

            <div className="img-container">
                {/* Using placeholder path logic, actual assets should be in public/assets/images */}
                <img
                    src={`/assets/images/${gorsel}`}
                    alt={ad}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://placehold.co/100x100?text=' + ad;
                    }}
                />
            </div>

            <div className="item-info">
                <h3>{ad}</h3>
                <p className="detail">Kat: <strong>{kategori}</strong></p>
                <p className="detail">Stok: {miktar}</p>
                <p className="detail">Raf: {raf_no}</p>
                <p className="detail sw-date">{stt}</p>
            </div>
        </div>
    );
};

export default Item;
