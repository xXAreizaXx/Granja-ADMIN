// NextJS
import Link from "next/link";

export default function NotFoundPPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="text-center">
                <p className="text-base font-semibold text-indigo-600">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Pagina no encontrada
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-600">
                    Lo siento, no pudimos encontrar la página que estás
                    buscando.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="/"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Volver a la página principal
                    </Link>
                </div>
            </div>
        </div>
    );
}
