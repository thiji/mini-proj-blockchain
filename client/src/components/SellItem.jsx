import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import { shortenAddress } from '../utils/shortenAddress'

import Input from '@material-tailwind/react/Input'
import Button from '@material-tailwind/react/Button'
const Welcome = () => {
  // const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);
  const { currentAccount, setItems, items } = useContext(TransactionContext)

  const submitHandler = (e) => {
    e.preventDefault()

    if (
      !e.target.itemName.value ||
      !e.target.itemPic.value ||
      !e.target.itemPrice.value ||
      !currentAccount
    )
      return

    const newItem = {
      itemName: e.target.itemName.value,
      itemPic: e.target.itemPic.value,
      itemPrice: e.target.itemPrice.value,
      sellerAddress: currentAccount,
    }

    setItems([...items, newItem])
    e.target.reset()
  }

  return (
    <form
      className="flex w-full justify-center items-center flex-col gap-5 mt-5 mb-10"
      onSubmit={submitHandler}
    >
      <h1 className=""> your address: {shortenAddress(currentAccount)}</h1>
      <div>
        <Input
          type="text"
          color="lightBlue"
          size="regular"
          outline={true}
          placeholder="item name"
          name="itemName"
        />
      </div>
      <div>
        <Input
          type="text"
          color="lightBlue"
          size="regular"
          outline={true}
          placeholder="picture url"
          name="itemPic"
        />
      </div>
      <div>
        <Input
          type="text"
          color="lightBlue"
          size="regular"
          outline={true}
          placeholder="price"
          name="itemPrice"
        />
      </div>
      <Button
        color="lightBlue"
        buttonType="filled"
        size="regular"
        rounded={false}
        block={false}
        iconOnly={false}
        ripple="light"
      >
        Confirm
      </Button>
    </form>
  )
}

export default Welcome
