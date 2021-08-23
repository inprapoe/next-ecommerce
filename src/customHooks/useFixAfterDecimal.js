export const useFixAfterDecimal = (number, decimal) => {
    return Number(parseFloat(number).toFixed(decimal))
}