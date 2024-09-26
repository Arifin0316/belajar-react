import React from 'react'
import { useState } from 'react';
import '../css/searc.css'

let nextid = 1;
function Searc() {
    const [name, setName] = useState('')
    const [artis, setArtis] = useState([])

  return (
    <>
    <div className='searc'>
        <p>cari apa yang inggin anda cari</p>
        <input type="text" 
        value={name}
        onChange={e => setName(e.target.value)}
        />
        <button onClick={() => {
            setArtis([
                ...artis,
                { id: nextid++, name: name }
            ])
        }}
        >tambah</button>
    <ul>
        {artis.map(arti => (
        <li key={arti.id}>{arti.name}dd</li>
        ))}
    </ul>
    </div>
    </>
    
  )
}

export default Searc