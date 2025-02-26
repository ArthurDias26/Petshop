'use client'

import { useEffect } from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function aosInit() {

    useEffect(() => {
        Aos.init({
            duration: 500,
            once: true
        })
    }, [])

  return null
}
