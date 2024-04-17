"use client"

export default function ErrorSnippetCreatePage({error, reset}: {
    error: Error,
    reset: () => void
}) {
    return <>{error.message}</>
}
