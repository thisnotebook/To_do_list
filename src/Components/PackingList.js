
import { useState } from "react";

export default function PackingList({ items, onDeleteItems, onToggleItem, onClearItems }) {
    const [sortby, setSortby] = useState("input");

    let sortedItems;
    if (sortby === 'input') sortedItems = items;
    if (sortby === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    if (sortby === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    return (<div className="list">
        <ul>
            {sortedItems.map((item) => (
                <Item item={item}
                    onDeleteItems={onDeleteItems}
                    onToggleItem={onToggleItem}

                    key={item.id} />
            ))}
        </ul>
        <div className="actions">
            <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
                <option value="input">Sort by input</option>
                <option value="description">Sort by description</option>
                <option value="packed">Sort by packed</option>
            </select>
            <button onClick={onClearItems}>Clear list</button>
        </div>
    </div>);
}

function Item({ item, onDeleteItems, onToggleItem }) {
    return <li >
        <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
            {item.quantity}
            {item.description}
        </span>
        <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
}