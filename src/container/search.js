import React from 'react';

import TextField from 'material-ui/TextField'

import Header from '../components/Header'
import ApplyButtons from '../components/ApplyButtons'
import Profile from '../components/profile'

const applyACtion = (e) => {
  console.log("検索するよー")
}

const Home = () => {
  return (
    <div>
      <Header />
      <h1>検索ページ</h1>
      <TextField style={{margin:'30px'}} />
      <ApplyButtons
        applyText="検索する"
        applyAction={applyACtion}
        cancelLink="/frends"
      />
    </div>
  )
}

export default Home