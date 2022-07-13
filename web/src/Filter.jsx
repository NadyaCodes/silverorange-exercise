import FilterButton from './FilterButton';

export default function Filter(props) {
  const { state, setState } = props;

  for (const i of state.repoList) {
    if (!state.languageList.includes(i.language)) {
      state.languageList.push(i.language);
    }
  }

  const displayButtonList = state.languageList.map((language, index) => {
    return (
      <FilterButton
        name={language}
        key={index}
        state={state}
        setState={setState}
      />
    );
  });

  const allRepos = state.repoList;

  const clearLanguage = () => {
    setState((prev) => ({
      ...prev,
      currentLanguage: '',
      filteredRepos: allRepos,
    }));
  };

  return (
    <div>
      {displayButtonList}
      <button onClick={clearLanguage}>Clear Language</button>
    </div>
  );
}
