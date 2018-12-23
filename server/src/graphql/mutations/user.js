const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserAuth = require('../types/user').UserAuth;
const UserSignupInput = require('../types/user').UserSignupInput;
const UserSignupPayload  = require('../types/user').UserSignupPayload;
const UserLoginPayload = require('../types/user').UserLoginPayload;

const GraphQLString = require('graphql').GraphQLString;

module.exports = {
    signup: {
        type: UserSignupPayload,
        args: {
            email: {
                type: GraphQLString,
            },
            username: {
                type: GraphQLString,
            },
            password: {
                type: GraphQLString,
            },
        },
        resolve: async (_, args, context, info) => {
            const password = await bcrypt.hash(args.password, 10);
            let errors = null;
            try {
                await context.prisma.mutation.createUser({
                    data: {...args, password}
                });
            } catch (e) {
                errors = e.message;
            }

            return {
                errors: errors,
            }
        }
    },
    login: {
        type: UserLoginPayload,
        args: {
            email: {
                type: GraphQLString,
            },
            password: {
                type: GraphQLString,
            },
        },
        resolve: async (_, {email, password}, context, info) => {
            const user = await context.prisma.query.user({where: {email}});
            if (!user) {
                throw new Error(`No such user for email: ${email}`);
            }

            const valid = await bcrypt.compare(password, user.password);
            if (!valid) {
                throw new Error(`Invalid Password`);
            }

            console.log('returniong me!')
            return {
                user,
                token: jwt.sign({userId: user.id}, process.env.JWT_SECRET)
            };
        }
    },
    renewToken: {
        type: UserAuth,
        resolver:  (_, args, context, info) => {
            return 'renewToken';
        }
    }
}