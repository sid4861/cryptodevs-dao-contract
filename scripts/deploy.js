const { ethers } = require("hardhat");
const { CRYPTODEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
    const fakeNFTMarketplace = await ethers.getContractFactory("FakeNFTMarketplace");
    const fakeNFTMarketplaceContract = await fakeNFTMarketplace.deploy();
    await fakeNFTMarketplaceContract.deployed();

    console.log("FakeNFTMarketplace deployed to: ", fakeNFTMarketplaceContract.address);

    const cryptoDevsDao = await ethers.getContractFactory("CryptoDevsDao");
    const cryptoDevsDaoContract = await cryptoDevsDao.deploy(
        fakeNFTMarketplaceContract.address,
        CRYPTODEVS_NFT_CONTRACT_ADDRESS,
        {
            value: ethers.utils.parseEther("0.2")
        });
    await cryptoDevsDaoContract.deployed();
    console.log("CryptoDevsDAO deployed to: ", cryptoDevsDaoContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((err) => {console.log(err);process.exit(1);})

