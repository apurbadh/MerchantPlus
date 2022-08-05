pragma solidity >=0.4.22 <0.9.0;

import "./Token.sol";

contract MerchantPlusSwap {
  string public name = "Merchant Plus Exchange";
  Token public token;
  uint public rate = 100;

  constructor(Token _token) public {
    token = _token;
  }

  function buyTokens() public payable {
    uint tokenAmount = msg.value * rate;
    require(token.balanceOf(address(this)) >= tokenAmount);
    token.transfer(msg.sender, tokenAmount);

  }

  function sellTokens(uint _amount) public payable{
    require(token.balanceOf(msg.sender) >= _amount);
    uint etherAmount = _amount / rate;
    require(address(this).balance >= etherAmount);
    token.transferFrom(msg.sender, address(this), _amount);
    payable(msg.sender).transfer(etherAmount);

  }

}