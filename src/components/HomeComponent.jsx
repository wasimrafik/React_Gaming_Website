import React from 'react'
import Hero from './Home/Home'
import FeaturedCard from './Home/FeaturedCard'
import TrendingCard from './Home/Section2/TrendingCard'
import TopGameCard from './Home/Section2/TopGameCard'
import LastSection from './Home/Section2/LastSection'
import CategoryCard from './Home/Section2/CategoryCard'


const HomeComponent = () => {
  return (
    <>
    <Hero />
    <FeaturedCard />
    <TrendingCard />
    <TopGameCard />
    <CategoryCard />
    <LastSection />
    </>
  )
}

export default HomeComponent