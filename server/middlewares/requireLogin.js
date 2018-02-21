module.exports = (req, res, next) =>{
    // if no user
    if(!req.user){
       return res.status(401).send({ error: 'You must log in!'});
    }

    next();// user go ahead. everything looks fine.
};