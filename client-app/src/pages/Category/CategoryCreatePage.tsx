import React from "react";
import {Button, Form, Input} from "antd";
import {ISparePart} from "./types.ts";
import TextArea from "antd/es/input/TextArea";
import {useNavigate} from "react-router-dom";
import {useCreateSparePartMutation} from "../../services/apiParts.ts";

const {Item} = Form;

const CategoryCreatePage: React.FC = () => {

    const [form] = Form.useForm<ISparePart>();
    const navigate = useNavigate();
    const [createSparePart] = useCreateSparePartMutation();

    //Знімає дані з форми
    const onFinish = async (values: ISparePart) => {
        try {
            const response = await createSparePart(values).unwrap();
            console.log("Категорія успішно створена:", response);
            navigate("..");
        } catch (error) {
            console.error("Помилка під час додавання деталі:", error);
        }
    }

    return (
        <>
            <h1 className={"text-center text-4xl font-bold text-blue-500"}>Додати деталь</h1>
            <div style={{maxWidth: '400px', margin: '0 auto'}}>
                <Form
                    form={form}
                    onFinish={onFinish}
                    layout={"vertical"}>

                    <Item
                        name={"name"}
                        label={"Назва деталі"}
                        rules={[
                            {required: true, message: "Вкажіть назву деталі"}
                        ]}>
                        <Input placeholder={"Назва"}/>
                    </Item>

                    <Item
                        name={"Quantity"}
                        label={"Quantity"}
                        rules={[
                            {required: true, message: "Вкажіть кількість деталей"}
                        ]}>
                        <Input placeholder={"Кількість"}/>
                    </Item>

                    <Item
                        name={"description"}
                        label={"Опис"}>
                        <TextArea placeholder={"Опис..."} rows={4}/>
                    </Item>

                    <Item>
                        <Button type="primary" htmlType="submit">
                            Створити деталь
                        </Button>
                    </Item>

                </Form>
            </div>
        </>
    )
}

export default CategoryCreatePage;