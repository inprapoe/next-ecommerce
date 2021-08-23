export const useGetCategories = (data) => {
    const { products } = data;

    let productsCategories = []

    products.forEach(product => {
        const category = product.category
        const existCategory = productsCategories.find(x => x === category)
        if(!existCategory) {
            productsCategories.push(category)
        }
    });

    return productsCategories;
}