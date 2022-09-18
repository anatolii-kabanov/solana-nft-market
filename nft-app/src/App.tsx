import React from 'react';
import './App.css';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';
import SolanaWalletWrapper from './wrappers/solana-wallet-wrapper';

const network = clusterApiUrl(WalletAdapterNetwork.Devnet);

const App: React.FC = () => {
    return (
        <SolanaWalletWrapper network={network}>
            <div></div>
        </SolanaWalletWrapper>
    );
}

export default App;
