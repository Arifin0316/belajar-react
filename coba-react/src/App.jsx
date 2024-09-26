import { useState } from 'react'
import './App.css'
import Navbar from './componen/navbar'
import TodoList from './componen/TodoList'
import { useEffect } from 'react'
import Tes from './componen/tes'
import Searc from './componen/Searc'


function App() {
  const [count, setCount] = useState(1)
  const [article, setArticle] = useState("")

  function nexCount() {
      setCount(count + 1)
  }
  function minCount() {
    if(count === 1){
      return
    }
    setCount( count - 1)
  }
  useEffect(() => {
    fetch(`https://dummyjson.com/posts/` + count).then((res => res.json())).then(data => setArticle(data))
  }, [count])

  return (
    <>
    <Navbar/>
    <section>
      <div>
       <h1>count = {count}</h1>
      </div>
      <div className='btn'>
        <button onClick={nexCount}>nextcount</button>
        <button onClick={minCount}>mincount</button>
      </div>
      <div>
        <article>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </article>
      </div>
    </section>
    < TodoList/>
    <PackingList/>
    < Tes/>
    < Searc/>
    </>
  )
}

export default App

function Item({ name, isPacked }) {
  return <li className="item">
    {isPacked ? name + 'V' : name}
  </li>;
}

 function PackingList() {
  return (
    <section>
      <h1>Daftar Pengemasan Sally Ride</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Pakaian luar angkasa" 
        />
        <Item 
          isPacked={true} 
          name="Helm berwarna emas" 
        />
        <Item 
          isPacked={false} 
          name="Foto Tam" 
        />
      </ul>
    </section>
  );
}
