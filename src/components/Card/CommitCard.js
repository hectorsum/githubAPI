import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../Button/Button';
export const CommitCard = ({sha,commit:{message}}) => {
  return (
    <div className="col-lg-4 col-md-6">
      <Card className="card m-2">
        <CardContent className="card-body">
          <CardTitle>{sha}</CardTitle>
          <CardBody>{message}</CardBody>
          <Underline/>
          <Link to={`./detail/${sha}`}>
            <Button>See more.. ➡️</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

const Underline = styled.hr `
  color:white;
`;

const CardBody = styled.p `
  font-size:15px;
  color: ${props => props.theme.paragraphColor};
  font-family: 'Work Sans', sans-serif;
`;

const CardTitle = styled.h3 `
  font-size:16px;
  font-family: 'Work Sans', sans-serif;
  color: ${props => props.theme.titleColor}
`;

const CardContent = styled.div `

`;

const Card = styled.div `
  background-color: ${props => props.theme.cardColor};
`;