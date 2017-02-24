import React from 'react'
import MainCarousel from 'components/MainCarousel'
import ProjectDescription from 'components/ProjectDescription'
import ProjectHighlights from 'components/ProjectHighlights'
import BookingInformation from 'components/BookingInformation'

import './HomeView.scss'

export const HomeView = () => (
  <div className='container'>
    <MainCarousel />
    <ProjectDescription />
    <ProjectHighlights />
    <BookingInformation />
  </div>
)

export default HomeView
