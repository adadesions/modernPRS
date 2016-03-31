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
var prsRoutes = FlowRouter.group({
  prefix: '/app/prs',
  name: 'usersite',
})

prsRoutes.route('/', {
    name: 'prsRoot',
    triggersEnter: [function (context, redirect) {
        let goingTo = '/login'
        redirect(goingTo)
    }]
})

prsRoutes.route('/create/physicalform', {
    name: 'createPhysicalForm',
    action() {
      ReactLayout.render(Container, {content: <PhysicalForm />})
    }
})

prsRoutes.route('/show/physicalform/:cn', {
    name: 'showPhysicalForm',
    action() {
      ReactLayout.render(Container, {content: <PhysicalForm />})
    }
})

prsRoutes.route('/:businessName', {
  name: 'mainPrsApp',
  action() {
    ReactLayout.render(Container, {content: <UserSite />})
  }
})
//END USERSITE
