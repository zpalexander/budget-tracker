export default function calculateAmountSpent(purchases) {
    return purchases.reduce((total, purchase) => total + purchase.amount, 0);
}
