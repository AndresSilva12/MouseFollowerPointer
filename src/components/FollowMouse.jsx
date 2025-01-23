import { useEffect, useState } from 'react'

function FollowMouse(){
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({X: 0 , Y: 0})

    useEffect(() => {
        console.log('efecto', enabled)

        const handleMove = (event) => {
        const {clientX, clientY} = event
        setPosition({X: clientX, Y: clientY})
        }

        if (enabled) {
        window.addEventListener('pointermove', handleMove)
        }

        return () => {
        window.removeEventListener('pointermove', handleMove)
        }
        
    }, [enabled])

    return (
        <>
        <div style={{
            position: 'absolute',
            backgroundColor: '#09f',
            borderRadius: '50%',
            opacity: 0.8,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
            transform: `translate(${position.X}px, ${position.Y}px)`
            }}>
          </div>
          <div className='flex flex-col justify-center items-center w-full'>
            <h3>Proyecto 3</h3>
            <button className='p-4 bg-blue-300 text-white ' onClick={()=> {setEnabled(!enabled)}}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
          </div>
          </>
    )
}

export default FollowMouse