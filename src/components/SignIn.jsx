'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'

export default function SignIn() {
    const [clientReady, setClientReady] = useState(false)

    useEffect(() => {
        setClientReady(true)
    }, [])

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-1 md:grid-cols-2 bg-white/10 backdrop-blur-md rounded-[30px] shadow-2xl overflow-hidden w-full max-w-[900px] border border-white/20"
            >
                {/* الصورة */}
                <motion.div
                    className="hidden md:block"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Image
                        src="/images/loginImage.jpg"
                        width={500}
                        height={500}
                        alt="Signup visual"
                        className="h-full w-full object-cover"
                        priority
                    />
                </motion.div>

                {/* المحتوى */}
                <div className="p-10 flex flex-col justify-center items-center text-center text-white">
                    <motion.h1
                        className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        World Of Markets
                    </motion.h1>

                    <motion.p
                        className="text-white/80 mb-8 text-base md:text-lg max-w-xs"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Create your account with Google and start exploring amazing opportunities!
                    </motion.p>

                    <motion.button
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-lg border border-white/30 px-8 py-3 rounded-full text-white font-semibold hover:bg-white/30 transition-all duration-300 shadow-lg"
                        aria-label="Sign up with Google"
                        onClick={() => signIn("google", { redirect: true, callbackUrl: '/' })}
                    >
                        <FcGoogle size={24} className="mr-3 inline" />
                        Continue with Google
                    </motion.button>
                </div>
            </motion.div>
        </div>
    )
}
