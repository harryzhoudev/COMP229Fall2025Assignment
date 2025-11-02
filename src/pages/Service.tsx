import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-regular-svg-icons';
import {
  faCode,
  faMobileScreenButton,
} from '@fortawesome/free-solid-svg-icons';

function Service() {
  const [active, setActive] = useState<number | null>(null);

  const divs = [
    {
      id: 0,
      color: 'bg-[#CBF1F5]',
      title: 'Full-Stack Web Development',
      description:
        'I build dynamic, scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). From concept to deployment, I create responsive, user-friendly solutions tailored to your needs.',
      icon: faCode,
      bgImg: '/webdevphoto.jpg',
    },
    {
      id: 1,
      color: 'bg-[#CBF1F5]',
      title: 'Mobile Applications',
      description:
        'I develop sleek, high-performance Android applications that provide seamless user experiences. Whether it’s a simple utility or a full-featured app, I turn your ideas into functional, polished mobile solutions.',
      icon: faMobileScreenButton,
      bgImg: '/mobiledevphoto.jpg',
    },
    {
      id: 2,
      color: 'bg-[#CBF1F5]',
      title: 'Photography and Videography',
      description:
        'I capture moments with creativity and precision, offering professional photography and videography services. From events to personal projects, I deliver stunning visuals that tell your story.',
      icon: faCamera,
      bgImg: '/photovideophoto.jpg',
    },
  ];

  const handleClick = (index: number) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <div
      className='flex w-full h-screen 
            flex-col 2xl:flex-row -mt-20 overflow-clip'
    >
      {divs.map((div) => (
        <div
          key={div.id}
          onClick={() => handleClick(div.id)}
          style={{
            backgroundImage: `url(${div.bgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className={`
            transition-all duration-500
            cursor-pointer
            flex items-center justify-center
            text-white font-bold text-xl
            relative
            ${div.color}
            flex-1
            ${active === div.id ? 'flex-5' : 'flex-1'}
          `}
        >
          <div
            className={`transition-all duration-500 absolute inset-0 backdrop-blur-sm  ${
              active === div.id ? 'bg-black/60' : 'bg-black/20'
            } `}
          ></div>
          {/* Icon */}
          <span
            className={`transition-opacity duration-500 absolute top-1/2 left-1/2 text-9xl transform -translate-x-1/2 -translate-y-1/2 ${
              active === div.id ? 'opacity-15' : 'opacity-100'
            }`}
          >
            <FontAwesomeIcon icon={div.icon} />
          </span>

          {/* Text only shows when active */}
          <div
            className={`absolute top-1/2 left-1/2 transition-opacity duration-500 text-center px-4 transform -translate-x-1/2 -translate-y-1/2 w-200 ${
              active === div.id ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h2 className='font-dm text-3xl text-[#66b4b9] text-left px-20 '>
              {div.title}
            </h2>
            <p className='font-dm text-left px-20 text-[#E3FDFD] max-w-200 mt-3 '>
              {div.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Service;
