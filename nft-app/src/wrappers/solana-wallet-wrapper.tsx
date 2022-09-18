import '@solana/wallet-adapter-react-ui/styles.css';
import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

interface WalletWrapperProps {
    children: React.ReactNode;
    network: string;
}

const supportedWallets = [ new PhantomWalletAdapter() ];

const SolanaWalletWrapper: React.FC<WalletWrapperProps> = ({ children, network }) => {
    return (
        <ConnectionProvider endpoint={network}>
            <WalletProvider wallets={supportedWallets} autoConnect>
                <WalletModalProvider>
                   {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default SolanaWalletWrapper;