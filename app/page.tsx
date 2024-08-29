import Hero from '@/components/Hero';
import RecentProjects from '@/components/RecentProjects';
import Approach from '@/components/ui/Approach';
import Clients from '@/components/ui/Clients';
import Experience from '@/components/ui/Experience';
import { FloatingNav } from '@/components/ui/FloatingNav';
import Footer from '@/components/ui/Footer';
import Grid from '@/components/ui/Grid';
import { navItems } from '@/data';

export default function Home() {
    return (
        <main className='overflow-clip relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5'>
            <div className='max-w-7xl w-full'>
                <FloatingNav navItems={navItems} className='' />
                <Hero />
                <Grid />
                <RecentProjects />
                <Clients />
                <Experience />
                <Approach />
                <Footer />
            </div>
        </main>
    );
}
