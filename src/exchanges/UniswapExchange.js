import UniswapV2FactoryContract from '../contracts/UniswapV2FactoryContract';
import UniswapV2PairContract from '../contracts/UniswapV2PairContract';
import UniswapV2Router02Contract from '../contracts/UniswapV2Router02Contract';
import { WETH, ETH, MAXINT } from '../utils/Constants';
import { ethers } from 'ethers';

class UniswapExchange {

  static name() {
    return 'Uniswap';
  }

  static linkRoute(route) {
    return `https://app.uniswap.org/#/swap?exactAmount=${parseFloat(ethers.utils.formatEther(route.amounts[0])).toFixed(4)}&inputCurrency=${route.route[0]}&outputCurrency=${route.route[route.route.length-1]}`
  }
  
  static findLiquidity(addressA, addressB) {
    if(addressA === ETH) { addressA = WETH; }
    if(addressB === ETH) { addressB = WETH; }
    if(addressA === addressB) { return(Promise.resolve([ethers.BigNumber.from(MAXINT.toString()), ethers.BigNumber.from(MAXINT.toString())])); }
    return new Promise(function(resolve, reject){
      UniswapV2FactoryContract.getPair(addressA, addressB).then(function(pairAddress){
        if(pairAddress.address === ethers.constants.AddressZero) {
          resolve(null);
        } else {
          UniswapV2PairContract(pairAddress).getReserves().then(function(reserves){
            resolve([reserves[0], reserves[1]]);
          })
        }
      })
    });
  }

  static findAmounts(route, endTokenAmount) {
    route = route.map(function(step){
      if(step === ETH) {
        return WETH;
      } else {
        return step;
      }
    });
    return new Promise(function(resolve, reject){
      UniswapV2FactoryContract.getPair(route[0], route[1]).then(function(pairAddress){
        if(pairAddress.address === ethers.constants.AddressZero) {
          return(resolve(null)); // dont bother if there is no pair
        } else {
          UniswapV2Router02Contract.getAmountsIn(
            endTokenAmount.toString(),
            route
          )
          .then(function(amounts){
            resolve(
              amounts.map(function(amount){ return amount.toString() })
            )
          })
          .catch(()=>resolve(null))
        }
      });
    });
  }

  static findMaxAmount(route) {
    return new Promise(function(resolve, reject){
      let inToken = route.token.address;
      if(inToken === ETH) { inToken = WETH };
      let outToken = route.route[route.route.length-1];
      let path;
      if(inToken === WETH) {
        path = [WETH, outToken];
      } else {
        path = [inToken, WETH, outToken];
      }

      UniswapV2Router02Contract.getAmountsOut(
        route.balance,
        path
      ).then(function(amounts){
        resolve(amounts[amounts.length-1].toString());
      })
      .catch(()=>resolve('0'))
    });
  }
}

export default UniswapExchange;
