import React from 'react';
import { initialDatabase } from '../data/mockDb';
import IngredientItem from './IngredientItem';
import '../styles/BakeryShelf.scss';

const BakeryShelf = ({ ingredients = [], selectedIds = [], selectedColumns = [] }) => {
    // If ingredients are empty (loading or error), fallback?
    // Or just render empty. Use ingredients passed from parent.
    const displayItems = ingredients.length > 0 ? ingredients : [];

    return (
        <div className="bakery-shelf-container">
            <div className="shelf-grid">
                {displayItems.map((ingredient) => (
                    <IngredientItem
                        key={ingredient.id}
                        ingredient={ingredient}
                        selected={selectedIds.includes(ingredient.id)}
                        selectedColumns={selectedColumns}
                        testId={`ingredient-${ingredient.id}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BakeryShelf;
