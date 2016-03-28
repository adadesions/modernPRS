FlowRouter.route('/', {
    action() {
      ReactLayout.render(Container, {
        content: <Login />
      })
    }
});

FlowRouter.route('/physicalform', {
    action() {
      ReactLayout.render(Container, {
        content: <PhysicalForm />
      })
    }
});

FlowRouter.route('/register', {
    action(params) {
      ReactLayout.render(Container, {
        content: <Register />
      })
    }
});

FlowRouter.triggers.enter([checkAuth])

function checkAuth(context) {
    let path = context.path,
        isRoot = path === '/',
        isRegister = path === '/register',
        isAuth = Meteor.user()

    if(!isAuth && !isRoot) {
      isRegister ? FlowRouter.path('/register') : FlowRouter.go('/')
    }
    else if(!isAuth){
      isRoot ? FlowRouter.path('/') : FlowRouter.go('/')
    }
}
