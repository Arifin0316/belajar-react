export default function({ item, onDeleteItem, onToggleItem}) {
    return (
        <li>
           <input type="checkbox" checked = {item.checked} onChange={() => onToggleItem(item.id)} />
           <p style={item.checked ? {textDecoration : 'line-through '} : {}}>{item.quwantiti} {item.name}</p>
           <button onClick={() => onDeleteItem( item.id )}>X</button>
        </li>
    )
}