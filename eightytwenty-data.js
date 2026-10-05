// Stable frontend data adapter for the public site and the CMS prototype.
// Business-data snapshots live only in mock-data.js; replace that source during integration.
export { LOCATIONS, CATEGORIES, MENU, CATERING } from './mock-data.js';

// Existing ordering configuration is retained here; it is not sample customer data.
export const ORDER_RULES = {
  cardSurcharge: 0.0295,   // TapTouch payments config, all stores
  deliveryRate: 0.10,      // TapTouch delivery surcharge rate (config)
  slotMinutes: 5,
  notice: 'Once submitted, our kitchen gets straight to work, so orders cannot be changed or cancelled.',
  pickupInstructions: 'Pick up at counter'
};
