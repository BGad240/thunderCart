import React from 'react'
import { getProductId } from '@/utils/api/api'
import Details from '@/components/Details'

export default async function ProductPage({ params, searchParams }) {
    const { id } = params
    try {
        const res = await getProductId(id)
        if (res.length === 0) {
            return (<>
                <p>product not here</p>
            </>)
        }
        return (
            <Details product={res} />
        )
    } catch (error) {
        console.error(error)
    }
}
