const Token = artifacts.require('Token')
const MerchantPlusSwap = artifacts.require('MerchantPlusSwap')

require('chai')
  .use(require('chai-as-promised'))
  .should()

function tokens(n) {
  return web3.utils.toWei(n, 'ether');
}

contract('MerchantPlusSwap', ([deployer, investor]) => {
  let token, merchantPlusSwap

  before(async () => {
    token = await Token.new()
    merchantPlusSwap = await MerchantPlusSwap.new(token.address)
    await token.transfer(merchantPlusSwap.address, tokens('1000000'))
  })

  describe('Token deployment', async () => {
    it('contract has a name', async () => {
      const name = await token.name()
      assert.equal(name, 'DApp Token')
    })
  })

  describe('MerchantPlusSwap deployment', async () => {
    it('contract has a name', async () => {
      const name = await merchantPlusSwap.name()
      assert.equal(name, 'MerchantPlusSwap Exchange')
    })

    it('contract has tokens', async () => {
      let balance = await token.balanceOf(merchantPlusSwap.address)
      assert.equal(balance.toString(), tokens('1000000'))
    })
  })

  describe('buyTokens()', async () => {
    let result

    before(async () => {
      result = await merchantPlusSwap.buyTokens({ from: investor, value: web3.utils.toWei('1', 'ether')})
    })

    it('Allows user to instantly purchase tokens from merchantPlusSwap for a fixed price', async () => {
      let investorBalance = await token.balanceOf(investor)
      assert.equal(investorBalance.toString(), tokens('100'))

      let merchantPlusSwapBalance
      merchantPlusSwapBalance = await token.balanceOf(merchantPlusSwap.address)
      assert.equal(merchantPlusSwapBalance.toString(), tokens('999900'))
      merchantPlusSwapBalance = await web3.eth.getBalance(merchantPlusSwap.address)
      assert.equal(merchantPlusSwapBalance.toString(), web3.utils.toWei('1', 'Ether'))

      const event = result.logs[0].args
      assert.equal(event.account, investor)
      assert.equal(event.token, token.address)
      assert.equal(event.amount.toString(), tokens('100').toString())
      assert.equal(event.rate.toString(), '100')
    })
  })

  describe('sellTokens()', async () => {
    let result

    before(async () => {
      await token.approve(merchantPlusSwap.address, tokens('100'), { from: investor })
      result = await merchantPlusSwap.sellTokens(tokens('100'), { from: investor })
    })

    it('Allows user to instantly sell tokens to merchantPlusSwap for a fixed price', async () => {
      let investorBalance = await token.balanceOf(investor)
      assert.equal(investorBalance.toString(), tokens('0'))

      let merchantPlusSwapBalance
      merchantPlusSwapBalance = await token.balanceOf(merchantPlusSwap.address)
      assert.equal(merchantPlusSwapBalance.toString(), tokens('1000000'))
      merchantPlusSwapBalance = await web3.eth.getBalance(merchantPlusSwap.address)
      assert.equal(merchantPlusSwapBalance.toString(), web3.utils.toWei('0', 'Ether'))

      const event = result.logs[0].args
      assert.equal(event.account, investor)
      assert.equal(event.token, token.address)
      assert.equal(event.amount.toString(), tokens('100').toString())
      assert.equal(event.rate.toString(), '100')

      await merchantPlusSwap.sellTokens(tokens('500'), { from: investor }).should.be.rejected;
    })
  })

})