var Adoption = artifacts.require("./Adoption.sol");
contract('Adoption', function(accounts) {
  it("should assert true", function(done) {
    var adoption = Adoption.deployed();
    assert.isTrue(true);
    done();
  });
});
