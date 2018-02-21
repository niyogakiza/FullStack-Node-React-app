module.exports = (req, res, next) =>{
    // if no credits
    if(req.user.credits < 1){
        return res.status(403).send({ error: 'Not enough credits! '});
    }
    next();// user go ahead. everything looks fine.
};