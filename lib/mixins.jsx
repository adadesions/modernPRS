LoggedInMixin = {
  mixins: [ReactMeteorData],
  getMeteorData() {
      let isLogin = !!Meteor.user()

      if(isLogin) {
          let params = Meteor.user().profile.businessName
          FlowRouter.go(`/app/prs/${params}`)
      }
      else if(!isLogin){
          let isRoot = FlowRouter.getRouteName() !== 'root',
              isRegister = FlowRouter.getRouteName() !== 'register',
              currentPath = FlowRouter.current().path
              isResetPassword = currentPath.includes('reset-password')

          if(isRegister){}
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
      let data = {},
          isLogin = !!Meteor.user()

      if(!isLogin) {
          FlowRouter.go('login')
      }
      // else{
      //     let currentRouteName = FlowRouter.current().path
      //     console.log(currentRouteName);
      //     FlowRouter.path(currentRouteName)
      // }
      return data
  }
}
