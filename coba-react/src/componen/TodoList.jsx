import { useState } from "react";
import Form from "./Form";
import GroseriList from "./GroseriList";

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
  
export default function TodoList() {
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
        <section className="konten">
        <div className="todoList">
           < Form onAddItem = {hendleAddItem}/>
           < GroseriList items={items} onDeleteItem={hendleDeleteItem} onToggleItem={heandleToggleItem} onCleerItem={hendleClerrItems}/>
        </div>
        </section>
    )
}