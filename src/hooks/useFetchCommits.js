import { useEffect, useState } from 'react';
import {getCommits} from '../helpers/getCommits';
export const useFetchCommits = () => {
  const [commits, setCommits] = useState({commits:[],
                                          loading:true});
  useEffect(()=>{
    getCommits(commits)
    .then(({data}) => {
      setTimeout(() => {
        setCommits({
          commits: data,
          loading:false
        })
      }, 1500);
    })
  },[])
  return commits;
}