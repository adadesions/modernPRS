FlowRouter.route('/', {
    action: function(params) {
      ReactLayout.render(Container, {
        content: <Login />
      })
    }
});

FlowRouter.route('/physicalform', {
    action: function(params) {
      ReactLayout.render(Container, {
        content: <PhysicalForm />
      })
    }
});

FlowRouter.route('/register', {
    action: function(params) {
      ReactLayout.render(Container, {
        content: <Register />
      })
    }
});

FlowRouter.route('/userside', {
    action: function(params) {
      ReactLayout.render(Container, {
        content: <UserSide />
      })
    }
});
