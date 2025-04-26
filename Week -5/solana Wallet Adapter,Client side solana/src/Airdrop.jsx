//components in react are very similar  to creating your own HTML tag

import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export function Airdrop(){
    //use walllet "hook" provides the wallet variable inside the
   // airdrop component 

   //because i wrapped the airdrop component inside the walletProvider
    const wallet = useWallet();
    const {connection} = useConnection();

    // define the function inside the component body
    async function sendAirdropToUser(){
       await  connection.requestAirdrop(wallet.publicKey,10000000)
       alert("airDropped sol")
    }
   
    return <div>
        {/* // if you connect with you solana aur backpack then  you public key show 
        //if you have account  */}
        {/* hi mrs { wallet.publicKey.toString()}   */}
        {/* // if you not have account  then use */}
        {/* hi mrs { wallet.publicKey} */}
        <input type="text"  placeholder="Amount"/>
        <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
}