import React from 'react';
import Item from './Item';
import { initialDatabase } from '../../data/mockDb';

const Shelf = ({ selectedIds, currentLevelId }) => {
    // We display all items from the database permanently on the shelf
    const items = initialDatabase.malzemeler;

    // Group items by raf_no (1, 2, 3)
    const shelves = {
        1: items.filter(i => i.raf_no === 1),
        2: items.filter(i => i.raf_no === 2),
        3: items.filter(i => i.raf_no === 3),
    };

    return (
        <div className="shelf-container">
            <div className="shelf-columns">
                {[1, 2, 3].map(rafNo => (
                    <div key={rafNo} className="shelf-column">
                        <div className="shelf-label">Raf {rafNo}</div>
                        {shelves[rafNo].map((item) => (
                            <Item
                                key={item.id}
                                item={item}
                                isSelected={selectedIds.includes(item.id)}
                                levelId={currentLevelId}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shelf;
