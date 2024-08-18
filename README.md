# Avalanche Frontend

## Contract Overview

This Contract is a simple secrets contract that allows to you to set anyone to set secrets and get it on the blockchain. It can also show the address of the owner of the contract who deployed it.

## Contract Details

### setSecrets(string memory _secrets)

Allows the user set any secrets message

### showSecrets()

A function that returns the last updated secrets message.

### showOwner()

This function returns th eaddress of the owner of the contract

## Frontend Integration

A UI was built to display and interact with the contract using React.js and Ethers.

`To run the Frontend`

```zsh
   cd ui-frontend

   # Install dependencies
   yarn

   # Run Server
   yarn dev
```

After this, the project will be running on your localhost. Typically at http://localhost:5173/