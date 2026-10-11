'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  radius: number
  speedY: number
  speedX: number
  opacity: number
  color: string
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const colors = ['#7c3aed', '#f59e0b', '#6d28d9']

    function resize() {
      if (!canvas) return
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
    }

    function createParticles() {
      if (!canvas) return
      const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        speedY: Math.random() * 0.3 + 0.1,
        speedX: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)] || '#7c3aed',
      }))
    }

    function animate() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.y -= p.speedY
        p.x += p.speedX
        if (p.y < -10) {
          p.y = canvas.height + 10
          p.x = Math.random() * canvas.width
        }
        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.shadowBlur = 8
        ctx.shadowColor = p.color
        ctx.fill()
      })
      ctx.globalAlpha = 1

      animationFrameId = requestAnimationFrame(animate)
    }

    resize()
    createParticles()
    animate()

    const handleResize = () => {
      resize()
      createParticles()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
}