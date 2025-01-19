
import {
    ChartBarIcon,
    PuzzlePieceIcon,
    CursorArrowRaysIcon,
    ArrowRightIcon,
} from "@heroicons/react/24/solid";

export function Article() {
    return (
        <section className="px-8 py-15">
            <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
                <div className="col-span-1">
                    <h2 className="text-3xl font-bold text-gray-900">My Article</h2>
                    <p className="mt-3 mb-4 w-9/12 text-base text-gray-500">
                         PEMROGRAMAN APLIKASI MOBILE E-WALLET “FULUS” BERBASIS SERVICE EXPRESS JS
                    </p>
                    <a
                        href="https://ejournal.upnvj.ac.id/informatik/article/view/8156"
                        className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700"
                    >
                        <span>View</span>
                        <ArrowRightIcon className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Article;

