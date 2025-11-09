"use client"

export default function Page() {

    return (
        <section className="w-full h-screen flex flex-col">
            <iframe 
                src="https://gamejam25.omikkel.com" 
                className="w-full flex-1 border-0"
                style={{ minHeight: '100vh' }}
            />
        </section>
    )
}