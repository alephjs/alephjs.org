import React from "https://esm.sh/react"
import {useRouter} from "https://deno.land/x/aleph/mod.ts"

export default function Doc() {
    const {params} = useRouter()

    return (
        <h1>{params.rest}</h1>
    )
}