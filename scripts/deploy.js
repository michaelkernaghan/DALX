async function main() {
  const initialSupply = 1000000; // 1 million tokens
  const metadata = require('../metadata/token-metadata.json');
  const tokenURI = metadata.image || ""; // Use the IPFS URI from metadata

  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const DALXToken = await ethers.getContractFactory("DALXToken");
  const token = await DALXToken.deploy(initialSupply, tokenURI);
  await token.waitForDeployment();

  console.log("Token address:", await token.getAddress());
  console.log("Token metadata URI:", tokenURI);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 