import { useState } from "react";
export default function Form({onAddItem}) {

    const [name, setName ] = useState('');
    const [quwantiti, setQuwantiti] = useState('');
  
    
  
    function heandelSubmit(e) {
      e.preventDefault();
      if(!name) return
      const newItem = {name, quwantiti, checked: false, id: Date.now()}
      onAddItem(newItem)
      console.log(newItem);
  
      setName('');
      setQuwantiti(1)
      
    }
  
    const quantityNum = [...Array(20)].map((_, i) => (
      <option value={i + 1} key={i + 1}>{ i + 1}</option>
    ))
  
    return (
      <form className="add-form" onSubmit={heandelSubmit}>
        <h3>Hari ini belanja apa kita?</h3>
        <div>
          <select value={quwantiti} onChange={(e) => setQuwantiti(Number(e.target.value))}>{quantityNum} </select>
          <input type="text" placeholder="nama barang..." value={name} onChange={(e)=> setName(e.target.value)} />
        <button>Tambah</button>
        </div>
      </form>
    )
  }