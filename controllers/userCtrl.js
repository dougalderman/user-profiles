var users = [
    {
        name: 'Preston McNeil',
        password: 'password1',
        friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
        name: 'Ryan Rasmussen',
        password: '$akgfl#',
        friends: ['Lindsey Mayer']
    },
    {
        name: 'Terri Ruff',
        password: 'hunter2',
        friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
        name: 'Lindsey Mayer',
        password: '777mittens777',
        friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
];

module.exports = {
    login: function(req, res, next) {
       var found = false;
       console.log('req.body', req.body);
       users.forEach(function(user, index, array) {
                console.log('user', user);
                if (user.name === req.body.userName) {
                    if (user.password = req.body.password) {
                        req.session.currentUser = user;
                        found = true;
                    }
                }
        });
        if (found)
            res.json({userFound: true});
        else
            res.json({userFound: false});
    }
}