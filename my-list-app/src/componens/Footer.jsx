export default function Footer({items}) {
  if( items.length === 0) return <footer className="stats">daftar belanjah masih kosong</footer>

  const totalItems = items.length
  const cheketItems = items.filter((item) => item.checked).length
  const persenItems = Math.round((cheketItems / totalItems) * 100)

  return <footer className="stats">Ada {totalItems} barang di daftar belanjaan, {cheketItems} barang sudah dibeli ({persenItems}%)</footer>
}