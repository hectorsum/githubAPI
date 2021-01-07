import { Octokit } from "@octokit/core";

export const getCommitInfo = async(id) =>{
  const octokit = new Octokit();
  const response = await octokit.request(`GET /repos/hectorsum/githubAPI/commits/${id}`);
  return response;
}
