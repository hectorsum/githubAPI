import { useEffect, useState } from 'react';
import {getCommits} from '../helpers/getCommits';
export const useFetchCommits = () => {
  const [commits, setCommits] = useState({commits:[],
                                          loading:true});
  useEffect(()=>{
    let mounted = true;
    getCommits(commits)
    .then(({data}) => {
      if(mounted){
        setCommits({
          commits: data,
          loading:false
        })
      }
    })
    return () => mounted = false;
  },[commits]);
  return commits;
}