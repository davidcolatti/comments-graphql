"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Contact {\n    name: String\n    address: String\n    city: String\n    state: String\n    zip: String\n  }\n  type Query {\n    contacts: [Contact]\n  }\n"], ["\n  type Contact {\n    name: String\n    address: String\n    city: String\n    state: String\n    zip: String\n  }\n  type Query {\n    contacts: [Contact]\n  }\n"])));
var resolvers = {
    Query: {
        contacts: function () { return contacts; }
    }
};
var contacts = [
    {
        name: 'Homer Simpson',
        address: '742 Evergreen Terrace',
        city: 'Springfield',
        state: 'Florida',
        zip: '33333'
    },
    {
        name: 'Mr. Burns',
        address: '1000 Mammon Lane',
        city: 'Parkland',
        state: 'Florida',
        zip: '33076'
    },
    {
        name: 'Moe Szyslak',
        address: '57 Walnut St.',
        city: 'Tamarac',
        state: 'Florida',
        zip: '33068'
    },
    {
        name: 'W. Seymour Skinner',
        address: '330 Pikeland Ave.',
        city: 'Pompano',
        state: 'Florida',
        zip: '33067'
    },
    {
        name: 'Waylon Joseph Smithers Jr.',
        address: '333 Pikeland Ave.',
        city: '	Wilton Manors',
        state: 'Florida',
        zip: '33305'
    }
];
var server = new apollo_server_1.ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
server.listen({ host: '127.0.0.1', port: 4000 }).then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at " + url);
});
var templateObject_1;
