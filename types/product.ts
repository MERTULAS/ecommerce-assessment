export interface ProductDetail {
    id: string;
    name: string;
    price: number;
    description: string;
};

export interface Product extends ProductDetail {
    imageUrl: string;
    sku?: string;
    inventory?: number;
    manufacturer?: string;
    weight?: number;
    dimensions?: {
        width: number;
        height: number;
        depth: number;
    };
    tags?: string[];
    reviews?: any[];
}
