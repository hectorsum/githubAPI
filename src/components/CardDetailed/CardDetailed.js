import React from 'react'
import { Link, Redirect, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useFetchCommitInfo } from '../../hooks/useFetchCommitInfo';
import { Button } from '../Button/Button';
import { getPetTime } from '../../helpers/getPetTime';
export const CardDetailed = () => {
  const {id} = useParams();
  const {info,loading} = useFetchCommitInfo(id);
  if(!info){
    return <Redirect to={'/'}/>
  }
  const {avatar_url,message,name,email,date,html_url} = info;
  const shorter_sha = id.substring(0,7);
  let [date_parsed,time] = getPetTime(date);
  document.title = 'Detail Commit';
  return (
      (loading) ? <Loading className="animate__animated animate__flash">Loading..</Loading> : (
        <ContentWrapper className="container mt-4">
          <DetailTitle>Commit Information 🌟</DetailTitle>
          <Underline/>
          <div className="info-wrapper-text d-flex col-sm-12 col-md-12 col-lg-12 col-xl-12 m-2 p-0">
            <ProfileImage src={avatar_url} alt={name} className="card-img-top w-50 animate__animated animate__fadeInLeft"/>
            <Content className="container card-body animate__animated animate__zoomIn p-5">
              <p> <b>Contributor:</b> {name}</p>
              <p> <b>Email:</b> {email}</p>
              <p> <b>Commit message:</b> {message}</p>
              <p> <b>Date:</b> {date_parsed}</p>
              <p> <b>Time:</b> {time}</p>
              <p> <b>Commit:</b> <a href={html_url} target="blank">{shorter_sha}</a></p>
              
              <Link to="/">
                <Button BackButton>Back.. ⬅️</Button>
              </Link>
            </Content>
          </div>
        </ContentWrapper>
      )
  )
}

const Loading = styled.div `
  color: ${props => props.theme.titleColor};
  font-size:42px;
  width:100vw;
  height:100vh;
  text-align:center;
`;

const ContentWrapper = styled.div `
  @media only screen and (max-width: 720px){
    & .info-wrapper-text{
      display: flex;
      flex-direction: column;
      & button{
        width:100%;
      }
      & .card-img-top{
        width:100% !important;
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
  line-height:30px;
  & b{
    color: ${props => props.theme.titleColor};
  }
  & p{
    font-size: 20px;
  }
  @media only screen and (max-width: 720px){
    &{
      padding:18px !important;
    }
  }
`;

const Underline = styled.hr `
  color: ${props => props.theme.titleColor}
`;

const DetailTitle = styled.h1`
  color: ${props => props.theme.titleColor}
`;