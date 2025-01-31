
import {APP_ENV} from "../../env";

import {useDeleteCategoryMutation, useGetCategoriesQuery} from "../../services/apiCategory.ts";
import {Link} from "react-router-dom";
import {Button, notification} from "antd";


const CategoryListPage = () => {

    // const navigate = useNavigate();

    const { data: list, error, isLoading } = useGetCategoriesQuery();

    // const [createCategory] = useCreateCategoryMutation();
    const [deleteCategory] = useDeleteCategoryMutation();

    const handleDelete = async (id: number) => {
        try {
            await deleteCategory(id).unwrap();
            notification.success({
                message: 'Категорія видалена',
                description: 'Категорія успішно видалена!',
            });
        } catch {
            notification.error({
                message: 'Помилка видалення категорії',
                description: 'Щось пішло не так, спробуйте ще раз.',
            });
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading categories!</div>;


    console.log("APP_ENV", APP_ENV.REMOTE_BASE_URL);
    console.log("Render component");

    const mapData = list?.map((category) => (
        <tr key={category.id}
            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {category.name}
            </th>
           
            <td className="px-6 py-4">
                {category.description}
            </td>
            <td className="px-6 py-4">
                
                <Button
                    type="primary"
                    danger
                    onClick={() => handleDelete(category.id)}
                >
                    Delete
                </Button>
            </td>
        </tr>
    ));


    return (
        <>
            <h1 className={"text-center text-4xl font-bold text-blue-500"}>Список категорій</h1>




            <div className="mt-4 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Назва
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Опис
                        </th>

                        <th scope="col" className="px-6 py-3">
                            &nbsp;
                        </th>
                    </tr>
                    </thead>
                    <tbody>

                    {mapData}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default CategoryListPage;