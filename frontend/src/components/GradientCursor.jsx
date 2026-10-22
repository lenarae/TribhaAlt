import { useEffect, useState } from 'react'

export default function InteractiveGradient() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    // Smoothly interpolate position for fluid motion
    let targetX = 50
    let targetY = 50
    let currentX = 50
    let currentY = 50
    let animationFrameId

    const updatePosition = () => {
      // Ease current position towards target position
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08

      setMousePos({ x: currentX, y: currentY })
      animationFrameId = requestAnimationFrame(updatePosition)
    }

    const handlePointerMove = (e) => {
      const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX)
      const clientY = e.clientY ?? (e.touches && e.touches[0]?.clientY)

      if (clientX !== undefined && clientY !== undefined) {
        // Convert cursor pixel coordinates into percentages
        targetX = (clientX / window.innerWidth) * 100
        targetY = (clientY / window.innerHeight) * 100
      }
    }

    window.addEventListener('mousemove', handlePointerMove)
    window.addEventListener('touchmove', handlePointerMove)
    
    animationFrameId = requestAnimationFrame(updatePosition)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handlePointerMove)
      window.removeEventListener('touchmove', handlePointerMove)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Dynamic Cursor-following Radial Glow */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(
            600px circle at ${mousePos.x}% ${mousePos.y}%, 
            rgba(159, 221, 250, 0.22) 0%, 
            rgba(159, 134, 235, 0.15) 35%, 
            rgba(148, 218, 160, 0.08) 65%, 
            transparent 100%
          )`,
        }}
      />

      {/* Ambient background accent blurs */}
      <div className="absolute -right-40 -top-32 h-[32rem] w-[32rem] rounded-full bg-[#4775E8]/10 blur-3xl" />
      <div className="absolute left-[20%] top-[40%] h-[28rem] w-[28rem] rounded-full bg-[#7650E8]/10 blur-3xl" />
      <div className="absolute -left-32 top-[70%] h-[32rem] w-[32rem] rounded-full bg-[#55C96B]/10 blur-3xl" />
    </div>
  )
}