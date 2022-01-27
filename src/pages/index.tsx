import styled, { useTheme } from 'styled-components';
import DefaultLayout from '../ui/layouts/DefaultLayout';
import { Text } from '../ui/components/Text';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, setUser } from '../redux/slices/userSlice';
import React from 'react';

export default function Landing() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const wave = () => {
    // web3 assumes there is a local node connnected 
    // ethers separates nodes: provider and wallet
  }

  // React.useEffect(() => {
  //   setTimeout(() => {
  //   //   dispatch(
  //   //     // setUser({
  //   //     //   id: 2,
  //   //     //   username: 'Kevin',
  //   //     // })
  //   //   );
  //   // }, 2000);
  // });

  return (
    <Big>
    <Container>
        <div className="dataContainer">
          <div className="header">
          👋 Hello Friends!
          </div>

          <div className="bio">
          I am a <span style={{ color: theme.primary }}>Grassroots Guy</span> and I worked on 
          <span style={{ color: theme.primary }}> computational mathematics for sound</span>, 
          so that's pretty cool right? <br/> Connect your Ethereum wallet and wave at me!
          </div>

          <button className="waveButton" onClick={wave}>
            Everybody needs Toucan Stubs, so WAVE AT ME!
          </button>
        </div>
    </Container>
    </Big>
  );
}
const Big = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background:linear-gradient(45deg, #dc3b3e, #3b99dc 50%, #3bdc90 75%, rgb(255 141 0) 100%);
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;


  .dataContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 600px;
  }
  
  .header {
    text-align: center;
    font-size: 32px;
    font-weight: 600;
  }
  
  .bio {
    text-align: center;
    margin-top: 16px;
  }
  
  .waveButton {
    cursor: pointer;
    margin-top: 16px;
    padding: 8px;
    border: 0;
    border-radius: 5px;
    
  }


`;


Landing.Layout = DefaultLayout;
