function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

// Перевірка функції
console.log(getShippingMessage("Australia", 150, 50)); // "Shipping to Australia will cost 200 credits"
console.log(getShippingMessage("Germany", 100, 20)); // "Shipping to Germany will cost 120 credits"
console.log(getShippingMessage("Sweden", 250, 60)); // "Shipping to Sweden will cost 310 credits"
