document.addEventListener('DOMContentLoaded', () => {
  const balanceForm = document.getElementById('balanceForm');
  const balanceResult = document.getElementById('balanceResult');
    
    const web3 = new Web3(Web3.givenProvider || "https://mainnet.infura.io/v3/3329518ad3e54e86b718c677b0100c2b");

  balanceForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const address = event.target.address.value;

    try {
      // Check the balance
      const balance = await web3.eth.getBalance(address);

      // Convert balance from wei to ether
      const etherBalance = web3.utils.fromWei(balance, 'ether');

      balanceResult.innerHTML = `<p>Balance of <strong>${address}</strong>: ${etherBalance} ETH</p>`;
    } catch (error) {
      console.error(error);
      balanceResult.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  });
});
