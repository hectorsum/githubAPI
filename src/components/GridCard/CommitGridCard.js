import React from 'react'
import { useFetchCommits } from '../../hooks/useFetchCommits'
import { getPetTime } from '../../helpers/getPetTime';
import styled from 'styled-components';
import { CommitCard } from '../Card/CommitCard';

export const CommitGridCard = () => {
  const {commits,loading} = useFetchCommits();
  if (loading){
    console.log('loading');
  }else{
    console.log(commits);
    // console.log(getPetTime(commits));
  }
  return (
    <CommitGridCardSection className="container mt-4 ">
      <Title>Github API - Hector Herrera 👨‍💻</Title>
      <Underline/>
      {
        loading && <h1 className="animate__animated animate__flash">Loading..</h1>
      }
      <div className="col-lg-12">
        <GridCard className="row">
          {
            commits.map(commit => {
              return <CommitCard key={commit.sha} {...commit}/>
            })
          }
        </GridCard>
      </div>
    </CommitGridCardSection>
  )
}
const Title = styled.h1 `
  color: ${props => props.theme.titleColor}
`;

const Underline = styled.hr `
  color:white;
`;

const GridCard = styled.div `

`;

const CommitGridCardSection = styled.div`
  
`;