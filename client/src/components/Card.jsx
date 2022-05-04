import React from 'react'
import CardMat from '@material-tailwind/react/Card'
import CardImage from '@material-tailwind/react/CardImage'
import CardBody from '@material-tailwind/react/CardBody'
import H6 from '@material-tailwind/react/Heading6'
import Paragraph from '@material-tailwind/react/Paragraph'
import Button from '@material-tailwind/react/Button'
import { shortenAddress } from '../utils/shortenAddress'

import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

export default function Card(props) {
  const { sendTransaction } = useContext(TransactionContext)

  const onClickHandler = () => {
    const data = {
      itemName: props.itemName,
      itemPrice: props.itemPrice,
      sellerAddress: props.sellerAddress,
    }
    sendTransaction(data)
  }

  return (
    <CardMat>
      <CardImage src={props.itemPic} alt="Card Image" />

      <CardBody>
        <H6 color="gray">{props.itemName}</H6>
        <Paragraph color="gray">
          seller address: {shortenAddress(props.sellerAddress)}
        </Paragraph>
        <Paragraph color="gray">
          price: <span className="font-medium">{props.itemPrice}</span>
        </Paragraph>
        <Button
          color="lightBlue"
          size="lg"
          ripple="light"
          onClick={onClickHandler}
        >
          Buy
        </Button>
      </CardBody>
    </CardMat>
  )
}
