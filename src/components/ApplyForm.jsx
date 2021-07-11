import React, { useEffect, useState } from 'react';
// import { Row, Col } from 'antd';
import FormOne from "./FormOne";
import { Route ,Switch} from 'react-router';
import FromTwo from './FormTwo';
import FormThree from "./FormThree";
import FormFour from "./FormFour"
import { useAccount, useWeb3 } from '../hooks/ethereum';
import {CONTRACT_ABI,CONTRACT_ADDRESS } from '../abis/contractManager'
import {  IDO_FACTORY_ABI} from '../abis/idoFactory'

function AllPools(props) {
    const [tokenContract,setTokenContract] = useState('')
    const [tokenPrice,setTokenPrice] = useState('')
    const [softCap,setSoftCap] = useState('')
    const [hardCap,setHardCap] = useState('')
    const [minPurchasePerWallet,setMinPurchasePerWallet] = useState('')
    const [allocationFactor,setAllocationFactor] = useState('') //does not match iido factory
    const [saleStartTime,setSaleStartTime] = useState('')
    const [saleEndTime,setSaleEndTime] = useState('')
    const [tokenDecimal,setTokenDecimal] = useState('')//do not match idofactory
    const [unsoldTokenAddress,setUnsoldTokenAddress] = useState('') //do not match
    const [headStart,setHeadStart] = useState('')
    const [listingRate,setListingRate] = useState('')
    const [allocationToLPInBP,setPercentageAllocated] = useState('')
    const [liquidityListingTime,setLiquidityListingTime] = useState('')
    const [lpLockDuration,setLiquidityLockDuration] = useState('')
    const [addresses,setAddresses] = useState('')
    const [saleTitle,setSaleTitle] = useState('')
    const [saleDescription,setSortDescription] = useState('')
    const [website,setWebsite] = useState('')
    const [telegram,setTelegram] = useState('')
    const [github,setGithub] = useState('')
    const [twitter,setTwitter] = useState('')
    const [logo,setLogo] = useState('')
    const [kyc,setKyc] = useState('')
    const [whitePaper,setWhitePaper] = useState('')
    const [category,setCategory] = useState('')
    
    const {instance:web3} = useWeb3();
    const {accounts} = useAccount()
    
    const getContractAddress = async ()=>{
        const contractManager = new web3.eth.Contract(CONTRACT_ABI,CONTRACT_ADDRESS)
        try{
            const idoAddress  = await contractManager.methods.idoFactory().call()
            console.log(idoAddress)
        }catch(e){
            
        }
        // console.log(idoAddress)
      }
      
      const getIdoFactory = async (address,account) =>{
        const idoFactory = await  web3.eth.Contract(IDO_FACTORY_ABI,address);
        idoFactory.methods.create({}).send({from:account})
      }
      
      useEffect(()=>{
        getContractAddress()
      })
      
    const handleSubmit = async()=>{
        // getContractAddress()
        // getContractManager()
        // const content = {}
        // this.setState({ loading: true })
        // idoFactory.methods.create(content).send({ from: account })
        // .once('receipt', (receipt) => {
        //     console.log(receipt)
        //   this.setState({ loading: false })
        // })
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
                        setTokenPrize = {setTokenPrice}
                        softCap = {softCap}
                        setSoftCap = {setSoftCap}
                        hardCap={hardCap}
                        setHardCap = {setHardCap}
                        minBNB = {minPurchasePerWallet}
                        setMinBNB = {setMinPurchasePerWallet}
                        allocationFactor = {allocationFactor}
                        setAllocationFactor = {setAllocationFactor}
                        saleStartTime = {saleStartTime}
                        setSaleStartTime = {setSaleStartTime}
                        saleEndTime = {saleEndTime}
                        setSaleEndTime = {setSaleEndTime}
                        tokenDecimal = {tokenDecimal}
                        setTokenDecimal = {setTokenDecimal}
                        unsoldTokenAddress = {unsoldTokenAddress}
                        setUnsoldTokenAddress = {setUnsoldTokenAddress}
                        headStart = {headStart}
                        setHeadStart={setHeadStart}
                    />
                </Route>
                <Route path="/form-presale/form-two">
                    <FromTwo/>
                </Route>
                <Route path="/form-presale/form-three">
                    <FormThree/>
                </Route>
                <Route path="/form-presale/form-four">
                    <FormFour handleSubmit = {handleSubmit}/>
                </Route>
            </Switch>
       </div>
     )
  
}

export default AllPools;