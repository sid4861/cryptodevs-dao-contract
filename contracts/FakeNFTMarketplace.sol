//SPDX-License-Identifer: MIT

pragma solidity ^0.8.10;

contract FakeNFTMarketplace {
    mapping(uint256 => address) public tokens;

    uint256 nftPrice = 0.1 ether;

    function purchase(uint256 _tokenId) external payable {
        require(msg.value == nftPrice, "The NFT costs 0.1 ether");
        tokens[_tokenId] = msg.sender;
    }

    function gasPrice() external view returns(uint256) {
        return nftPrice;
    }

    function available(uint256 _tokenId) external view returns(bool) {
        if(tokens[_tokenId] == address(0)) {
            return true;
        } else {
            return false;
        }
    }
}