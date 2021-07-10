export const  IDO_FACTORY_ABI =  [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_idoId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_votingStartsAt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_votingEndsAt",
          "type": "uint256"
        }
      ],
      "name": "approve",
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
      "name": "create",
      "outputs": [
        {
          "internalType": "contract IDODetails",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "idoIdToIDODetailsContract",
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
      "name": "idoIdTracker",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "ownerToIDOs",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_idoId",
          "type": "uint256"
        }
      ],
      "name": "reject",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]