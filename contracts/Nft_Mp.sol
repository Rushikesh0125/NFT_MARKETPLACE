//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";



contract Nft_Mp is ERC721URIStorage{
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    Counters.Counter private _itemSold;

    uint256 listingPrice = 0.025 ether;

    address payable owner;

    mapping(uint256 => Marketitem) private idMarketitem;

    struct Marketitem{
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    event MarketitemCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "only owner can change the listing price");
        _;
    }

    //construtor with name and symbol
    constructor() ERC721("NFT Token", "My_NFT"){
        owner == payable(msg.sender);
    }

    //function for updating listing price
    function updateListingPrice(uint256 _ListngPrice) public payable onlyOwner{ 
        listingPrice = _ListngPrice;
    } 

    //getter for the price
    function getListingPrice() public view returns(uint256){
        return listingPrice;
    }

    function createToken(string memory tokenURI, uint256 price) public payable returns(uint256){
        _tokenIds.increment();

        uint256 newTokenId = _tokenIds.current();

        //from erc721 to mint the id accepts to address and a token id for the token
        _mint(msg.sender, newTokenId);

        _setTokenURI(newTokenId, tokenURI);

        createMarketItem(newTokenId, price);

        return newTokenId;
    }

    //for creating the item"nft"
    function createMarketItem(uint256 tokenId, uint256 price) private{
        require(price > 0, "price must be atleast 1");
        require(msg.value == listingPrice, "price must be equal to listing price");

        idMarketitem[tokenId] = Marketitem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );

        _transfer(msg.sender, address(this), tokenId);

        emit MarketitemCreated(tokenId, msg.sender, address(this), price, false);
    
    }

    function resellToken(uint256 tokenId, uint256 price) public payable{
        require(idMarketitem[tokenId].owner == msg.sender, "Only owner can have access to this");

        require(msg.value == listingPrice, "price must be equal to listing price");

        idMarketitem[tokenId].sold = false;
        idMarketitem[tokenId].price = price;
        idMarketitem[tokenId].seller = payable(msg.sender);
        idMarketitem[tokenId].owner = payable(address(this));

        _itemSold.decrement();

        _transfer(msg.sender, address(this), tokenId);

    }

    function createMarketSale(uint256 tokenId) public payable{
        uint256 price = idMarketitem[tokenId].price;

        require(msg.value == price, "please submit the asking price to purchase");

        idMarketitem[tokenId].owner = payable(msg.sender);
        idMarketitem[tokenId].sold = true;
        idMarketitem[tokenId].owner = payable(address(0));

        _itemSold.increment();

        _transfer(address(this), msg.sender, tokenId);

        payable(owner).transfer(listingPrice);

        payable(idMarketitem[tokenId].seller).transfer(msg.value);

    }

    //items that are currently listed but not sold
    function fetchMarketItem() public view returns(Marketitem[] memory){
        uint256 itemCount = _tokenIds.current();
        uint256 unsoldItemCount = _tokenIds.current() - _itemSold.current();
        uint256 currentIndex = 0;

        Marketitem[] memory items = new Marketitem[](unsoldItemCount);
        for(uint i = 0; i < itemCount; i++ ){
            if(idMarketitem[i+1].owner == address(this)){
                uint256 currentId = i + 1;

                Marketitem storage currentItem = idMarketitem[currentId];

                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }

        return items;

    }

    function fetchMyNft() public view returns(Marketitem[] memory){
        uint256 totalCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for(uint256 i = 0; i < totalCount; i++){
            if(idMarketitem[i+1].owner == msg.sender){
                itemCount += 1;
            }
        }

        Marketitem[] memory items = new Marketitem[](itemCount);
        for(uint256 i = 0; i < totalCount; i++){

            if(idMarketitem[i + 1].owner == msg.sender){
                uint256 currentId = i+1;
                Marketitem storage currentItem = idMarketitem[currentId];
                items[currentIndex] = currentItem;
                currentIndex +=1;
            }
            
        }
        return items;
    } 

    function fetchItemsListed() public view returns(Marketitem[] memory){
        uint256 totalCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for(uint256 i = 0; i < totalCount; i++){
            if(idMarketitem[i+1].seller == msg.sender){
                itemCount += 1;
            }
        }

        Marketitem[] memory items = new Marketitem[](itemCount);
        for(uint256 i = 0; i < totalCount; i++){
            if(idMarketitem[i+1].seller == msg.sender){
                uint256 currentId = i+1;

                Marketitem storage currentItem = idMarketitem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }

        return items;
    }

}



