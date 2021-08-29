import { useEffect, useMemo, useState, createContext, useContext } from "react";
import Web3 from "web3";
import MetaMaskOnboarding from "@metamask/onboarding";
// import { set } from "date-fns";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../abis/contractManager";

const EthereumContext = createContext({});

export function EthereumProvider({ children }) {
    const ethereum = window.ethereum;
    const [connected, setConnected] = useState(
        () => ethereum?.isConnected() ?? false
    );
    const instance = useMemo(() => {
        if (!ethereum) {
            const onboarding = new MetaMaskOnboarding();
            onboarding.startOnboarding();
        }
        return new Web3(ethereum);
    }, []);
    useEffect(() => {
        if (!ethereum) {
            return;
        }
        ethereum.on("open", () => {
            setConnected(true);
        });

        ethereum.on("close", () => {
            setConnected(false);
        });
    }, []);
    const value = {
        instance,
        isConnected: !connected,
        connect() {
            return ethereum.request({ method: "eth_requestAccounts" });
        },
    };
    return (
        <EthereumContext.Provider value={value}>
            {children}
        </EthereumContext.Provider>
    );
}

export function useWeb3() {
    return useContext(EthereumContext);
}

export function useAccount() {
    const { instance: web3 } = useWeb3();
    const [accounts, setAccounts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        // const accounts = await ethereum.request({ method: 'eth_requestAccounts' }); use instead
        web3.eth
            .getAccounts()
            .then((a) => setAccounts(a))
            .catch((e) => console.error(e))
            .then(() => {
                setIsLoading(false);
            });
    }, []);
    return { accounts, isLoading };
}

export function useContract() {
    const { instance: web3 } = useWeb3();
    const [address, setAddress] = useState("sds");
    const [isLoading, setIsLoading] = useState(false);

    const setIdoAddress = async () => {
        setIsLoading(true);
        const contractManager = new web3.eth.Contract(
            CONTRACT_ABI,
            CONTRACT_ADDRESS
        );
        const idoAddress = await contractManager.methods.idoFactory().call();
        setAddress(idoAddress);
        // contractManager.methods.idoFactory().call().then((add)=>{
        //   setAddress(add)
        // }).catch(e => console.error("error",e)).then(() => {
        //     setIsLoading(false);
        // });
    };
    useEffect(() => setIdoAddress(), []);

    return { address, isLoading };
}
