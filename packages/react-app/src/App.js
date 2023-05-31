import React from "react"
import {useEthers} from '@usedapp/core';

import {usePools} from './hooks';
import styles from './styles';
import {uniswapLogo} from './assets';
import{Loader,WalletButton} from './components';
import Exchange from "./components/Exchange";


const App = () => {

  const{account}=useEthers();
  const[loading,pools]=usePools();

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
    <header className={styles.header}>
    <img 
    src={uniswapLogo}
    alt="uniswap logo"
    className="w-16 h-16 object-contain"
    />
    <WalletButton/>
    </header>

    <div className={styles.exchangeContainer}>
    <h1 className={styles.headTitle}>ShakryPay Swap</h1>
    <p className={styles.subTitle}>Exchange Tokens in seconds</p>

    <div className={styles.exchangeBoxWrapper}>
    <div className={styles.exchangeBox}>

      <div className="pink_gradient"/>

      <div className={styles.exchange}> 
       {account ?(
         loading ? (
          <Loader title="Loading pools,please Wait!"/>
         ):
         <Exchange pools={pools}/>
       ) : <Loader title="Please connect your Wallet"/>}

      </div>

      <div className="blue_gradient"/>

    </div>
    </div>
    </div>
      </div>
    </div>
  )
}

export default App;