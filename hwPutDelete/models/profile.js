const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    permissions: {
      readProjects: Boolean,
      createProjects: Boolean,
      updateProjects: Boolean,
      deleteProjects: Boolean,
      
      readAmbientalPlans: Boolean,
      createAmbientalPlans: Boolean,
      updateAmbientalPlans: Boolean,
      deleteAmbientalPlans: Boolean,

      readMonitorings: Boolean,
      writeMonitorings: Boolean,
      updateMonitorings: Boolean,
      deleteMonitorings: Boolean,

      createActivities: Boolean,
      readActivities: Boolean,
      updateActivities: Boolean,
      deleteActivities: Boolean,

      createEvents: Boolean,
      readEvents: Boolean,
      updateEvents: Boolean,
      deleteEvents: Boolean,

      createUsers: Boolean,
      readUsers: Boolean,
      updateUsers: Boolean,
      deleteUsers: Boolean,

      createProfiles: Boolean,
      readProfiles: Boolean,
      updateProfiles: Boolean,
      deleteProfiles: Boolean,

      readActions: Boolean,

      readSupervisionPeriod: Boolean,
      createSupervisionPeriod: Boolean,
      updateSupervisionPeriod: Boolean,
      deleteSupervisionPeriod: Boolean,

      readPermit: Boolean,
      createPermit: Boolean,
      updatePermit: Boolean,
      deletePermit: Boolean,

      readReminder: Boolean,
      createReminder: Boolean,
      updateReminder: Boolean,
      deleteReminder: Boolean
    }
  },
  {
    collection: 'profiles'
  }
);

module.exports = mongoose.model('profiles', profileSchema);
