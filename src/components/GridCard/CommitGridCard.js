import React from 'react'
import { useFetchCommits } from '../../hooks/useFetchCommits'
import styled from 'styled-components';
import { CommitCard } from '../Card/CommitCard';

export const CommitGridCard = () => {
  const {commits,loading} = useFetchCommits();
  return (
    <CommitGridCardSection className="container mt-4 ">
      <Title>Github API - Hector Herrera 👨‍💻</Title>
      <Underline/>
      {
        loading && <Loading className="animate__animated animate__flash">Loading..</Loading>
      }
      <div className="col-lg-12">
        <GridCard className="row animate__animated animate__fadeIn">
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

const Loading = styled.div `
  color: ${props => props.theme.titleColor};
  font-size:42px;
`;

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