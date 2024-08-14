import {
    Card
} from "@/components/ui/card"
import { IconArrowAutofitRight, IconCurrencyEuro } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import Img1 from '@/img/data/braille/braillesense6/braillesense_6_vue.jpg'
import Img2 from '@/img/data/LoupeElectronique/loupeclover3/clover1.jpeg'
import Img3 from '@/img/data/montres/montrefemme/montre-parlante-femme-malvoyante-1.jpeg'
import Img4 from '@/img/data/ordinateur/ordissimo/ordissimo1.jpeg'
import ImageLoader from "@/components/ui/image-loader"
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

export default function Categories() {
    return (
        <Card className="w-full border-none rounded-none">
            <div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight ">Achats par catégories</h2>
                    <div className="flex justify-between">
                        <p>Voyez ici les produits les plus demandées sur Voytheia</p>
                        <Link to={""} className="flex italic text-blue-500">
                            Voir plus <IconArrowAutofitRight />
                        </Link>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {/* Image1 */}
                        {/* <div className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-60">
                                <ImageLoader
                                    src={Img1}
                                    alt="Equipement en braille"
                                    imageStyleClass="h-60 w-full object-cover object-center lg:h-full lg:w-full z-0"
                                    preview={''}
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href='#'>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            Braille Sense 6
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">Noir</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">35€</p>
                            </div>
                        </div> */}
                        {/* <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                className="h-40"
                                image={Img1}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Braille Sense 6
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card> */}
                        <Card className="w-86 h-72">
                            {/* <CardCover>
                                <img
                                    src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
                                    srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
                                    loading="lazy"
                                    alt=""
                                />
                            </CardCover> */}
                            <CardCover
                                sx={{
                                    background:
                                        'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',

                                }}
                            />
                            <CardContent sx={{ justifyContent: 'flex-end' }}>
                                <Typography level="title-lg" textColor="#fff">
                                    Braille Sense 6
                                </Typography>
                                <Typography

                                    textColor="neutral.300"
                                >
                                    35€
                                </Typography>
                            </CardContent>
                        </Card>

                        {/* Image 2 */}
                        {/* <div className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-60">
                                <ImageLoader
                                    src={Img2}
                                    alt="Equipement en braille"
                                    imageStyleClass="h-60 w-full object-cover object-center  lg:w-full"
                                    preview={''}
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href='#'>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            Loupe Clover 1
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">Noir</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">27.70€</p>
                            </div>
                        </div> */}

                        <Card className="w-86 h-72">
                            {/* <CardCover>
                                <img
                                    src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
                                    srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
                                    loading="lazy"
                                    alt=""
                                />
                            </CardCover> */}
                            <CardCover
                                sx={{
                                    background:
                                        'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',

                                }}
                            />
                            <CardContent sx={{ justifyContent: 'flex-end' }}>
                                <Typography level="title-lg" textColor="#fff">
                                    Braille Sense 6
                                </Typography>
                                <Typography

                                    textColor="neutral.300"
                                >
                                    35€
                                </Typography>
                            </CardContent>
                        </Card>

                        {/* Image3 */}
                        {/* <div className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-60">
                                <ImageLoader
                                    src={Img3}
                                    alt="Equipement en braille"
                                    imageStyleClass="h-60 w-full object-cover object-center lg:h-full lg:w-full"
                                    preview={''}
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href='#'>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            Montre Parlante
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">Noir</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">55€</p>
                            </div>
                        </div> */}

                        <Card className="w-86 h-72">
                            {/* <CardCover>
                                <img
                                    src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
                                    srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
                                    loading="lazy"
                                    alt=""
                                />
                            </CardCover> */}
                            <CardCover
                                sx={{
                                    background:
                                        'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',

                                }}
                            />
                            <CardContent sx={{ justifyContent: 'flex-end' }}>
                                <Typography level="title-lg" textColor="#fff">
                                    Braille Sense 6
                                </Typography>
                                <Typography

                                    textColor="neutral.300"
                                >
                                    35€
                                </Typography>
                            </CardContent>
                        </Card>

                        {/* Image4 */}
                        <div className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-60">
                                <ImageLoader
                                    src={Img4}
                                    alt="Equipement en braille"
                                    imageStyleClass="h-60 w-full object-cover object-center lg:h-full lg:w-full"
                                    preview={''}
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href='#'>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            Ordissimo
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">Noir</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">123.99€</p>
                            </div>
                        </div>

                        <Card className="w-86 h-72">
                            {/* <CardCover>
                                <img
                                    src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
                                    srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
                                    loading="lazy"
                                    alt=""
                                />
                            </CardCover> */}
                            <CardCover
                                sx={{
                                    background:
                                        'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',

                                }}
                            />
                            <CardContent sx={{ justifyContent: 'flex-end' }}>
                                <Typography level="title-lg" textColor="#fff">
                                    Braille Sense 6
                                </Typography>
                                <Typography

                                    textColor="neutral.300"
                                >
                                    35€
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Card >
    )
}




