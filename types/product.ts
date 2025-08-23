export interface Product {
    id: any;
    name: any;
    price: any;
    description: any;
    imageUrl: any;
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