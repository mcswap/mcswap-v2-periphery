pragma solidity >=0.6.0;

interface IUniswapV2Migrator {
    function migrate(address token, uint amountTokenMin, uint amountTRXMin, address to, uint deadline) external;
}
