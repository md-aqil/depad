export const  IDO_DETAILS_ABI =  [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_contractsManager",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_ownerAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_idoId",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "tokenPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "softCap",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "hardCap",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minPurchasePerWallet",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxPurchasePerWallet",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "saleStartTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "saleEndTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "headStart",
              "type": "uint256"
            }
          ],
          "internalType": "struct IDODetailsStorage.BasicIdoDetails",
          "name": "_basicIdoDetails",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "voteStartTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "voteEndTime",
              "type": "uint256"
            }
          ],
          "internalType": "struct IDODetailsStorage.VotingDetails",
          "name": "_votingDetails",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "listingRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lpLockDuration",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "allocationToLPInBP",
              "type": "uint8"
            }
          ],
          "internalType": "struct IDODetailsStorage.PCSListingDetails",
          "name": "_pcsListingDetails",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "saleTitle",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "saleDescription",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "website",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "telegram",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "github",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "twitter",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "logo",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "whitePaper",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "kyc",
              "type": "string"
            }
          ],
          "internalType": "struct IDODetailsStorage.ProjectInformation",
          "name": "_projectInformation",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "basicIdoDetails",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "tokenPrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "softCap",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "hardCap",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minPurchasePerWallet",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxPurchasePerWallet",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "saleStartTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "saleEndTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "headStart",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fundingType",
      "outputs": [
        {
          "internalType": "enum FundingTypes.FundingType",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTokensToBeSold",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "idoId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lpLockerId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ownerAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pcsListingDetails",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "listingRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lpLockDuration",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "allocationToLPInBP",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "preSale",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "projectInformation",
      "outputs": [
        {
          "internalType": "string",
          "name": "saleTitle",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "saleDescription",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "website",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "telegram",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "github",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "twitter",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "logo",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "whitePaper",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "kyc",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "state",
      "outputs": [
        {
          "internalType": "enum IDOStates.IDOState",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "treasury",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "_allocationToLPInBP",
          "type": "uint8"
        }
      ],
      "name": "updateAllocationToLPInBP",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "enum FundingTypes.FundingType",
          "name": "_fundingType",
          "type": "uint8"
        }
      ],
      "name": "updateFundingType",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_github",
          "type": "string"
        }
      ],
      "name": "updateGithub",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_hardCap",
          "type": "uint256"
        }
      ],
      "name": "updateHardCap",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_headStart",
          "type": "uint256"
        }
      ],
      "name": "updateHeadStart",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_inHeadStartTill",
          "type": "uint256"
        }
      ],
      "name": "updateInHeadStartTill",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_kyc",
          "type": "string"
        }
      ],
      "name": "updateKyc",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_listingRate",
          "type": "uint256"
        }
      ],
      "name": "updateListingRate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_logo",
          "type": "string"
        }
      ],
      "name": "updateLogo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_lpLockDuration",
          "type": "uint256"
        }
      ],
      "name": "updateLpLockDuration",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_lpLockerId",
          "type": "uint256"
        }
      ],
      "name": "updateLpLockerId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_maxPurchasePerWallet",
          "type": "uint256"
        }
      ],
      "name": "updateMaxPurchasePerWallet",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_minPurchasePerWallet",
          "type": "uint256"
        }
      ],
      "name": "updateMinPurchasePerWallet",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_ownerAddress",
          "type": "address"
        }
      ],
      "name": "updateOwnerAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_preSale",
          "type": "address"
        }
      ],
      "name": "updatePreSaleAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_saleDescription",
          "type": "string"
        }
      ],
      "name": "updateSaleDescription",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_saleEndTime",
          "type": "uint256"
        }
      ],
      "name": "updateSaleEndTime",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_saleStartTime",
          "type": "uint256"
        }
      ],
      "name": "updateSaleStartTime",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_saleTitle",
          "type": "string"
        }
      ],
      "name": "updateSaleTitle",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_softCap",
          "type": "uint256"
        }
      ],
      "name": "updateSoftCap",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "enum IDOStates.IDOState",
          "name": "_newState",
          "type": "uint8"
        }
      ],
      "name": "updateState",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_telegram",
          "type": "string"
        }
      ],
      "name": "updateTelegram",
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
          "internalType": "uint256",
          "name": "_tokenPrice",
          "type": "uint256"
        }
      ],
      "name": "updateTokenPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_treasury",
          "type": "address"
        }
      ],
      "name": "updateTreasuryAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_twitter",
          "type": "string"
        }
      ],
      "name": "updateTwitter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_voteEndTime",
          "type": "uint256"
        }
      ],
      "name": "updateVotingEndTime",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_voteStartTime",
          "type": "uint256"
        }
      ],
      "name": "updateVotingStartTime",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_website",
          "type": "string"
        }
      ],
      "name": "updateWebsite",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_whitePaper",
          "type": "string"
        }
      ],
      "name": "updateWhitePaper",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "votingDetails",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "voteStartTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "voteEndTime",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
]