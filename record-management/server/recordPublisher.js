Meteor.publish('onlyThisUser', function () {
    return Patients.find({'business.ownerId': this.userId})
})

Meteor.publish('onlyThisBusinessName', function(businessName) {
    return Patients.find({
        'business.ownerId': this.userId,
        'business.businessName': businessName
    })
})
