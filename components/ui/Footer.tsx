import { socialMedia } from '@/data';
import { FaLocationArrow } from 'react-icons/fa';
import MagicButton from './MagicButton';

const Footer = () => {
    return (
        <footer className='w-full pb-10 mb-[50px] md:mb-5' id='contact'>
            <div className='flex flex-col items-center '>
                <h1 className='heading lg:max-w-[45vw] text-white-200'>
                    Ready to take <span className='text-purple'>your outside digital presence to the next level?</span>
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>
                    Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
                </p>
                <a href='mailto:oybektoshmatov95@gmail.com'>
                    <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position='right' />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <div className='flex items-center md:gap-3 gap-6 md:mb-0 mb-5'>
                    {socialMedia.map((profile) => (
                        <div
                            key={profile.id}
                            className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
                        >
                            <img src={profile.img} alt='social-profile' width={20} height={20} />
                        </div>
                    ))}
                </div>
                <p className='md:text-base text-sm md:font-normal font-light text-white-200'>Copyright © 2024 Oybek</p>
            </div>
        </footer>
    );
};

export default Footer;
