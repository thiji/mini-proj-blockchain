import { useContext } from 'react'
import Card from './Card'
import { TransactionContext } from '../context/TransactionContext'
const ItemList = () => {
  const { items } = useContext(TransactionContext)

  return (
    <div className="grid grid-cols-3 gap-4 gap-y-10 w-3/4 m-auto mb-10">
      {items.map((d, i) => (
        <Card
          key={i}
          itemName={d.itemName}
          itemPic={d.itemPic}
          itemPrice={d.itemPrice}
          sellerAddress={d.sellerAddress}
        />
      ))}
    </div>
  )
}

export default ItemList
