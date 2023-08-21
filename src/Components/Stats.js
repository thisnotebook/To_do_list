import { useState } from "react";

export default function Stats({ items }) {
    if (!items.length) return (<p className="stats">
        Start adding items ✌️🙂
    </p>)
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentpack = Math.round((numPacked / numItems) * 100);
    return <footer className="stats">
        <em>
            🎒You Have {numItems} items on your list, and you already packed {numPacked} ({percentpack}%)
        </em>

    </footer>
}