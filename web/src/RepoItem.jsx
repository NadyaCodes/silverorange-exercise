export default function RepoItem(props) {
  const { name, description, language, forksCount, dateCreated } = props;

  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {description && <li>{description}</li>}
        {language && <li>{language}</li>}
        {forksCount && <li>Forks count: {forksCount}</li>}
        {dateCreated && <li>Date: {dateCreated}</li>}
      </ul>
      <hr />
    </div>
  );
}
