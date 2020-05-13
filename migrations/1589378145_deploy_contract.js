var Adoption = artifacts.require('./Adoption.sol')
module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(Adoption);
};
