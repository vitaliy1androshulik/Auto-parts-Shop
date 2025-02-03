
import {APP_ENV} from "../../env";

import {useDeleteCategoryMutation} from "../../services/apiParts.ts";
import {Button, notification} from "antd";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const api= APP_ENV.REMOTE_BASE_URL;

const CategoryListPage = () => {

    // const navigate = useNavigate();
    console.log("Hello")
    const [Parts, setParts] = useState([]);
    useEffect(() => {
        fetch(api+"api/Parts/all").then(res => res.json()).then(data => setParts(data));
        console.log("Your data")
    }, []);
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



    console.log("APP_ENV", APP_ENV.REMOTE_BASE_URL);
    console.log("Render component");

    const mapData = Parts?.map((part) => (
        <tr key={part.id}
            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <td className="px-6 py-4">
                <img width={'100px'} src={part.imageUrl} alt={"image"}/>
            </td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {part.name}
            </th>

            <td className="px-6 py-4">
                {part.description}
            </td>
            <td className="px-6 py-4">

                <Button
                    type="primary"
                    danger
                    onClick={() => handleDelete(part.id)}
                >
                    Delete
                </Button>
            </td>
        </tr>
    ));


    return (
        <>
            <h1 className={"text-center text-4xl font-bold text-blue-500"}>Список категорій</h1>
            <Link to={"/categories/create"}
                  className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Додати
            </Link>
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