const postResolvers = require('./posts');
const userResolvers = require('./users');
const commentsResolvers = require('./comments');
module.exports={
    Post:{
        likeCount:(parent)=>parent.likes.length,
        commentCount: (parent)=> parent.comments.length
    },
    Query:{
        ...postResolvers.Query
    },
    Mutation:{
        ...userResolvers.Mutation,
        ...postResolvers.Mutation,
        ...commentsResolvers.Mutation,
    },
    Subscription: {
        ...postResolvers.Subscription
    }
}