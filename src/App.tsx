import { useState } from 'react'
import './App.css'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedRating, setSelectedRating] = useState<number>()

  function handleSubmit() {
    setIsSubmitted(true)
  }

  function handleSelectedRating(rating: number) {
    setSelectedRating(rating)
  }
  
  return (
    <div className='flex justify-center items-center'>
      {isSubmitted
        ? <div className='flex flex-col items-center max-h-fit max-w-sm modal absolute p-8 rounded-3xl'>
            <div className=' rounded-full p-4 flex max-w-max mb-3.5'>
              <img src='/Interactive-Rating-Component/illustration-thank-you.svg' width={160} height={160} />
            </div>
            <div className='bg-gray-800 text-amber-600 p-1 px-4 mb-6 rounded-3xl text-base'>
              You selected {selectedRating} out of 5
            </div>
            <div className='flex flex-col items-center'>
              <h1 className='text-2xl font-medium my-3'>Thank you!</h1>
              <p className='text-sm leading-relaxed text-center'>We appreciate you taking the time to give a rating.</p>
              <p className='text-sm leading-relaxed text-center'>If you ever need more support, don't hesitate to get in touch!</p>
            </div>
          </div>
        : <form onSubmit={handleSubmit} className='flex flex-col max-h-fit max-w-sm modal absolute p-8 rounded-3xl'>
            <div className='bg-gray-700 rounded-full p-4 flex max-w-max mb-4'>
              <img src='/Interactive-Rating-Component/icon-star.svg' width={18} height={18} />
            </div>
            <div>
              <div className='mb-6'>
                <h1 className='text-2xl font-medium my-4'>How did we do?</h1>
                <p className='text-base leading-relaxed'>Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!</p>
              </div>
          </div>
          <div className='flex justify-between mb-6'>
            {[1, 2, 3, 4, 5].map((rating) => (
              <button onClick={() => handleSelectedRating(rating)} type='button' className='h-12 w-12 rounded-full background bg-gray-700 hover:bg-slate-500 hover:text-white focus:bg-amber-600 focus:text-white transition-colors duration-500'>{rating}</button>
            ))}
            </div>
          <div className='flex justify-center items-center'>
            <button disabled={selectedRating === undefined} className='flex grow items-center h-12 justify-center rounded-full text-xl bg-amber-600 hover:bg-white hover:text-amber-600 transition-colors duration-300'>Submit</button>
            </div>
        </form>}
    </div>
  )
}

export default App;