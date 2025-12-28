



const CardLargaItem = () => {
  return (
    <div className='bg-neutral-200 rounded-xl p-2 relative'>
        <div className='bg-green-500 rounded-xl absolute -top-2 right-2 w-10 h-10 flex justify-center items-center font-bold'>4</div>
        <img className='w-8 h-8' src="/svg/facturas.svg" alt="Facturas" />
        
        
        <h2 className='font-bold text-lg'>Facturas</h2>
    <p className='text-xs font-light'>Gestiona las facturas que llegan al sistema</p></div>
  )
}

export default CardLargaItem