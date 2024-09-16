import {ChevronLeft, ChevronRight, Calendar, Bed, Lock, Tv, Sparkles, Volume2, ParkingCircle, Wifi} from 'lucide-react'
import { useState } from 'react'
import './index.css'
import Wine from './assets/images/wine.jpg'

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      title: 'Discover Samantha',
      image: './assets/react.svg',
      icon: <Bed size={24} />,
    },
    {
      id: 2,
      title: 'Book a Visite',
      image: './assets/react.svg',
      icon: <Calendar size={24} />,
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }

  const experienceItems = [
    {
      Icon: Calendar, label: 'Atención 24/7'
    },
    {
      Icon: Bed, label: 'Ofertas por estancias prolongadas'
    },
    {
      Icon: Lock, label: 'Seguridad'
    },
    {
      Icon: Tv, label: 'Tv satelital'
    },
    {
      Icon: Sparkles, label: 'Limpieza impecable'
    },
    {
      Icon: Volume2, label: 'Sonido premium'
    },
    {
      Icon: ParkingCircle, label: 'Parqueadero'
    },
    {
      Icon: Wifi, label: 'Wi-Fi'
    }
    
  ]

  return (
    
    <div className='max-w-4xl mx-auto p-4'>
        <div>
      <nav className='flex justify-between items-center mb-4'>
        <img src="" alt="Anthea Logo" className='h-12' />
        <div className='flex space-x-4'>
          <a href="#" className='text-gray-600 hover:text-gray-900'>Suites</a>
          <a href="#" className='text-gray-600 hover:text-gray-900'>Bar & Restaurant</a>
          <a href="#" className='text-gray-600 hover:text-gray-900'>Especiales</a>
          <a href="#" className='text-gray-600 hover:text-gray-900'>Promociones</a>
          <a href="#" className='text-gray-600 hover:text-gray-900'>Contáctanos</a>
        </div>
      </nav>

      <div className='relative h-96 mb-8'>
        <img
        src={slides[currentSlide].image}
        alt={slides[currentSlide].title}
        className='w-full h-full object-cover rounded-lg' />
      </div>
      <div className='absolute inset-0 flex items-center justify-between'>
        <button onClick={prevSlide}>
          <ChevronLeft size={24} className='text-gray-600 hover:text-gray-900 h-6 w-6' />
        </button>
        <button onClick={nextSlide}>
          <ChevronRight size={24} className='text-gray-600 hover:text-gray-900 h-6 w-6' onClick={nextSlide} />
        </button>
      </div>
      <h1 className='absolute bottom-4 left-4 text-4xl font-bold text-white'>{slides[currentSlide].title}</h1>
  </div>
    <div className='mb-8'>
      <h2 className='text 2xl font-semibold mb-4'>
        Bienvenidos a Anthea Loft
      </h2>
      <div className='flex space-x-4'>
        <div className='flex-1'>
          <p className='text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laudantium aliquam qui dolore quis veniam praesentium ab mollitia ullam quasi, deleniti perferendis explicabo doloribus alias iure beatae consequatur voluptatum totam.
          </p>
        </div>
        <div className='flex-1 grid grid-cols-2 gap-4'>
          <img src={Wine} alt="Amenity 2" className='w-full h-auto rounded-3xl' />
          <img src="" alt="Amenity 1" className='w-full h-auto rounded-3xl' />
        </div>
      </div>
    </div>
    
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Experiencias</h2>
      <p className='text-gray-600 mb-4'>Donde la pasión no tiene límites</p>
      <div className='grid grid-cols-4 gap-4'>
        {experienceItems.map(({Icon, label}, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className='bg-green-100 p-3 rounded mb-2'>
              <Icon className='h-6 w-6 text-green-600' />
              <span className='text-sm text-center'>
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  )
}

export default App