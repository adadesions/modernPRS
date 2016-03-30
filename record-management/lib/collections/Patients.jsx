Patients = new Mongo.Collection("patients")

Patients.allow({
  insert: function (doc) {
    return true
  }
})
History = Astro.Class({
  name: 'History',
  fields: {
    index: 'number',
    period: 'string',
    messageHistory: 'string'
  }
})

Business = Astro.Class({
  name: 'Business',
  fields: {
    businessName: 'string',
    ownerName: 'string',
    ownerId: 'string'
  }
})

Patient = Astro.Class({
  name: 'Patients',
  collection: Patients,
  fields: {
    CN: 'string',
    business: {
        nested: 'Business'
    },
    information: {
        firstname: {
          type: 'string',
          default: ''
        },
        lastName: {
          type: 'string',
          default: ''
        },
        bod: {
          type: 'date',
          default: ''
        },
        age: 'number',
        gender: {
          type: 'string',
          default: 'male'
        },
        emergencyCall: 'string',
        idCard: 'string',
        tel: 'string',
        occupation: {
          type: 'string',
          default: ''
        },
        address: {
          type: 'string',
          default: ''
        }
    },
    interview: {
        chiefComplaint: {
          type: 'string',
          default: ''
        },
        contraindication: {
          type: 'string',
          default: ''
        },
        diagnosis: {
          type: 'string',
          default: ''
        }
    },
    painSection: {
        painScore: {
          arom: 'number',
          prom: 'number'
        },
        typeOfPain: 'string',
        duration: {
          type: 'number',
          default: ''
        },
        agg: {
          type: 'string',
          default: ''
        },
        rest: {
          type: 'string',
          default: ''
        },
        painLocation: { type: 'string', default: '' }
    },
    history: {
        type: 'array',
        nested: 'History',
        default: () => []
    },
    assessment: {type: 'string', default: ''},
    treatment: {type: 'string', default: ''},
    note: {type: 'string', default: ''},
    createdAt: 'date',
    modifiedAt: 'date'
  }
})
