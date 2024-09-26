import { useState } from "react";
import Header from "./componens/Heade";
import Form from "./componens/Form";
import GroseriList from "./componens/GroseriList";
import Footer from "./componens/Footer";

const groceryItems = [
  {
    id: 1,
    name: 'Kopi Bubuk',
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: 'Air Mineral',
    quantity: 3,
    checked: false,
  },
];


function App() {
  const [items, setItems] = useState(groceryItems)

  function hendleAddItem(item) {
    setItems([...items, item])
  }

  function hendleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function heandleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? {...item, checked: !item.checked} : item)))
  }

  function hendleClerrItems() {
    setItems([])
  }

  return (
    <>
       <div className="app">
       <Header/>
       <Form onAddItem = {hendleAddItem} />
       < GroseriList items={items} onDeleteItem={hendleDeleteItem} onToggleItem={heandleToggleItem} onCleerItem={hendleClerrItems}/>
       < Footer items={items}/>
      </div>
   </>
  )
}
export default App
