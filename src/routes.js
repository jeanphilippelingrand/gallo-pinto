import Navigation from './pages/Navigation'
import About from './pages/About'
import Home from './pages/Home'
import Slideshow from './pages/Slideshow'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/travel/:country',
    component: Navigation
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/slideshow/:country/:city/:id',
    component: Slideshow
  }
]

export default routes
