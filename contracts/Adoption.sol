pragma solidity >=0.4.21 <0.7.0;


contract Adoption {
  address[16] public adopters;

  function getAdopters() public view returns(address[16] memory){
    return adopters;
  } 

  function adopt(uint petId) public returns(uint){
    if(petId>=0 && petId<=15){
      revert("Invalid ID");
    }
    adopters[petId] = msg.sender;
    return petId;
  } 
}
