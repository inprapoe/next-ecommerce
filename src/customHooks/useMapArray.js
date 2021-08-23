const useMapArray = (array, component) => {
    return Array(array).fill().map((_, i) => (
            <span key={`${array}${i+1}`}>{component}</span>
    ))
}
export default useMapArray 