export interface Product {
    id: number;
    name: string;
    description: string;
    type?: string;
    price: number;
    pictureUrl: string;
    brand: string;
    quantityInStock?: number;
}