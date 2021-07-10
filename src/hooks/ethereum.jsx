import { useEffect, useMemo, useState, createContext, useContext } from "react";
import Web3 from 'web3'

const EthereumContext = createContext({});

export function EthereumProvider({children}) {
    const ethereum = window.ethereum;
    const [connected, setConnected] = useState(() => ethereum?.isConnected() ?? false);
    const instance = useMemo(() => {
      if (!ethereum) {
        return;
      }
      return new Web3(ethereum);
    }, []);
    useEffect(() => {
      if (!ethereum) {
        return;
      }
      ethereum.on('connect', () => {
        setConnected(true);
      });
      
      ethereum.on('disconnect', () => {
        setConnected(false);
      });
    }, []);
    const value = {
      instance,
      isConnected: connected,
      connect() {
        return ethereum.request({ method: 'eth_requestAccounts' })
      }
    }
    return <EthereumContext.Provider value={value}>{children}</EthereumContext.Provider>
}

export function useWeb3() {
   return useContext(EthereumContext);
}

export function useAccount() {
    const {instance} = useWeb3();
    const [accounts, setAccounts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        instance.getAccount().then(setAccounts).catch(e => console.error(e)).then(() => {
            setIsLoading(false);
        });
    }, []);
    return [accounts, isLoading];
}