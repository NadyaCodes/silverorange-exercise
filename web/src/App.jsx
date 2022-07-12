import React, { useState, useEffect } from 'react';
import './App.css';
import Repo from './Repo.jsx';
import Filter from './Filter.jsx';

const axios = require('axios').default;

export function App() {
  const [state, setState] = useState({
    currentLanguage: '',
    repoList: [],
    languageList: [],
  });

  useEffect(() => {
    const fetchRepos = async () => {
      axios.get('http://localhost:4000/repos').then((data) => {
        setState((prev) => ({ ...prev, repoList: data.data }));
      });
    };
    fetchRepos();
  }, []);

  return (
    <main>
      <h1>GitHub Repo Fetching</h1>
      <Filter state={state} />
      <Repo state={state} />
    </main>
  );
}
