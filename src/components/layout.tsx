import { SiteHeader } from './site-header';
import { Footer } from './footer';
import { ReactNode } from 'node_modules/react-resizable-panels/dist/declarations/src/vendor/react';

interface LayoutProps {
    children: ReactNode
    // any props that come into the component
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <div className="flex-1">{children}</div>
                <Footer />
            </div>
        </>
    )
}

export default Layout;



