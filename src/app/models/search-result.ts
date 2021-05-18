import { AbridgeFoodItem } from "./abridge-food-item";
import { FoodSearchCriteria } from "./food-search-criteria";

export interface SearchResult {
    currentPage: number;
    totalPages: number;
    foods: AbridgeFoodItem[];
    foodSearchCriteria: FoodSearchCriteria;
}
