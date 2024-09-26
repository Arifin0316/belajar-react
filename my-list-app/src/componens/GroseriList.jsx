import Item from "./Item";
import { useState } from "react";
export default function GroseriList({items, onDeleteItem, onToggleItem, onCleerItem}){

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
    <div className="list">
      <ul>
        {sorTetitem.map((item) => 
        < Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>
        )}
      </ul>
    </div>
    <div className="actions">
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Urutkan berdasarkan urutan input</option>
        <option value="name">Urutkan berdasarkan nama barang</option>
        <option value="checked">Urutkan berdasarkan ceklis</option>
      </select>
      <button onClick={ onCleerItem}>Bersihkan Daftar</button>
    </div>
    </>
  )
}