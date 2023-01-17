pragma solidity ^0.8.0;

contract Test {
    uint256 a = 0;

    address b = address(0);


    uint256 j = block.timestamp;
    uint256 k = now;


    function attack() public payable {

       
        selfdestruct(payable(msg.sender));
    }
}