import { useContext, useEffect, useState } from 'react';
import './App.css';
import WalletContext from './context/WalletContext';

function App() {
  const { account, connectWallet, contract } = useContext(WalletContext);
  const [secrets, setSecrets] = useState('');
  const [refetch, setRefetch] = useState(true);
  const [loading, setLoading] = useState(false);
  const [owner, setOwner] = useState('');

  useEffect(() => {
    if (contract && refetch) {
      contract.showSecrets().then((data) => {
        setSecrets(data);
        setRefetch(false);
      });
    }
  }, [refetch, contract]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    const secretsValue = e.target.secrets.value;
    e.target.secrets.value = "";
    const set = await contract.setSecrets(secretsValue);
    await set.wait();
    setLoading(false);
    setRefetch(true);
  };

  const showOwner = async () => {
    const ownerAddress = await contract?.showOwner();
    console.log(ownerAddress);
    setOwner(ownerAddress);
  };

  return (
    <>
      {account ? (
        <>
          <p>Current Secret: {secrets}</p>

          <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: "20px"}}>
            <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
              <label htmlFor="secrets">Enter secrets:</label>
              <input
                type="text"
                name="secrets"
                id="secrets"
                style={{padding: "5px"}}
              />
            </div>
            <button type="submit">{loading ? "Updating" : "Update secrets"}</button>
          </form>

          <div style={{display: "flex", flexDirection: "column"}}>
          <p style={{marginBottom: "0"}}>Owner Address: </p>
          <p>{owner}</p>
          </div>
          <button onClick={showOwner}>Show Owner</button>

        </>
      ) : (
        <button onClick={connectWallet}>Connect</button>
      )}
    </>
  );
}

export default App;
