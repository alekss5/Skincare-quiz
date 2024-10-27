import React from 'react';
import HomeImage from '../assets/Rectangle2.png';
import BackgrondContainer from '../components/BackgroundContainer';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../components/SubmitButton';
import Title from '../components/Title';

import Text from '../components/Text';
import CenterWrapper from '../components/CenterWrapper';

const Start = () => {
  const navigate = useNavigate()

  return (
    <BackgrondContainer backgroundImagePath={HomeImage}>
      <CenterWrapper>
        <Title style={{color :'#FFFFFF'}}>Build a self care routine suitable for you</Title>
        <Text style={{color :'#FFFFFF'}}>
          Take out test to get a personalised self care routine based on your needs.
        </Text>
      </CenterWrapper>
      <SubmitButton onClick={() => {navigate('/question/0')}} text='Start the quiz'/>
    </BackgrondContainer>
  );
};

export default Start;
