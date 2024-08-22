import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { marques, couleurs, categories } from './multicategory'



const SelectMenu = () => {

    const [selectedFilters, setSelectedFilters] = useState([]);
    // const [filteredProducts, setFilteredProducts] = useState(products);
    // let filters = ["Catégories", "Prix", "Marques", "Couleurs"];

    const combinedList = [marques, couleurs, categories];

    // const handleFilterSelectChange = (event) => {
    //     setSelectedFilters(event.target.value)
    // }

    // const filteredItem = combinedList.find((item) => item.id === parseInt(selectedFilters));

    return (
        <div className='p-6 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto'>

            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Marques" />
                </SelectTrigger>
                <SelectContent>
                    {marques.map((marque) => (
                        <SelectItem value={marque.name}>{marque.title}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Catégories" />
                </SelectTrigger>
                <SelectContent>
                    {categories.map((categorie) => (
                        <SelectItem value={categorie.name}>{categorie.title}</SelectItem>
                    ))}
                </SelectContent>

            </Select>

            {/* <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Prix" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select> */}

            {/* <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Marques" />
                </SelectTrigger>
                <SelectContent>
                    {marques.map((marque) => (
                        <SelectItem value={marque.name}>{marque.title}</SelectItem>
                    ))}
                </SelectContent>
            </Select> */}

            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Couleurs" />
                </SelectTrigger>
                <SelectContent>
                    {couleurs.map((couleur) => (
                        <SelectItem value={couleur.name}>{couleur.title}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectMenu