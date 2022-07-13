import { useEffect, useState } from 'react';
const axios = require('axios').default;

export default function ShowRepo(props) {
  const { name, state, id } = props;
  // const [commits, setCommits] = useState('');
  const [commit, setCommit] = useState('');

  // const findRepo = () => {
  //   return state.repoList.find(id)
  // }

  const currentRepo = state.repoList.find((obj) => obj.id === id);
  console.log(currentRepo);

  const commitURL =
    'https://api.github.com/repos/silverorange/ambiguous-class-name-detector/commits';

  // useEffect(() => {
  //   const commitsArray = [];
  //   const fetchRepoInfo = async () => {
  //     axios.get(commitURL).then((data) => {
  //       for (const d of data.data) {
  //         commitsArray.push(d);
  //       }
  //     });
  //   };
  //   fetchRepoInfo();
  //   setCommits(commitsArray);
  // }, []);

  // console.log('commits', commits);

  useEffect(() => {
    const fetchRepoInfo = async () => {
      axios.get(commitURL).then((data) => {
        setCommit(data.data);
        // for (const d of data.data) {
        //   commitsArray.push(d);
        // }
      });
    };
    fetchRepoInfo();
    // setCommits(commitsArray);
  }, []);

  console.log('commit', commit[0]);
  return (
    <div className="overlay">
      <h3>{name}</h3>
      <p>Owner: {currentRepo.owner.login}</p>
      <label>Most Recent Commit Details: </label>
      <ul>
        <li>Author: {commit && commit[0].commit.author.name}</li>
        <li>Message: {commit && commit[0].commit.message}</li>
        <li>Date: {commit && commit[0].commit.author.date}</li>
      </ul>
    </div>
  );
}
