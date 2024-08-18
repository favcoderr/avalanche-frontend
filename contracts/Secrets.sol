// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.17 and less than 0.9.0
pragma solidity ^0.8.17;

contract Secrets {
    address public owner;
    string public secrets;

    constructor() {
        owner = msg.sender;
    }

    function setSecrets(string memory _secrets) public {
        secrets = _secrets;
    }

    function showOwner() public view returns (address) {
        return owner;
    }

    function showSecrets() public view returns (string memory) {
        return secrets;
    }
}