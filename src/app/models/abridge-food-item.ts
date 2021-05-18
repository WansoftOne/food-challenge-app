import { AbridgeFoodNutrients } from "./abridge-food-nutrients";

export interface AbridgeFoodItem {
    dataType: string;
    description: string;
    fdcId: number;
    foodNutrients: AbridgeFoodNutrients;
    publishedDate: string;
    brandOwner: string;
    gtinUpc: string;
    ndbNumber: string;
    foodCode: string;
}
