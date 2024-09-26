import { useState } from "react";
import List from "./List"
export default function({items, onDeleteItem, onToggleItem, onCleerItem}) {
    const [sortBy, setSortBy] = useState('input')

    let sorTetitem;
    
    switch (sortBy) {
      case 'name' :
        sorTetitem = items.slice().sort((a,b) => a.name.localeCompare(b.name))
        break
      case 'checked' :
        sorTetitem = items.slice().sort((a, b) => a.checked - b.checked)
        break
      default :
        sorTetitem = items
    }

    return (
        <>
        <div className="List">
        <ul>
          {sorTetitem.map((item) => 
          <List item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>
         )}
        </ul>
    </div>
    <div className="action">
        <select  value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">urutkan berdasarkan input</option>
            <option value="name">urukan berdasarkan nama</option>
            <option value="cheket">urutkan berdasarkan chek</option>
        </select>
        <button onClick={ onCleerItem}>hapus semua</button>
    </div>
    </>
    )
}