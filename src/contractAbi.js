export default address = "apple"
const abi =  [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_idoFactory",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_roleManager",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_votingManager",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_fundingManager",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_stakingManager",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_tokenAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_pcsRouter",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_lpLocker",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_fundingManager",
          "type": "address"
        }
      ],
      "name": "updateFundingManager",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_idoFactory",
          "type": "address"
        }
      ],
      "name": "updateIDOFactory",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_lpLocker",
          "type": "address"
        }
      ],
      "name": "updateLpLocker",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_pcsRouter",
          "type": "address"
        }
      ],
      "name": "updatePCSRouter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_roleManager",
          "type": "address"
        }
      ],
      "name": "updateRoleManager",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_stakingManager",
          "type": "address"
        }
      ],
      "name": "updateStakingManager",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tokenAddress",
          "type": "address"
        }
      ],
      "name": "updateTokenAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_votingManager",
          "type": "address"
        }
      ],
      "name": "updateVotingManager",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
  export default abi;