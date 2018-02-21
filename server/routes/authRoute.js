const passport = require('passport');


module.exports = app => {
// target for user profile in google
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        }));

// Callback when a user visits auth/google/callback will be handled by passport
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) =>{
            res.redirect('/surveys');// after login redirect to surveys
        }
        );

    //User logout
    app.get('/api/logout', (req, res) =>{
        req.logout();//takes cookie and kills id which is in
        res.redirect('/');// after log out will back to landing Route
        //res.send(req.user);// getting blank page after logout, because we did'nt set a message
    });

    // Giving access to user
    app.get('/api/current_user', (req, res) =>{
        //res.send(req.session);
        res.send(req.user);
    });
};