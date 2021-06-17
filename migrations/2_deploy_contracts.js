var Router = artifacts.require("./UniswapV2Router02.sol");

module.exports = async function(deployer) {

  let FACTORY_ADDRESS = "TCch9ApVsfUMqY1RVijRczrKHjHWguf5sJ"
  let WTRX = "TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR"

  await deployer.deploy(Router, FACTORY_ADDRESS, WTRX);
};
