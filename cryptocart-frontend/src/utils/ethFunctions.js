import { ethers } from "ethers";

// Function to handle ETH payment via MetaMask
export const payWithETH = async (amountEth) => {
  try {
    // Check if MetaMask is installed
    if (!window.ethereum) {
      throw new Error("MetaMask is not installed");
    }

    // Request user to connect their MetaMask wallet
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const from = accounts[0]; // User's MetaMask wallet address
    const to = "0xd9145CCE52D386f254917e481eB44e9943F39138"; // Your contract or receiver wallet address
    const value = ethers.parseEther(amountEth.toString()).toHexString(); // Convert ETH to wei

    // Send the transaction
    const tx = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          from,
          to,
          value,
        },
      ],
    });

    // Return the success result with the transaction hash
    return { success: true, hash: tx };
  } catch (error) {
    console.error("Payment error:", error);
    return { success: false, error: error.message };
  }
};
