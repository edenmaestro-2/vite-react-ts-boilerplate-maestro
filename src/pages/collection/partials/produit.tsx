import CatalogueDetail from "@/pages/catalogue-detail/catalogue-detail";
import image1 from "@/img/data/braille/braillesense6/braillesense_6_vue.jpg"
import image2 from "@/img/data/LoupeElectronique/loupeclover3/clover2.jpeg"
import image3 from "@/img/data/lunettesloupes/loupeled/loupe-de-lecture-mains-libres-led-1.jpeg"
import image4 from "@/img/data/montres/montrefemme/montre-parlante-femme-malvoyante-1.jpeg"
import image5 from "@/img/data/ordinateur/ordissimo/ordissimo1.jpeg"
import image6 from "@/img/data/smartphones/android/samsunggalaxys21ultra/galaxy1.jpeg"
import image7 from "@/img/data/tablettes/facitolab/samsung-facilotab-l-galaxy-2.jpeg"
import image8 from "@/img/data/telephonepoursenior/cl8700/telephone-clapet-CL8700-3.jpeg"

export const products = [
    {
        id: 1,
        name: 'Braille Sense',
        href: <CatalogueDetail />,
        imageSrc: image1,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Clover',
        href: <CatalogueDetail />,
        imageSrc: image2,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Loupe de lecture',
        href: <CatalogueDetail />,
        imageSrc: image3,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    }, {
        id: 4,
        name: 'Montre Parlante',
        href: <CatalogueDetail />,
        imageSrc: image4,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    }, {
        id: 5,
        name: 'Ordissimo',
        htmlFor: <CatalogueDetail />,
        imageSrc: image5,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 6,
        name: 'S24 Ultra',
        htmlFor: <CatalogueDetail />,
        imageSrc: image6,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 7,
        name: 'Facilo Tab',
        htmlFor: <CatalogueDetail />,
        imageSrc: image7,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 8,
        name: 'CL8700',
        htmlFor: <CatalogueDetail />,
        imageSrc: image8,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
]

