import { useEffect, useState } from 'react';
import {getCommitInfo} from '../helpers/getCommitInfo';
export const useFetchCommitInfo = (id) => {
  const [info, setInfo] = useState({info:[],
                                    loading:true});
  useEffect(()=>{
    getCommitInfo(id)
    .then(({data:{author:{avatar_url}},
            data:{commit:{author,message}},
            data:{commit:{author:{name,email},
                  committer:{date}}},
            data:{html_url}
          }) => {
        setInfo({
          info: {avatar_url,date,author,message,name,email,html_url},
          loading:false
        })
    })
  },[id]);
  return info;
}