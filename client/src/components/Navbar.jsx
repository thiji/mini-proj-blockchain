import React, { useContext } from 'react'
import NavbarMat from '@material-tailwind/react/Navbar'
import NavbarContainer from '@material-tailwind/react/NavbarContainer'
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper'
import NavItem from '@material-tailwind/react/NavItem'
import { TransactionContext } from '../context/TransactionContext'
import { shortenAddress } from '../utils/shortenAddress'

export default function Navbar() {
  const { currentAccount, connectWallet } = useContext(TransactionContext)

  const words = currentAccount ? 'Change Wallet' : 'Connect Wallet'

  return (
    <NavbarMat color="lightBlue" navbar>
      <NavbarContainer>
        <NavItem>
          <p className="text-lg">Pet shop</p>
        </NavItem>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center bg-[#2952e3] p-2 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <p className="text-white text-base font-semibold">{words}</p>
          </button>
        </div>
      </NavbarContainer>
    </NavbarMat>
  )
}
