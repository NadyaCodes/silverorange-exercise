export default function FilterButton(props) {
  const { name, state, setState } = props;

  const filterLanguages = () => {
    const abrigedList = [];

    for (let i = 0; i < state.repoList.length; i++) {
      if (state.repoList[i].language === name) {
        abrigedList.push(state.repoList[i]);
      }
    }

    setState((prev) => ({
      ...prev,
      currentLanguage: name,
      filteredRepos: abrigedList,
    }));
  };

  return <button onClick={filterLanguages}>{name}</button>;
}
