"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var contacts = [
    {
        id: '1',
        name: 'Homer Simpson',
        address: '742 Evergreen Terrace',
        city: 'Springfield',
        state: 'Florida',
        zip: '33333'
    },
    {
        id: '2',
        name: 'Mr. Burns',
        address: '1000 Mammon Lane',
        city: 'Parkland',
        state: 'Florida',
        zip: '33076'
    },
    {
        id: '3',
        name: 'Moe Szyslak',
        address: '57 Walnut St.',
        city: 'Tamarac',
        state: 'Florida',
        zip: '33068'
    },
    {
        id: '4',
        name: 'W. Seymour Skinner',
        address: '330 Pikeland Ave.',
        city: 'Pompano',
        state: 'Florida',
        zip: '33067'
    },
    {
        id: '5',
        name: 'Waylon Joseph Smithers Jr.',
        address: '333 Pikeland Ave.',
        city: '	Wilton Manors',
        state: 'Florida',
        zip: '33305'
    }
];
var typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Contact {\n    id: String\n    name: String\n    address: String\n    city: String\n    state: String\n    zip: String\n  }\n  type Query {\n    contacts: [Contact]\n  }\n  type Mutation {\n    addContact(name: String, city: String, state: String): Contact!\n    editContact(id: String, name: String, city: String, state: String): Contact!\n  }\n"], ["\n  type Contact {\n    id: String\n    name: String\n    address: String\n    city: String\n    state: String\n    zip: String\n  }\n  type Query {\n    contacts: [Contact]\n  }\n  type Mutation {\n    addContact(name: String, city: String, state: String): Contact!\n    editContact(id: String, name: String, city: String, state: String): Contact!\n  }\n"])));
var mockDB = contacts;
var resolvers = {
    Query: {
        contacts: function () { return mockDB; }
    },
    Mutation: {
        addContact: function (_, _a) {
            var name = _a.name, state = _a.state, city = _a.city;
            var contact = {
                id: Math.floor(Math.random() * 100000).toString(),
                name: name,
                city: city,
                state: state
            };
            mockDB.push(contact);
            return contact;
        },
        editContact: function (_, variables) {
            var i = 0;
            var contact = mockDB.find(function (each, index) {
                i = index;
                return each.id === variables.id;
            });
            var newContact = __assign(__assign({}, contact), variables);
            mockDB[i] = newContact;
            return newContact;
        }
    }
};
var server = new apollo_server_1.ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
server.listen({ host: '127.0.0.1', port: 4000 }).then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at " + url);
});
var templateObject_1;
