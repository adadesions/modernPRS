//ROOT
var rootRoutes = FlowRouter.group({
    prefix: '',
    name: '',
    // triggersEnter: [loggedIn]
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
  triggersEnter: [loggedIn]
  // triggerExit: [loggedOut]
})

userRoutes.route('/physicalform', {
    name: 'physicalForm',
    action() {
      ReactLayout.render(Container, {
        content: <PhysicalForm />
      })
    }
});
//END USERSITE


// FlowRouter.triggers.enter([checkAuth])

function loggedIn(context, redirect) {
  let goingTo = 'physicalForm',
      loginPage = '/login',
      isAuth = !!Meteor.user()
  if(isAuth){
    FlowRouter.path(goingTo)
  }
  else{
    FlowRouter.go(loginPage)
  }
  console.log(isAuth);
}

function checkAuth(context, redirect) {
    let path = context.path,
        isRoot = path === '/',
        isRegister = path === '/register',
        isAuth = Meteor.user(),
        userSite = '/physicalform'
    if(isAuth){
      isRoot || isRegister ? FlowRouter.path(userSite) : FlowRouter.path(path)
    }

    if(!isAuth && !isRoot) {
      isRegister ? FlowRouter.path('/register') : FlowRouter.go('/')
    }
    else if(!isAuth){
      isRoot ? FlowRouter.path('/') : FlowRouter.go('/')
    }
}
