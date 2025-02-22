import Layout from '@/components/layout'

const Register = () => {
    return (
        <Layout>
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-indigo-600">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page non trouvée</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Nous travaillons dur pour que vous puissiez enfin vous connecter. En attendant, vous pouvous continuez vos achats.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/home"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Retourner à la page d'accueil
                        </a>
                        <a href="#" className="text-sm font-semibold text-gray-900">
                            Contacter le support <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Register