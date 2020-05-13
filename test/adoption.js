var Adoption = artifacts.require("./Adoption.sol");
contract('Adoption', function(accounts) {
  describe('First group of tests', () => {
    let instance;

    before(async() => {
      instance = await Adoption.deployed();
    });

    it('User should adopt a pet', async() => {
      await instance.adopt.sendTransaction(8,{from:accounts[0]});
      let adopter = instance.adopters.call(8);
      assert.equal(adopter,accounts[0],"Incorrect owner address")
    });

    it('Should get adopter address by petID in array',async()=>{
      let adopters = instance.getAdopters.call();
      assert.equal(adopters[8],accounts[0],"Owner of the PetID should be recorded in the array")
    })

    it('Should throw error if the pet Transaction goes invalid', async() => {
      try {
          await instance.adopt.sendTransaction(17,{from:address[0]});
          assert.fail(true,false,"This function did not stop form owning a pre owned cat")
      } catch (error) {
          assert.include(String(error),"revert",`Expected "revert" but instead got ${error}`)
      }
    });

  });
});
