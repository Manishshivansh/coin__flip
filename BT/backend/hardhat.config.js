require("@nomicfoundation/hardhat-toolbox");
// require('@nomiclabs/hardhat-ethers');
// require('@nomiclabs/hardhat-etherscan');
// require("@nomicfoundation/hardhat-verify")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    mainnet: {
        url: `https://mainnet.infura.io/v3/203696106ca44417b701c469748bec0f`,
        accounts: [`0x${"9261d78c55d4f0be80af93abf23c6f0e42f51d76531b9d2f419ccdc848858ef7"}`]
    }
}
};

