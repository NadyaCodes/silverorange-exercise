import FilterButton from './FilterButton';

export default function Filter(props) {
  const { state } = props;

  for (const i of state.repoList) {
    if (!state.languageList.includes(i.language)) {
      state.languageList.push(i.language);
    }
  }

  const displayButtonList = state.languageList.map((language, index) => {
    return <FilterButton name={language} key={index} />;
  });

  return <div>{displayButtonList}</div>;
}
