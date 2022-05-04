//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions {

    event Transfer(
        address from,
        address recevier,
        uint256 amount,
        string itemName,
        uint256 timestamp
    );

    struct TransferStruct {
        address sender;
        address recevier;
        uint256 amount;
        string itemName;
        uint256 timestamp;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint256 amount, string memory itemName) public {
        transactions.push(
            TransferStruct(
                msg.sender,
                receiver,
                amount,
                itemName,
                block.timestamp
            )
        );

        emit Transfer(
            msg.sender,
            receiver,
            amount,
            itemName,
            block.timestamp
        );
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

}
