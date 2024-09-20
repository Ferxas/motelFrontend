const SecondPart = () => {
  return (
    <div className='max-x-2xl mx-auto p-4 bg-gray-100'>
        <h1 className='text-3xl font-bold mb-4 text-center'>Nuestras Suites</h1>
        <p className='text-sm mb-6 text-center'>
            Disfruta de unas experiencias exclusivas con nuestras suites.
        </p>

        <div className='flex justify-between mb-6'>
            <div className='w-[48%] bg-white rounded-lg overflow-hidden shadow-md'>
                <img src="" alt="Suite sencilla" className='w-full h-32 object-cover' />
                <div className='p-4'>
                    <h3 className='font-semibold mb-2'>Suite sencilla</h3>
                    <button className='bg-green-600 text-white px-4 py-2 rounded'>Reservar</button>
                </div>
            </div>
            <div className='w-[48%] bg-white rounded-lg overflow-hidden shadow-md'>
                <img src="" alt="" className='w-full h-32 object-cover' />
                <div className='p-4'>
                    <h3 className='font-semibold mb-2'>Suite Jacuzzi</h3>
                    <button className='bg-green-600 text-white px-4 py-2 rounded'>Ver más</button>

                </div>
            </div>
        </div>
        <div className='mb-6'>
            <h2 className='text-2xl font-bold mb-4'>Promociones</h2>
            <div className='bg-white rounded-lg overflow-hidden shadow-md mb-4'>
                <img src="" alt="Promociones" className='w-full h-32 object-cover' />
            </div>
        </div>
        <div className='flex justify-between'>
            <div className='w-[31%] bg-white rounded-lg overflow-hidden shadow-md'>
                <img src="" alt="2x1" className='w-full h-24 object-cover' />
                <div className='p-2'>
                    <h3 className='font-semibold text-sm'>2X1</h3>
                    <p>En todas las habitaciones</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SecondPart;