import React from 'react';
import HomeImage from '../assets/Rectangle2.png';
import BackgrondContainer from '../components/BackgroundContainer';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../components/SubmitButton';
import Title from '../components/Title';
import Subtext from '../components/Subtext';
import CenterWrapper from '../components/CenterWrapper';

const Start = () => {
  const navigate = useNavigate()

  return (
    <BackgrondContainer backgroundImagePath={HomeImage}>
      <CenterWrapper>
        <Title style={{ color: '#FFFFFF'}}>Build a self care routine <br/>suitable for you</Title>
        <Subtext>
          Take out test to get a personalised self care<br></br> routine based on your needs.
        </Subtext>
      </CenterWrapper>
      <SubmitButton onClick={() => {navigate('/question/0')}} >Start the quiz</SubmitButton>
    </BackgrondContainer>
  );
};

export default Start;
