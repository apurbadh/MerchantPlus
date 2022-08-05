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

}