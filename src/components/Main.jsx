import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Redirect, Route, Routes } from 'react-router-native'

import AppBar from './Topbar/AppBar'
import RepositoryList from './RespositoryList'
import Login from '../pages/Login'


const Main = () => {
  return (
    <View style={styles.main}>
      <AppBar />
      <Routes>
        <Route path='/' exact element={<RepositoryList />} />
        <Route path='/login' exact element={<Login />} />
      </Routes>
    </View>
  )
}
export default Main


const styles = StyleSheet.create({
  main: {
    backgroundColor: "#f7f7f7",
    flexGrow: 1,
  },
});
