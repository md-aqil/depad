import React, {  useState } from 'react';
// import { EthereumRpcError, EthereumProviderError } from 'eth-rpc-errors'
// import { getMessageFromCode, errorCodes } from 'eth-rpc-errors'
// import { Row, Col } from 'antd';
import FormOne from "./FormOne";
import { Route ,Switch} from 'react-router';
import FromTwo from './FormTwo';
import FormThree from "./FormThree";
import FormFour from "./FormFour"
import { useAccount, useWeb3 } from '../hooks/ethereum';
import {CONTRACT_ABI,CONTRACT_ADDRESS } from '../abis/contractManager'
import {  IDO_FACTORY_ABI} from '../abis/idoFactory'
import {addHours, addMinutes} from "date-fns";
// import Web3 from 'web3'

function AllPools(props) {
    // BasicIdoDetails
    const [tokenContract,setTokenContract] = useState('0xc113b5f5F22B08c7daabD47055eF4D366F100f53')
    const [tokenPrice,setTokenPrice] = useState(1)
    const [softCap,setSoftCap] = useState(100)
    const [hardCap,setHardCap] = useState(400)
    const [minPurchasePerWallet,setMinPurchasePerWallet] = useState(0.5)
    const [maxPurchasePerWallet,setMaxPurchasePerWallet] = useState(2)
    const [saleStartTime,setSaleStartTime] = useState(379) // 
    const [saleEndTime,setSaleEndTime] = useState(454) //
    const [voteStartTime,setVoteStartTime] = useState(454) //
    const [voteEndTime,setVoteEndTime] = useState(454) //

    const [headStart,setHeadStart] = useState(3498)
    
    const [allocationFactor,setAllocationFactor] = useState('') //does not match iido factory
    const [tokenDecimal,setTokenDecimal] = useState('')//do not match idofactory
    const [unsoldTokenAddress,setUnsoldTokenAddress] = useState('') //do not match
    const [liquidityListingTime,setLiquidityListingTime] = useState('')
    const [addresses,setAddresses] = useState('')
    const [category,setCategory] = useState('')
    
    //PCSListingDetails
    const [listingRate,setListingRate] = useState('')
    const [lpLockDuration,setLiquidityLockDuration] = useState('')
    const [allocationToLPInBP,setPercentageAllocated] = useState('')
    
    // projectInformation
    const [saleTitle,setSaleTitle] = useState('')
    const [saleDescription,setShortDescription] = useState('')
    const [website,setWebsite] = useState('')
    const [telegram,setTelegram] = useState('')
    const [github,setGithub] = useState('')
    const [twitter,setTwitter] = useState('')
    const [logo,setLogo] = useState('')
    const [kyc,setKyc] = useState('')
    const [whitePaper,setWhitePaper] = useState('')
    
    const {instance:web3} = useWeb3();
    const {accounts} = useAccount()
    
    const getContractAddress = async ()=>{
        const contractManager = new web3.eth.Contract(CONTRACT_ABI,CONTRACT_ADDRESS)
        const idoAddress  = await contractManager.methods.idoFactory().call()
        return idoAddress
    }
      
      const getIdoFactory = async (address,account) =>{
        const basicIdoDetails = [tokenPrice, softCap, hardCap, minPurchasePerWallet, maxPurchasePerWallet,saleStartTime,saleEndTime,headStart]
        //[voting_start_time,voting_end_time]
        const votingDetails = [addMinutes(498, 15), addHours(4985, 4)];
        const PCSListingDetails = [listingRate,lpLockDuration,allocationToLPInBP]
        const projectInformation = [saleTitle,saleDescription,website,telegram,github,twitter,logo,whitePaper,kyc]
        console.log(projectInformation)
        const idoFactory = new web3.eth.Contract(IDO_FACTORY_ABI,address);
        idoFactory.methods.create(tokenContract,basicIdoDetails,votingDetails,PCSListingDetails,projectInformation).estimateGas({from:account}).then((gasAmount)=>{
            idoFactory.methods.create(tokenContract,basicIdoDetails,votingDetails,PCSListingDetails,projectInformation).send({from:account}).then(receipt=>{
                console.log(receipt)
            })
        }).catch(error=>{
            console.log(error)
        })
      }
      
    const dateToUnix = (d)=>{
        const dateInMili = new Date(d).valueOf()
        return dateInMili/1000
    }
    const handleSubmit = async ()=>{
        const idoAddress  = await getContractAddress()
        getIdoFactory(idoAddress,accounts[0]);
    }
    
      return (
       <div className="container form padding-top">
            <div className="little-space"></div>
            <h1 className="all-pools-heading">
                all pools - all
            </h1>
            <Switch>
                <Route exact path="/form-presale/">
                    <FormOne
                        tokenContract={tokenContract} 
                        setTokenContract = {setTokenContract}
                        tokenPrize = {tokenPrice}
                        setTokenPrize={setTokenPrice}
                        softCap={softCap}
                        setSoftCap={setSoftCap}
                        hardCap={hardCap}
                        setHardCap={setHardCap}
                        minBNB={minPurchasePerWallet}
                        setMinBNB={setMinPurchasePerWallet}
                        maxBNB={maxPurchasePerWallet}
                        setMaxBNB={setMaxPurchasePerWallet}
                        allocationFactor = {allocationFactor}
                        setAllocationFactor = {setAllocationFactor}
                        saleStartTime = {saleStartTime}
                        setSaleStartTime = {setSaleStartTime}
                        saleEndTime = {saleEndTime}
                        setSaleEndTime = {setSaleEndTime}
                        voteStartTime = {voteStartTime}
                        voteEndTime = {voteEndTime}
                        setVoteStartTime = {setVoteStartTime}
                        setVoteEndTime = {setVoteEndTime}
                        tokenDecimal = {tokenDecimal}
                        setTokenDecimal = {setTokenDecimal}
                        unsoldTokenAddress = {unsoldTokenAddress}
                        setUnsoldTokenAddress = {setUnsoldTokenAddress}
                        headStart = {headStart}
                        setHeadStart={setHeadStart}
                    />
                </Route>
                <Route path="/form-presale/form-two">
                    <FromTwo
                        listingRate={listingRate}
                        setListingRate={setListingRate}
                        lpLockDuration={lpLockDuration}
                        setLiquidityLockDuration={setLiquidityLockDuration}
                        allocationToLPInBP={allocationToLPInBP}
                        setPercentageAllocated={setPercentageAllocated}
                    />
                </Route>
                <Route path="/form-presale/form-three">
                    <FormThree/>
                </Route>
                <Route path="/form-presale/form-four">
                    <FormFour 
                        handleSubmit={handleSubmit}
                        saleTitle={saleTitle}
                        setSaleTitle = {setSaleTitle}
                        shortDescription={saleDescription}
                        setShortDescription={setShortDescription}
                        website={website}
                        setWebsite={setWebsite}
                        telegram={telegram}
                        setTelegram={setTelegram}
                        github={github}
                        setGithub={setGithub}
                        twitter={twitter}
                        setTwitter={setTwitter}
                        logo={logo}
                        setLogo={setLogo}
                        whitePaper={whitePaper}
                        setWhitePaper={setWhitePaper}
                        kyc={kyc}
                        setKyc={setKyc}
                    />
                </Route>
            </Switch>
       </div>
     )
  
}

export default AllPools;