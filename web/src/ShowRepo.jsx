import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
const axios = require('axios').default;

export default function ShowRepo(props) {
  const { name, state, id } = props;
  const [commit, setCommit] = useState('');
  const [readMe, setReadMe] = useState('');

  const currentRepo = state.repoList.find((obj) => obj.id === id);

  useEffect(() => {
    const commitURL = `https://api.github.com/repos/silverorange/${name}/commits`;

    const fetchRepoInfo = async () => {
      axios.get(commitURL).then((data) => {
        setCommit(data.data);
      });
    };
    fetchRepoInfo();
  }, [name]);

  useEffect(() => {
    const readMeUrl = `https://raw.githubusercontent.com/${currentRepo.full_name}/master/README.md`;

    const fetchReadMe = async () => {
      axios.get(readMeUrl).then((data) => {
        if (data.data) {
          setReadMe(data.data);
        }
      });
    };
    fetchReadMe();
  }, [currentRepo, readMe]);

  return (
    <div className="extended-info">
      <h1>{name}</h1>
      <p>Owner: {currentRepo.owner.login}</p>
      <label>Most Recent Commit Details: </label>
      <ul>
        <li>Author: {commit && commit[0].commit.author.name}</li>
        <li>Message: {commit && commit[0].commit.message}</li>
        <li>Date: {commit && commit[0].commit.author.date}</li>
      </ul>
      &nbsp;
      <h2>ReadMe</h2>
      <hr />
      {readMe ? (
        <ReactMarkdown>{readMe}</ReactMarkdown>
      ) : (
        <p>
          <em>This repo doesn't have a readMe</em>
        </p>
      )}
    </div>
  );
}
