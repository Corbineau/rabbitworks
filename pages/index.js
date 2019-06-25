
import Header from '../comps/header';
import Layout from '../comps/layout';
import Link from 'next/link';

export default function Index() {
    return (
        <Layout>
            <Header />
            <p>Hello Next.js</p>

            <Link href="/about">
                <button>Go to About Page</button>
            </Link>
        </Layout>
    );
}
