
import { Button } from "@/components/ui/button";
import { CartProvider } from "../store/cart-context"
import { useCart } from "../store/cart-context"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"



function Panier() {
    const { cart, removeFromCart } = useCart();

    return (
        <>
            {/* Commentaire : C'est ici que je stocke tout mes produits de panier */}
            <CartProvider>
                <Card>
                    <CardHeader>
                        <CardTitle>Panier</CardTitle>
                        <CardDescription>Garder ici un aperçu de votre panier</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <AlertDialog>
                            <AlertDialogTrigger>Voir mon panier</AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Panier</AlertDialogTitle>
                                    <AlertDialogDescription className="p-6">
                                        {cart.map(product => (
                                            <li key={product.id}>
                                                {product.name} - ${product.price}
                                                <button onClick={() => removeFromCart(product.id)}>Retirer</button>
                                            </li>
                                        ))}
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction>Payer</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </CardContent>
                    <CardFooter>
                        <Button>Payer</Button>
                    </CardFooter>
                </Card>
            </CartProvider>
        </>
    )
}


export default Panier
