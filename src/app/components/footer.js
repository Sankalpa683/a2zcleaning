import React from 'react'

const footer = () => {
  return (
    <>
    <section className='py-4 pb-6 h-fit z-50 absolute w-full'>
        <div className='flex flex-col px-2 lg:px-8 items-center justify-between'>
            <div className='pb-2'>
                <img src="/footer.png" width={210}/>
            </div>
            <div className='flex items-center justify-center text-center w-full break-all text-gray-500'>
                <p>Copyright &copy; 2024 <span className='text-[#007aff]'>A2Z Cleaning Service</span>. All Rights Reserved.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default footer