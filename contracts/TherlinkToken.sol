// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DALXToken is ERC20, Ownable {
    string public imageUrl;

    constructor(uint256 initialSupply, string memory _imageUrl) ERC20("DALX", "DALX") Ownable(msg.sender) {
        imageUrl = _imageUrl;
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    function setImageUrl(string memory _imageUrl) public onlyOwner {
        imageUrl = _imageUrl;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
} 