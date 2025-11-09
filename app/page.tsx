"use client"
import OCaml from 'app/components/ocaml'

export default function Page() {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Welcome to OCaml's Universe
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-500">
          Press <kbd className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded text-xs font-mono">Space</kbd> to make OCaml dance!
        </p>
      </div>
      <div className="flex justify-center">
        <OCaml/>
      </div>
    </section>
  )
}
