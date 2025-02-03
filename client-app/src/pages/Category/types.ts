// Таблиця SpareParts
export interface ISparePart {
    id: number;
    name: string;
    imageUrl: string;
    categoryId: number;
    producerId: number;
    providerId: number;
    partNumber: string;
    description: string;
    quantity: number;
    price: number;
}

// Таблиця Producers
export interface IProducer {
    id: number;
    name: string;
    country: string;
}

// Таблиця Providers
export interface IProvider {
    id: number;
    name: string;
}

// Таблиця Categories
export interface ICategory {
    id: number;
    name: string;
}

// Таблиця SubCategories
export interface ISubCategory {
    id: number;
    title: string;
    categoryId: number;
}
