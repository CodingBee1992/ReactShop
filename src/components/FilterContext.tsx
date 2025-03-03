import { createContext, ReactNode, useState } from 'react'

interface FilterContextProps {
	searchQuerry: string
	setSearchQuerry: (query: string) => void
	selectedCategory: string
	setSelectedCategory: (category: string) => void
	minPrice: number | undefined
	setMinPrice: (price: number | undefined) => void
	maxPrice: number | undefined
	setMaxPrice: (price: number | undefined) => void
	keyword: string
	setKeyword: (keyword: string) => void
}
// interface ProviderProps{
// 	children: ReactNode
// }

const FilterContext = createContext<FilterContextProps | undefined>(undefined)

export const FilterProvider: React.FC<{children: ReactNode}> = ({ children, }) => {
	const [searchQuerry, setSearchQuerry] = useState<string>('')
	const [selectedCategory, setSelectedCategory] = useState<string>('')
	const [minPrice, setMinPrice] = useState<number | undefined>(undefined)
	const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined)
	const [keyword, setKeyword] = useState<string>('')

	return (
		<FilterContext.Provider
			value={{
				searchQuerry,
				setSearchQuerry,
				selectedCategory,
				setSelectedCategory,
				minPrice,
				setMinPrice,
				maxPrice,
				setMaxPrice,
				keyword,
				setKeyword,
			}}>
			{children}
		</FilterContext.Provider>
	)
}



export {
	// FilterProvider,
	FilterContext,
}