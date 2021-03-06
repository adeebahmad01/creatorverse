pragma solidity ^0.7.3;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RFT is ERC20 {

    uint public saleSharePrice;
    uint public saleShareSupply;
    uint public saleEnd;

    uint public nftId;
    IERC721 public nft;
    IERC20 public dai;

    address public admin;

    constructor(
        string memory _name,
        string memory _symbol,
        address _nftAddress,
        uint _nftId,
        uint _saleSharePrice,
        uint _saleShareSupply,
        address _daiAddress
    )
    ERC20(_name, _symbol){
        nftId = _nftId;
        nft = IERC721(_nftAddress);
        saleSharePrice = _saleSharePrice;
        saleShareSupply = _saleShareSupply;
        dai = IERC20(_daiAddress);
        admin = msg.sender;
    }

    function startSale() external {
        require(msg.sender == admin, "admin only");
        nft.transferFrom(msg.sender, address(this), nftId);
        saleEnd = block.timestamp + 7 * 86400;
    }

    function buyShare(uint shareAmount) external {
        //Cant buy fractions until the Presale has started
        require(saleEnd > 0, "Sale not started yet");

        //Cant buy fractions from presale if timer has run out
        require(block.timestamp <= saleEnd, "Sale is finished");

        //Make sure there are fractions left to buy
        require(totalSupply() + shareAmount <= saleShareSupply, "Not enough shares left");
        
        //Amount of purchase for fractions
        uint daiAmount = shareAmount * saleSharePrice;

        //Make the purchase
        dai.transferFrom(msg.sender, address(this), daiAmount);
        _mint(msg.sender, shareAmount);
    }

    function withdrawProfits() external {
        require(msg.sender == admin, "Admin only");
        require(block.timestamp > saleEnd, "Sale not finished yet");
        uint daiBalance = dai.balanceOf(address(this));
        
        if(daiBalance > 0) {
            dai.transfer(admin, daiBalance);
        }

        //Send leftover fractions to admin 
        uint unsoldShareBalance = saleShareSupply - totalSupply();
        if(unsoldShareBalance > 0) {
            _mint(admin, unsoldShareBalance);
        }
    }
}