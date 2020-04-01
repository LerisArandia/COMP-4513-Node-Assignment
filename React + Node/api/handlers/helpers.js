// uses passport authentication infrastructure to check if authentication is
// needed at some point in middleware pipeline.
function ensureAuthenticated(req, resp, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('info', 'Please log in to view that resource');
    resp.render('login', { message: req.flash('info') });
}
<<<<<<< HEAD
=======

>>>>>>> 5f906d9d322aa2f00f4c4189a6effffceb34dc3c
module.exports = {
    ensureAuthenticated
};