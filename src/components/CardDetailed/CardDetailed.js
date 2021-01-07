import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useFetchCommitInfo } from '../../hooks/useFetchCommitInfo';
import { Button } from '../Button/Button';

export const CardDetailed = () => {
  const {id} = useParams();
  const {info,loading} = useFetchCommitInfo(id);
  const {avatar_url,message,name,email} = info;
  if(loading){
    console.log('loading..');
  }else{
    console.log(info);
  }
  return (
    <ContentWrapper className="info-wrapper container mt-4">
      <DetailTitle>Detailed</DetailTitle>
      <Underline/>
      { loading && <h1 className="animate__animated animate__flash">Loading..</h1> }
      <ContentWrapper className="d-flex col-lg-12 col-md-6">
        <ProfileImage src={avatar_url} alt={name} />
        <Content className="container p-5">
          <p> <b>Contributor:</b> {name}</p>
          <p> <b>Email:</b> {email}</p>
          <p> <b>Commit message:</b> {message}</p>
          <Link to="/">
            <Button back>Back.. ⬅️</Button>
          </Link>
        </Content>
      </ContentWrapper>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div `
  @media only screen and (max-width: 500px){
  &.info-wrapper{
    display: flex;
    flex-direction: column;
    & .info-content{
      width: 100% !important;
      box-sizing: border-box;
      padding: 0px 2px;
      & span{
        font-size: 16px !important;
      }
      & button{
        margin-bottom: 7px;
        width: 100% !important;
      }
    }
  }
}
`;

const ProfileImage = styled.img `
  padding:0;
`;

const Content = styled.div `
  color: ${props => props.theme.paragraphColor};
  background:rgba(0,0,0,0.2);
  line-height:20px;
  & p{
    font-size: 16px;
  }
`;

const Underline = styled.hr `
  color: ${props => props.theme.titleColor}
`;

const DetailTitle = styled.h1`
  color: ${props => props.theme.titleColor}
`;