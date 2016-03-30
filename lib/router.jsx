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
})
//END ROOT

//USERSITE
var userRoutes = FlowRouter.group({
  prefix: '/app/prs',
  name: 'usersite',
})

userRoutes.route('/', {
    name: 'prsRoot',
    triggersEnter: [function (context, redirect) {
        let goingTo = '/login'
        redirect(goingTo)
    }]
})

userRoutes.route('/create/physicalform', {
    name: 'physicalForm',
    action() {
      ReactLayout.render(Container, {content: <PhysicalForm />})
    }
})

userRoutes.route('/:businessName', {
  name: 'mainPrsApp',
  action() {
    ReactLayout.render(Container, {content: <UserSite />})
  }
})
//END USERSITE
