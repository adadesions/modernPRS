LoggedInMixin = {
  mixins: [ReactMeteorData],
  getMeteorData() {
      let isLogin = !!Meteor.user()

      if(isLogin) {
        FlowRouter.go('mainUserSite')
      }
      else if(!isLogin){
          let isRoot = FlowRouter.getRouteName() !== 'root',
              isRegister = FlowRouter.getRouteName() !== 'register'
          if(isRegister){

          }
          else if(!isRoot){
            FlowRouter.go('login')
          }
      }
      return {
        user: isLogin
      }
  }
},

EnsureLogInMixin = {
  mixins: [ReactMeteorData],
  getMeteorData() {
      let isLogin = !!Meteor.user()

      if(!isLogin) {
          FlowRouter.go('login')
      }
      return {
        user: isLogin
      }
  }
}
