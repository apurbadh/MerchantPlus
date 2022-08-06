const Token = artifacts.require("Token");
const MerchantPlusSwap = artifacts.require("MerchantPlusSwap");

module.exports = async function(deployer) {

  await deployer.deploy(Token);
  const token = await Token.deployed()

  await deployer.deploy(MerchantPlusSwap, token.address);
  const swap = await MerchantPlusSwap.deployed()

  await token.transfer(swap.address, '1000000000000000000000000')

};