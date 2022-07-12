import RepoItem from './RepoItem.jsx';

export default function Repo(props) {
  const { state } = props;

  const displayRepos = state.repoList.map((repo, index) => {
    return (
      <RepoItem
        name={repo.name}
        description={repo.description}
        language={repo.language}
        forksCount={repo.forks_count}
        key={index}
      />
    );
  });

  return <div>{displayRepos}</div>;
}
