import Image from 'next/image'
import SadCamel from './../public/images/ocaml-sad.png' // place the image in the public folder or import as needed

export default function NotFound() {
  return (
    <section className="flex flex-col items-center text-center p-8">
      <Image
        src={SadCamel}
        alt="Sad Camel"
        width={300}
        height={300}
        priority
      />
      <h1 className="mt-8 text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-2 text-lg text-gray-600">
        The page you are looking for does not exist.
      </p>
    </section>
  )
}
