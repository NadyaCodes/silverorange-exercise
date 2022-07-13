import ShowRepo from './ShowRepo';

export default function RepoItem(props) {
  const {
    name,
    id,
    description,
    language,
    forksCount,
    dateCreated,
    setState,
    state,
  } = props;

  const showRepo = () => {
    if (state.featuredRepo) {
      setState((prev) => ({
        ...prev,
        featuredRepo: '',
      }));
    } else {
      setState((prev) => ({
        ...prev,
        featuredRepo: name,
      }));
    }
  };

  return (
    <div className="repo-container">
      <div className="repo-item" onClick={showRepo}>
        <h2>{name}</h2>
        <ul>
          {description && <li>{description}</li>}
          {language && <li>{language}</li>}
          {forksCount && <li>Forks count: {forksCount}</li>}
          {dateCreated && <li>Date: {dateCreated}</li>}
        </ul>
        <p>
          {state.featuredRepo ? (
            <em>*click to see less*</em>
          ) : (
            <em>*click to see more*</em>
          )}
        </p>
      </div>
      {state.featuredRepo === name && (
        <ShowRepo name={name} state={state} id={id} />
      )}
    </div>
  );
}
