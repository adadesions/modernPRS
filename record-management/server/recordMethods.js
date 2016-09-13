Meteor.methods({
  removePatientRecord: function (cn) {
      Patients.remove({
          'business.ownerId': Meteor.userId(),
          CN: cn
      })  
  }
})
