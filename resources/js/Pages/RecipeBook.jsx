import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";

export default function RecipeBook() {
    return (
        <Authenticated
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Recipe Book
                </h2>
            }
        >
            <div className="grid grid-cols-2 gap-4 p-2 h-96">
                <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 h-full overflow-auto">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Recipes
                    </h5>
                    <div className="space-y-2">
                        {/*open a modal*/}
                        <a className="block border hover:border-gray-200 hover:shadow p-2 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700">
                            Hotdog
                        </a>
                    </div>
                </div>
                <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 h-full overflow-auto">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Ingredients
                    </h5>
                    <div className="space-y-2">
                        {/*open a modal*/}
                        <a className="block border hover:border-gray-200 hover:shadow p-2 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700">
                            Hotdog
                        </a>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
