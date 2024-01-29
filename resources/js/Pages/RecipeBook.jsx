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
                    <div className="flex">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Recipes
                        </h5>
                        {/* Add button */}
                        <button
                            type="button"
                            className="ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Add Recipe
                        </button>
                    </div>

                    <div className="space-y-2">
                        {/*open a modal*/}
                        <div className="flex">
                            <p className="block hover:border-gray-200 hover:shadow p-2 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                Dinuguan
                            </p>
                            <button
                                type="button"
                                className="ml-4 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-xs px-3 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                            >
                                Prepare Dish
                            </button>
                        </div>
                    </div>
                </div>
                <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 h-full overflow-auto">
                    <div className="flex">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Ingredients Lists
                        </h5>
                        {/* Add button */}
                        <button
                            type="button"
                            className="ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Add Ingredient
                        </button>
                    </div>

                    <div className="space-y-2">
                        {/*open a modal*/}
                        <div className="flex">
                            <p className="block hover:border-gray-200 hover:shadow p-2 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                Pork
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
