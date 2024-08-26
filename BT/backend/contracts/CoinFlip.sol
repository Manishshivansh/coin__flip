// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CoinFlip {
    address public owner;

    event CoinFlipped(address indexed player, uint amount, bool side, bool win);

    constructor() {
        owner = msg.sender;
    }

    function flipCoin(bool _heads) external payable {
        require(msg.value > 0, "Must bet some ETH");

        // Determine if the player won
        bool win = (block.timestamp % 2 == 0) == _heads;

        if (win) {
            payable(msg.sender).transfer(msg.value * 2);
        }

        emit CoinFlipped(msg.sender, msg.value, _heads, win);
    }

    // To receive funds sent directly to the contract
    receive() external payable {}
}
