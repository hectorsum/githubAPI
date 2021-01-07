import { Octokit } from "@octokit/core";

export const getCommits = async() =>{
  const octokit = new Octokit();
  const response = await octokit.request("GET /repos/hectorsum/githubAPI/commits");
  return response;
}