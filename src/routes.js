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
    path: '/navigation',
    component: Navigation
  },
  {
    path: '/gallo-pinto',
    component: GalloPinto
  },
  {
    path: '/slideshow',
    component: Slideshow
  },
  {
    path: '/slideshow/:city/:photoId',
    component: Slideshow
  }
]

export default routes
