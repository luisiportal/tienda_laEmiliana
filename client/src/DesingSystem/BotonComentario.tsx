import ComentSVG from '../svg/ComentSVG'

const BotonComentario = () => {
  return (
       <button title="Comentar" className="absolute top-3 right-3 hover:scale-150 transition-all duration-500 cursor-pointer">
          <ComentSVG />
        </button>
  )
}

export default BotonComentario