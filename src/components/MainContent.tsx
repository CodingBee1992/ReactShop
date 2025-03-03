import { useEffect, useState } from 'react'

import { LuTally3 } from 'react-icons/lu'
import axios from 'axios'
import BookCard from './BookCard'
import useFilter from './UseFilter'


const MainContent = () => {
	const { searchQuerry, selectedCategory, minPrice, maxPrice, keyword } = useFilter()
	
	const [products, setProducts] = useState<any[]>([])
	const [filter, setFilter] = useState<string>('all')
	const [currentPage, setCurrentPage] = useState(1)
	const [dropDownOpen, setDropDownOpen] = useState(false)
	const itemsPerPage = 12

	useEffect(() => {
		let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`

		if (keyword) {
			url = `https://dummyjson.com/products/search?q=${keyword}`
		}

		axios
			.get(url)
			.then(response => {
				setProducts(response.data.products)
			})
			.catch(error => {
				console.log('Error fetching data', error)
			})
	}, [currentPage, keyword])

	let filteredProducts = products
	const getFilteredProducts = (filter: string) => {
		if (selectedCategory) {
			filteredProducts = filteredProducts.filter(product => product.category === selectedCategory)
		}

		if (minPrice !== undefined) {
			filteredProducts = filteredProducts.filter(product => product.price >= minPrice)
		}
		if (maxPrice !== undefined) {
			filteredProducts = filteredProducts.filter(product => product.price <= maxPrice)
		}

		if (searchQuerry) {
			filteredProducts = filteredProducts.filter(product =>
				product.title.toLowerCase().includes(searchQuerry.toLowerCase())
			)
		}

		switch (filter) {
			case 'expensive':
				return filteredProducts.sort((a, b) => b.price - a.price)
			case 'cheap':
				return filteredProducts.sort((a, b) => a.price - b.price)
			case 'popular':
				return filteredProducts.sort((a, b) => b.rating - a.rating)

			default:
				return filteredProducts
		}
	}

	const totalProducts = 100
	const totalPages = Math.ceil(totalProducts / itemsPerPage)

	const handlePageChange = (page: number) => {
		if (page > 0 && page <= totalPages) {
			setCurrentPage(page)
		}
	}

	const getPagginationButtons = () => {
		const buttons: number[] = []

		let startPage = Math.max(1, currentPage - 2)

		let endPage = Math.min(totalPages, currentPage + 2)

		if (currentPage - 2 < 1) {
			endPage = Math.min(totalPages, endPage + (2 - currentPage - 1))
		}

		if (currentPage + 2 > totalPages) {
			startPage = Math.min(1,startPage - (2 - totalPages - currentPage))
		}

		for(let page = startPage; page <= endPage; page++){
			buttons.push(page)
		}
		return buttons
	}

	getFilteredProducts(filter)
	

	return (
		<section className=" xl:w-[55rem] mr-[10rem] lg:w-[45rem] sm:w-[40rem] xs:w-[20rem] p-5">
			<div className="mb-5">
				<div className="flex flex-col sm:flex-row justify-between items-center">
					<div className="relative mb-5 mt-5">

						<button onClick={()=>setDropDownOpen(!dropDownOpen)} className="border px-4 py-2 rounded-full flex items-center">
							<LuTally3 className="mr-2" />

							{filter === 'all' ? 'Filter' : filter.charAt(0).toLowerCase() + filter.slice(1)}
						</button>

						{dropDownOpen && (
							<div className="absolute bg-white border border-gray-300 rounded mt-2 w-full sm:w-40">
								<button
									onClick={() => setFilter('cheap')}
									className="block px-4 py-2 w-full text-left hover:bg-amber-500">
									Cheap
								</button>
								<button
									onClick={() => setFilter('expensive')}
									className="block px-4 py-2 w-full text-left hover:bg-amber-500">
									Expensive
								</button>
								<button
									onClick={() => setFilter('popular')}
									className="block px-4 py-2 w-full text-left hover:bg-amber-500">
									Popular
								</button>
							</div>
						)}
					</div>
				</div>

				<div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-5">
					{/* BookCard */}

					{filteredProducts.map(product => (
						<BookCard 
							key={product.id}
							id={product.id}
							title={product.title}
							image={product.thumbnail}
							price={product.price}
						/>
					))}
				</div>

				<div className="flex flex-col sm:flex-row justify-between items-center mt-5">
					{/* Previous Page */}
					<button
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className="border px-4 py-2 mx-2 rounded-full">
						Previous
					</button>

					{/* Number of page */}
					<div className="flex flex-wrap justify-center">
						{getPagginationButtons().map(page=>(
							<button key={page} onClick={()=> handlePageChange(page)} className={`border px-4 py-2 mx-1 rounded-full & ${page === currentPage ? 'bg-black text-white' : ''}`}>{page}</button>
						))}
					</div>

					{/* Next Page */}
					<button
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className="border px-4 py-2 mx-2 rounded-full">
						Next
					</button>
				</div>
			</div>
		</section>
	)
}

export default MainContent
