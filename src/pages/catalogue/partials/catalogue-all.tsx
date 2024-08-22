import React from 'react'
import { Button } from '@/components/ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { CartProvider } from '@/pages/store/cart-context'
import Collection from '@/pages/collection/collection'
import Panier from '@/pages/panier/panier'
import SelectMenu from '@/pages/collection/partials/selectmenu'


const SHEET_SIDES = ["left"] as const
type SheetSide = (typeof SHEET_SIDES)[number]


const CatalogueAll = () => {

    const [goal, setGoal] = React.useState(350)

    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }

    //     const [product, setProduct] = useState(collectionData);
    //     const handleBtns = (e) => {
    //     let word=e.target.value;

    //     if(word === "All"){
    //       setCategory(collectionData)
    //     }
    //     else if(word === "Cars") {
    //       const filtered = collectionData.filter(item=>item.kind === "Cars");
    //       setCategory(filtered)
    //     }
    //     else if(word === "Views") {
    //       const filtered = collectionData.filter(item=>item.kind === "Views");
    //       setCategory(filtered)
    //     }
    //   }


    return (
        <div>
            <div>
                <CartProvider>
                    <div className='flex flex-col'>
                        <Panier />
                        <SelectMenu />
                        <Collection />
                    </div>
                </CartProvider>
            </div>
        </div>
    )
}

export default CatalogueAll