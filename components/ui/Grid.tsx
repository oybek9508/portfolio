import { gridItems } from '@/data';
import { BentoGrid, BentoGridItem } from './BentoGrid';

const Grid = () => {
    return (
        <section id='about'>
            <BentoGrid>
                {gridItems.map(
                    ({ id, title, description, className, img, titleClassName, imgClassName, spareImg }, i) => (
                        <BentoGridItem
                            key={id}
                            {...{ id, title, description, className, img, titleClassName, imgClassName, spareImg }}
                        />
                    )
                )}
            </BentoGrid>
        </section>
    );
};

export default Grid;
