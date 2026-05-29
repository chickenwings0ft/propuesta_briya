import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Keyboard, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './App.css'

import HeroSlide from './slides/HeroSlide'
import IntroSeoSlide from './slides/IntroSeoSlide'
import IntroSemSlide from './slides/IntroSemSlide'
import MockGoogleSlide from './slides/MockGoogleSlide'
import AiShiftSlide from './slides/AiShiftSlide'
import SearchIntentGoogleSlide from './slides/SearchIntentGoogleSlide'
import SearchIntentChatGptSlide from './slides/SearchIntentChatGptSlide'
import ActionPlanSlide from './slides/ActionPlanSlide'
import AuditSlide from './slides/AuditSlide'
import LocalSeoSlide from './slides/LocalSeoSlide'
import AnalyticsSlide from './slides/AnalyticsSlide'
import StructuredDataSlide from './slides/StructuredDataSlide'
import AiReadinessSlide from './slides/AiReadinessSlide'
import OptimizationSlide from './slides/OptimizationSlide'
import LandingsSlide from './slides/LandingsSlide'
import SocialCalendarSlide from './slides/SocialCalendarSlide'
import SocialMetricsSlide from './slides/SocialMetricsSlide'
import SocialBrandingSlide from './slides/SocialBrandingSlide'
import PricingSlide from './slides/PricingSlide'
import ClosingSlide from './slides/ClosingSlide'
import Nav from './components/Nav'
import Preloader from './components/Preloader'
import { prepareSlideAnimations, animateSlideIn } from './animations'

function App() {
  const [, setSwiperInstance] = useState(null)
  const [introFinished, setIntroFinished] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)



  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex)
    const activeSlide = swiper.slides[swiper.activeIndex]
    animateSlideIn(activeSlide)
  }

  const handleSwiperInit = (swiper) => {
    setSwiperInstance(swiper)
    swiper.slides.forEach(slide => prepareSlideAnimations(slide))
    setTimeout(() => {
      animateSlideIn(swiper.slides[swiper.activeIndex])
    }, 100)
  }



  return (
    <div style={{ width: '100vw', height: '100dvh', overflow: 'hidden', background: 'var(--color-cream)' }}>
      <Preloader onFinish={() => setIntroFinished(true)} />
      <div style={{ opacity: activeIndex >= 19 ? 0 : 1, transition: 'opacity 0.6s ease', pointerEvents: activeIndex >= 19 ? 'none' : 'auto' }}>
        <Nav />
      </div>
      <Swiper
        allowTouchMove={introFinished}
        allowSlideNext={introFinished}
        allowSlidePrev={introFinished}
        direction="horizontal"
        slidesPerView={1}
        mousewheel={{ forceToAxis: true, sensitivity: 1 }}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        modules={[Mousewheel, Keyboard, Pagination]}
        onSwiper={handleSwiperInit}
        onSlideChange={handleSlideChange}
        speed={800}
        style={{ width: '100%', height: '100%' }}
      >
        <SwiperSlide><HeroSlide /></SwiperSlide>
        <SwiperSlide><IntroSeoSlide /></SwiperSlide>
        <SwiperSlide><IntroSemSlide /></SwiperSlide>
        <SwiperSlide><MockGoogleSlide /></SwiperSlide>
        <SwiperSlide><AiShiftSlide /></SwiperSlide>
        <SwiperSlide><SearchIntentGoogleSlide /></SwiperSlide>
        <SwiperSlide><SearchIntentChatGptSlide /></SwiperSlide>
        <SwiperSlide><ActionPlanSlide /></SwiperSlide>
        <SwiperSlide><AuditSlide /></SwiperSlide>
        <SwiperSlide><LocalSeoSlide /></SwiperSlide>
        <SwiperSlide><AnalyticsSlide /></SwiperSlide>
        <SwiperSlide><StructuredDataSlide /></SwiperSlide>
        <SwiperSlide><AiReadinessSlide /></SwiperSlide>
        <SwiperSlide><OptimizationSlide /></SwiperSlide>
        <SwiperSlide><LandingsSlide /></SwiperSlide>
        <SwiperSlide><SocialCalendarSlide /></SwiperSlide>
        <SwiperSlide><SocialMetricsSlide /></SwiperSlide>
        <SwiperSlide><SocialBrandingSlide /></SwiperSlide>
        <SwiperSlide><ClosingSlide /></SwiperSlide>
        <SwiperSlide><PricingSlide /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default App
