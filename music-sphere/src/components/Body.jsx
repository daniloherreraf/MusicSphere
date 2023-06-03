import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AiFillClockCircle } from 'react-icons/ai';
import { useStateProvider } from '../utils/StateProvider';

const Body = () => {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(()=> {
    const getInitialPlaylist = async () => {
      
    }
  }, [token, dispatch])
  return <Container>Body</Container>;
};

export default Body;

const Container = styled.div``;
