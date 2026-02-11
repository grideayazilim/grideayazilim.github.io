import React from 'react';

const IngredientItem = ({ ingredient, selected, selectedColumns = [], testId }) => {
    // Image path resolution - simplified for now
    const imageUrl = new URL(`../assets/${ingredient.gorsel}`, import.meta.url).href;

    const isFieldSelected = (field) => selected && selectedColumns.includes(field);

    return (
        <div className={`ingredient-item ${selected ? 'selected' : ''}`} data-testid={testId}>
            <div className={`ingredient-img ${isFieldSelected('gorsel') ? 'selected-field' : ''}`}>
                <img src={imageUrl} alt={ingredient.ad} />
            </div>
            <div className="ingredient-details">
                <div className={`detail-row ${isFieldSelected('id') ? 'selected-field' : ''}`}>
                    <span className="label">ID:</span>
                    <span>{ingredient.id}</span>
                </div>
                <div className={`detail-row ${isFieldSelected('Ad') ? 'selected-field' : ''}`}>
                    <span className="label">Ad:</span>
                    <span>{ingredient.Ad}</span>
                </div>
                <div className={`detail-row ${isFieldSelected('Miktar') ? 'selected-field' : ''}`}>
                    <span className="label">Miktar:</span>
                    <span>{ingredient.Miktar}</span>
                </div>
                <div className={`detail-row ${isFieldSelected('Kategori') ? 'selected-field' : ''}`}>
                    <span className="label">Kategori:</span>
                    <span>{ingredient.Kategori}</span>
                </div>
                <div className={`detail-row ${isFieldSelected('STT') ? 'selected-field' : ''}`}>
                    <span className="label">STT:</span>
                    <span>{ingredient.STT}</span>
                </div>
            </div>
        </div>
    );
};

export default IngredientItem;
