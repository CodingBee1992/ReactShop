import {  BrowserRouter, Route, Routes  } from 'react-router'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import ProductPage from './components/ProductPage'
import PopularBlog from './components/PopularBlog'
import TopSellers from './components/TopSellers'

const App = () => {
	return (
		<BrowserRouter>
			<div className="flex h-screen">
				<Sidebar />

				<div className="rounded w-full flex justify-center flex-wrap">
					<Routes>
						<Route path="/ReactShop/" element={<MainContent/>} />
						<Route path="/product/:id" element={<ProductPage/>} />
					</Routes>

					{/* <MainContent />
					<ProductPage /> */}

					<div>
						<TopSellers />
						<PopularBlog />
					</div>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
