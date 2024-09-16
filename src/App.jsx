import { useState } from 'react'
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Bed, 
  Lock, 
  Tv, 
  Sparkles, 
  Volume2, 
  ParkingCircle, 
  Wifi 
} from 'lucide-react'

export const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { title: 'Lujo y Placer', image: '/placeholder.svg?height=400&width=800' },
    { title: 'Confort y Elegancia', image: '/placeholder.svg?height=400&width=800' },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const experienceItems = [
    { Icon: Calendar, label: 'Atención 24/7' },
    { Icon: Bed, label: 'Ofertas por estancias prolongadas' },
    { Icon: Lock, label: 'Seguridad' },
    { Icon: Tv, label: 'TV Satelital' },
    { Icon: Sparkles, label: 'Limpieza impecable' },
    { Icon: Volume2, label: 'Sonido Premium' },
    { Icon: ParkingCircle, label: 'Parqueadero' },
    { Icon: Wifi, label: 'WiFi' },
  ]

  return (
    <div className="max-w-4xl mx-auto p-4">
      <nav className="flex justify-between items-center mb-4">
        <img src="/placeholder.svg?height=50&width=100" alt="Anthea Logo" className="h-12" />
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">Suites</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Bar & Restaurant</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Experiencias</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Promociones</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contáctenos</a>
        </div>
      </nav>

      <div className="relative h-96 mb-8">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-between">
          <button onClick={prevSlide} className="p-2 bg-white rounded-full shadow-md">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={nextSlide} className="p-2 bg-white rounded-full shadow-md">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <h1 className="absolute bottom-4 left-4 text-4xl font-bold text-white">{slides[currentSlide].title}</h1>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Bienvenidos a Anthea Loft</h2>
        <div className="flex space-x-4">
          <div className="flex-1">
            <p className="text-gray-600">
              Ubicado en un entorno natural y apartado del bullicio urbano de la ciudad, Anthea Loft es el lugar ideal para disfrutar de una experiencia única y relajante. Nuestras instalaciones de lujo te permitirán disfrutar una experiencia única, donde el estilo moderno se fusiona con la calidez del hogar.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <img src="/placeholder.svg?height=150&width=150" alt="Amenity 1" className="w-full h-auto rounded" />
            <img src="/placeholder.svg?height=150&width=150" alt="Amenity 2" className="w-full h-auto rounded" />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Experiencias</h2>
        <p className="text-gray-600 mb-4">Donde la pasión no tiene límites</p>
        <div className="grid grid-cols-4 gap-4">
          {experienceItems.map(({ Icon, label }, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-3xl mb-2">
                <Icon className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-sm text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}