import { IDO_DETAILS_ABI } from "../../abis/IODDetails";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../../abis/contractManager";
import { IDO_FACTORY_ABI } from "../../abis/idoFactory";

export async function fetchAllPool(web3) {
    const contractManager = new web3.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS
    );
    const factoryAddress = await contractManager.methods.idoFactory().call();
    const factoryContract = new web3.eth.Contract(
        IDO_FACTORY_ABI,
        factoryAddress
    );
    const poolCount = await factoryContract.methods.idoIdTracker().call();
    const pools = [];
    const addresses = [];
    for (let i = 0; i < poolCount; i++) {
        const detailAddress = await factoryContract.methods
            .idoIdToIDODetailsContract(i)
            .call();
        addresses.push(detailAddress);
        const detailContract = new web3.eth.Contract(
            IDO_DETAILS_ABI,
            detailAddress
        );
        const { methods } = detailContract;
        const basicIdoDetails = await methods.basicIdoDetails().call();
        // const fundingType = await methods.fundingType().call();
        // const getTokensToBeSold = await methods.getTokensToBeSold().call();
        // const idoId = await methods.idoId().call();
        // const lpLockerId = await methods.lpLockerId().call();
        // const ownerAddress = await methods.ownerAddress().call();
        const pcsListingDetails = await methods.pcsListingDetails().call();
        // const preSale = await methods.preSale().call();
        const projectInformation = await methods.projectInformation().call();
        // const state = await methods.state().call();
        // const tokenAddress = await methods.tokenAddress().call();
        // const treasury = await methods.treasury().call();
        const votingDetails = await methods.votingDetails().call();
        pools.push({
            basicIdoDetails,
            // fundingType,
            // getTokensToBeSold,
            // idoId,
            // lpLockerId,
            // ownerAddress,
            pcsListingDetails,
            // preSale,
            projectInformation,
            // state,
            // tokenAddress,
            // treasury,
            votingDetails,
        });
    }
    return { pools, addresses };
}

export async function fetchPool(web3, address) {
    const detailContract = new web3.eth.Contract(IDO_DETAILS_ABI, address);
    const { methods } = detailContract;
    const basicIdoDetails = await methods.basicIdoDetails().call();
    const fundingType = await methods.fundingType().call();
    const getTokensToBeSold = await methods.getTokensToBeSold().call();
    const idoId = await methods.idoId().call();
    const lpLockerId = await methods.lpLockerId().call();
    const ownerAddress = await methods.ownerAddress().call();
    const pcsListingDetails = await methods.pcsListingDetails().call();
    const preSale = await methods.preSale().call();
    const projectInformation = await methods.projectInformation().call();
    const state = await methods.state().call();
    const tokenAddress = await methods.tokenAddress().call();
    const treasury = await methods.treasury().call();
    const votingDetails = await methods.votingDetails().call();
    return {
        basicIdoDetails,
        fundingType,
        getTokensToBeSold,
        idoId,
        lpLockerId,
        ownerAddress,
        pcsListingDetails,
        preSale,
        projectInformation,
        state,
        tokenAddress,
        treasury,
        votingDetails,
    };
}
