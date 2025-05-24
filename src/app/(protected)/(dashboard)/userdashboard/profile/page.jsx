import ProfileClient from '@/components/userDashbord/ProfileComp'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../../../lib/nextAuth'  
export default async function ProfilePage() {
  const session = await getServerSession(authOptions)

  return (
    <div>
      <ProfileClient session={session} />
    </div>
  )
}
