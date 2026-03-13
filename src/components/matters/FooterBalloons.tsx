"use client"

import { useEffect, useRef } from "react"
import Matter from "matter-js"

export default function FooterBalloons() {

    const sceneRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {

        const Engine = Matter.Engine
        const Render = Matter.Render
        const Runner = Matter.Runner
        const Bodies = Matter.Bodies
        const Composite = Matter.Composite
        const Constraint = Matter.Constraint
        const Events = Matter.Events

        const engine = Engine.create()

        engine.world.gravity.y = -0.0015
        engine.world.gravity.x = 0

        const width = window.innerWidth
        const height = 720

        const render = Render.create({
            element: sceneRef.current!,
            engine,
            options: {
                width,
                height,
                wireframes: false,
                background: "transparent"
            }
        })

        const balloons: Matter.Body[] = []

        for (let i = 0; i < 3; i++) {

            const balloon = Bodies.circle(
                width * (0.3 + i * 0.2),
                height -140,
                35,
                {
                    frictionAir: 0.03,
                    restitution: 0.8,
                    render: {
                        
                        sprite: {
                            texture: "vectors/balloon.svg",
                            xScale: 1,
                            yScale: 1
                        }
                    }
                }
            )

            const string = Constraint.create({
                pointA: {
                    x: width * (0.3 + i * 0.2),
                    y: height - 10
                },
                bodyB: balloon,
                pointB: { x: 0, y: 45 },   // attach to bottom of balloon
                stiffness: 0.9,
                length: 320,
                damping: 0.9,
                render: {
                    strokeStyle: "#e5e5e5",
                    lineWidth: 1
                }
            })

            balloons.push(balloon)

            Composite.add(engine.world, [balloon, string])
        }

        // gentle floating force
        let time = 0

        Events.on(engine, "beforeUpdate", () => {

            time += 0.02

            balloons.forEach((balloon, i) => {

                const sway = Math.sin(time + i) * 0.0003

                Matter.Body.applyForce(
                    balloon,
                    balloon.position,
                    {
                        x: sway,
                        y: -0.0005
                    }
                )

            })

        })

        // mouse wind effect
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX / width - 0.5

            balloons.forEach((balloon) => {

                Matter.Body.applyForce(
                    balloon,
                    balloon.position,
                    {
                        x: x * 0.005,
                        y: -0.0002
                    }
                )

            })
        }

        window.addEventListener("mousemove", handleMouseMove)

        Render.run(render)

        const runner = Runner.create()
        Runner.run(runner, engine)

        return () => {
            Render.stop(render)
            Runner.stop(runner)
            window.removeEventListener("mousemove", handleMouseMove)
        }

    }, [])

    return (
        <div
            ref={sceneRef}
            className="absolute w-full overflow-hidden inset-x-0 bottom-22  pointer-events-none"
        />
    )
}