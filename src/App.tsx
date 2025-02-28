import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import ProductPage from './components/ProductPage'
import PopularBlog from './components/PopularBlog'
import TopSellers from './components/TopSellers'

const App = () => {
	return (
		<Router>
			<div className="flex h-screen">
				<Sidebar />

				<div className="rounded w-full flex justify-center flex-wrap">
					<Routes>
						<Route path="/" element={<MainContent/>} />
						<Route path="/product/:id" element={<ProductPage/>} />
					</Routes>

					<MainContent />
					<ProductPage />

					<div>
						<TopSellers />
						<PopularBlog />
					</div>
				</div>
			</div>
		</Router>
	)
}

export default App
