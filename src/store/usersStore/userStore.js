import StudentStore from './studentStore/studentStore';
import TeacherStore from './teacherStore/teacherStore';
import StaffStore from './staffStore/staffStore';

const userStore = {
  StudentStore: new StudentStore(),
  TeacherStore : new TeacherStore(),
  StaffStore : new StaffStore(),
};

export default userStore;