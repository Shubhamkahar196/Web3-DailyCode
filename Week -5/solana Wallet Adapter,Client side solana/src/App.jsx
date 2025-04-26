
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

//importing airdrop
import { Airdrop } from './Airdrop';
const App = () => {
  return (
            //  <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
             <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/I9CzauUHcXs6DTsj7_3ek04AXLz3p6CO"}>  // this url is solana and alchemy 
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <WalletMultiButton />
                    <WalletDisconnectButton />
                      <div>Hii there hello</div>
                  <Airdrop></Airdrop>
                    </WalletModalProvider>
                    </WalletProvider>
                </ConnectionProvider>
        
  )
}

export default App