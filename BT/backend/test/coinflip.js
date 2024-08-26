const { expect } = require("chai");

describe("CoinFlip", function () {
    it("Should flip the coin and give rewards correctly", async function () {
        const [owner, player] = await ethers.getSigners();
        const CoinFlip = await ethers.getContractFactory("CoinFlip");
        const coinflip = await CoinFlip.deploy();
        await coinflip.deployed();

        // Player sends 1 ETH to flip the coin
        const flipTx = await coinflip.connect(player).flipCoin(true, { value: ethers.utils.parseEther("1") });

        // Wait for transaction to be mined
        await flipTx.wait();

        // Check the contract balance
        const balance = await ethers.provider.getBalance(coinflip.address);
        console.log("Contract Balance: ", ethers.utils.formatEther(balance));
        expect(balance).to.be.equal(ethers.utils.parseEther("1"));
    });
});
