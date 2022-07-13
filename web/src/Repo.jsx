import RepoItem from './RepoItem.jsx';

export default function Repo(props) {
  const { state, setState } = props;

  const datedList = state.filteredRepos.map((obj) => {
    return { ...obj, created_at: new Date(obj.created_at) };
  });

  const sortedRepos = datedList.sort(
    (objA, objB) => Number(objB.created_at) - Number(objA.created_at)
  );

  const displayRepos = sortedRepos.map((repo, index) => {
    const timeString = repo.created_at.toJSON();
    return (
      <RepoItem
        name={repo.name}
        id={repo.id}
        description={repo.description}
        language={repo.language}
        forksCount={repo.forks_count}
        dateCreated={timeString}
        state={state}
        setState={setState}
        key={index}
      />
    );
  });

  return <div>{displayRepos}</div>;
}
