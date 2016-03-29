Meteor.publish('onlyThisUser', function () {  
    return Patients.find({'business.ownerId': this.userId})
})
