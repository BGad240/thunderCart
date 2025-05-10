import React from 'react'
import { getServerSession } from 'next-auth';
import { authOptions } from '../../lib/nextAuth';
import SignIn from '@/components/SignIn';
import { redirect } from "next/navigation"
export default async function Page() {
    const session = await getServerSession(authOptions)
    if (session) {
        return redirect('/userdashboard')
    } else {
        return <SignIn />
    }

}
