import { useEffect, useState } from 'react';
import {getCommits} from '../helpers/getCommits';
export const useFetchCommits = () => {
  const [commits, setCommits] = useState({commits:[],
                                          loading:true});
  useEffect(()=>{
    getCommits(commits)
    .then(res => {
      setCommits({
        commits: res,
        loading:false
      })
    })
  },[])
  return commits;
}