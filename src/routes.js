const nextRoutes = require('next-routes');
const routes = (module.exports = nextRoutes())

// Setup router.
routes.add('index','/');
routes.add('tours');
routes.add('trip-calendar');
routes.add('private-tailor-made');
routes.add('accomodation');
routes.add('blog');
routes.add('car-rental');
routes.add('flight');
routes.add('plan-trip');
routes.add('faq');
routes.add('what-to-pack');
routes.add('travel-insurance');
routes.add('weather-forecast');
routes.add('brochures');
routes.add('booking-form');
routes.add('terms-conditions');
routes.add('who-we-are');
routes.add('golden-eagle');
routes.add('cbt-responsible-tourism');
routes.add('tour-category','/tour-category/:slug');
routes.add('tour-more','/tour-more/:slug');
routes.add('blog-more','/blog-more/:slug');
routes.add('car-rental-more','/car-rental-more/:slug');
routes.add('accomodation-more','/accomodation-more/:slug');
routes.add('book-now');
routes.add('contact');