export const totalQuantity = (arr, setCountItems,) => {
    const total = arr.reduce((total, item) => total + item.quantity, 0)
    if (setCountItems) {
        setCountItems(total)
    }
}
