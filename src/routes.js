import Navigation from './pages/Navigation'
import GalloPinto from './pages/GalloPinto'
import Home from './pages/Home'
import Slideshow from './pages/Slideshow'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/travel',
    component: Navigation
  },
  {
    path: '/gallo-pinto',
    component: GalloPinto
  },
  {
    path: '/slideshow',
    component: Slideshow
  }
]

export default routes
