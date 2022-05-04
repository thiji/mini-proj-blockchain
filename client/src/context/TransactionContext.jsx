import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'

import { contractABI, contractAddress } from '../utils/constants'

import dummyData from '../utils/dummyData'

export const TransactionContext = React.createContext()

const { ethereum } = window

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer,
  )
  return transactionsContract
}

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('')
  const [items, setItems] = useState(dummyData)
  const [loading, setLoading] = useState(false)

  const sendTransaction = async (data) => {
    try {
      if (!ethereum) return alert('please install metamask')
      const { sellerAddress, itemPrice, itemName } = data
      const transactionsContract = createEthereumContract()
      const parsedAmount = ethers.utils.parseEther(itemPrice.toString())

      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: currentAccount,
            to: sellerAddress,
            gas: '0x5208', //hex for 21 000 Gwei ~= 0.000021 eth
            value: parsedAmount._hex,
          },
        ],
      })

      const transactionHash = await transactionsContract.addToBlockchain(
        sellerAddress,
        parsedAmount,
        itemName,
      )

      setLoading(true)
      console.log(`Loading - ${transactionHash.hash}`)
      await transactionHash.wait()
      console.log(`Success - ${transactionHash.hash}`)
      setIsLoading(false)
    } catch (error) {
      throw new Error('No ethereum object11')
    }
  }

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const accounts = await ethereum.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setCurrentAccount(accounts[0])
      } else {
        console.log('No accounts found')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log(error)
      throw new Error('No ethereum object')
    }
  }

  useEffect(() => {
    checkIfWalletIsConnect()
  }, [])

  return (
    <TransactionContext.Provider
      value={{
        currentAccount,
        connectWallet,
        items,
        setItems,
        sendTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
