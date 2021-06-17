pragma solidity >=0.6.0;

interface IWTRX {
    function deposit() external payable;
    function transfer(address to, uint value) external returns (bool);
    function withdraw(uint) external;
}
