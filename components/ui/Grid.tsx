import { BentoGrid, BentoGridItem } from './BentoGrid';

const Grid = () => {
    return (
        <section id='about'>
            <BentoGrid>
                {[{ title: 'Title', description: 'desc', id: 1 }].map((item, i) => (
                    <BentoGridItem id={item.title} key={item.id} title={item.title} description={item.description} />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid;
