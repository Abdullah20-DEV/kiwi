import React from 'react'
import Header from './feature/Header'
import Workprocess from './feature/Workprocess'
import WhyJoinSection from './feature/Whyjoinkiwi'
import SafetyTrust from './feature/SafetyTrust'
import JoinSection from './feature/Readytojoin'
import Jobposting from './feature/Jobposting'
import Userqueries from './feature/Userqueries'
import Successstories from './feature/Successstories'
import Howitworks from './feature/Howitworks'

const Home = () => {
  return (
    <div>
      <Header />
      <Workprocess />
      <WhyJoinSection />
      <SafetyTrust />
      <JoinSection />
      <Jobposting />
      <Userqueries />
      <Successstories />
      <Howitworks />
      
    </div>
  )
}

export default Home
