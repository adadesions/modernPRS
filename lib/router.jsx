//ROOT
var rootRoutes = FlowRouter.group({
    prefix: '',
    name: '',
})

rootRoutes.route('/', {
    name: 'root',
    triggersEnter: [function (context, redirect) {
        let goingTo = '/login'
        redirect(goingTo)
    }]
});

rootRoutes.route('/login', {
    name: 'login',
    action() {
      ReactLayout.render(Container, {
        content: <Login />
      })
    }
});

rootRoutes.route('/register', {
    name: 'register',
    action(params) {
      ReactLayout.render(Container, {
        content: <Register />
      })
    }
});
//END ROOT

//USERSITE
var userRoutes = FlowRouter.group({
  prefix: '/usersite',
  name: 'usersite',
})
userRoutes.route('/', {
  name: 'mainUserSite',
  action() {
    ReactLayout.render(Container, {content: <UserSite />})
  }
})

userRoutes.route('/physicalform', {
    name: 'physicalForm',
    action() {
      ReactLayout.render(Container, {content: <PhysicalForm />})
    }
});
//END USERSITE
