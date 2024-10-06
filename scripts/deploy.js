const hre = require("hardhat");

async function deploy() {
  // Deploy Swapper contract
  const Swapper = await hre.ethers.getContractFactory("Swapper");
  const swapper = await Swapper.deploy();
  await swapper.deployed();
  console.log('Swapper deployed:', swapper.address);

  // Deploy SwapTwoChain contract
  // const SwapTwoChain = await hre.ethers.getContractFactory("SwapTwoChain");
  // const swapTwoChain = await SwapTwoChain.deploy();
  // await swapTwoChain.deployed();
  // console.log('SwapTwoChain deployed:', swapTwoChain.address);
}

deploy().catch((error) => {
  console.error(error);
  process.exit(1);
});