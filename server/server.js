const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('item-data.json');
const middlewares = jsonServer.defaults();

server.use(jsonServer.rewriter({
    '/api/*': '/CatalogEntryView',
    '/api/v1': '/CatalogEntryView',
    '/api/CatalogEntryView': '/CatalogEntryView'
}));
server.use(middlewares);
server.use(router);
server.listen(9000, () => {
    console.log('JSON Server is running');
});
