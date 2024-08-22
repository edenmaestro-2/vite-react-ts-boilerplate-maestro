import Layout from "@/components/layout"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Img1 from "@/img/data/LoupeElectronique/loupeclover3/clover1.jpeg"




function Teste(_props:
    { message: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }
) {
    return (
        <Layout>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
                <Card className="w-[300px] h-auto">
                    <CardContent className="relative">
                        <div className="relative ">
                            <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                                <h1 className="tracking-wider" >Title</h1>
                                <p className="mx-auto">Description</p>
                            </a>
                            <a href="#" className="relative">
                                <div className="h-48 flex flex-wrap content-center">
                                    <img src={Img1} className="mx-auto h-48 " alt="" />
                                </div>
                            </a>
                        </div>
                    </CardContent>
                </Card>
            </div> */}

            <Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
                        <Card className="w-[300px] h-auto">
                            <CardContent className="relative">
                                <div className="relative ">
                                    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                                        <h1 className="tracking-wider" >Title</h1>
                                        <p className="mx-auto">Description</p>
                                    </a>
                                    <a href="#" className="relative">
                                        <div className="h-48 flex flex-wrap content-center">
                                            <img src={Img1} className="mx-auto h-48 " alt="" />
                                        </div>
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="w-[300px] h-auto">
                            <CardContent className="relative">
                                <div className="relative ">
                                    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                                        <h1 className="tracking-wider" >Title</h1>
                                        <p className="mx-auto">Description</p>
                                    </a>
                                    <a href="#" className="relative">
                                        <div className="h-48 flex flex-wrap content-center">
                                            <img src={Img1} className="mx-auto h-48 " alt="" />
                                        </div>
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="w-[300px] h-auto">
                            <CardContent className="relative">
                                <div className="relative ">
                                    <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                                        <h1 className="tracking-wider" >Title</h1>
                                        <p className="mx-auto">Description</p>
                                    </a>
                                    <a href="#" className="relative">
                                        <div className="h-48 flex flex-wrap content-center">
                                            <img src={Img1} className="mx-auto h-48 " alt="" />
                                        </div>
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>


        </Layout>
    )
}


export default Teste
