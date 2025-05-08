export const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      return accounts[0];
    } else {
      alert("MetaMask not installed");
      return null;
    }
  };
  