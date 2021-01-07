import React from 'react'
import { useFetchCommits } from '../../hooks/useFetchCommits'
import { getPetTime } from '../../helpers/getPetTime';

export const Root = () => {
  const {commits:{data},loading} = useFetchCommits();
  if (loading){
    console.log('loading');
  }else{
    console.log(getPetTime(data));
  }
  
  return (
    <div>
      <h1>Github API</h1>
    </div>
  )
}
