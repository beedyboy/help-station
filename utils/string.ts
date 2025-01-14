export const formatCurrency = (amount: number, showNegative?: boolean): string => {
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
  }).format(amount);

  return `${showNegative ? '-' : ''}₦${formattedAmount.replace('NGN', '')}`;
};