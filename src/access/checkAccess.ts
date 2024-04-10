import accessEnum from "@/access/accessEnum";

const checkAccess = (loginUser: any, access = accessEnum.NO_LOGIN) => {
  const loginUserAccess = loginUser?.userRole ?? accessEnum.NO_LOGIN;
  if (access === accessEnum.NO_LOGIN) {
    return true;
  }
  if (access === accessEnum.USER) {
    if (loginUserAccess === accessEnum.NO_LOGIN) {
      return false;
    }
  }
  if (access === accessEnum.ADMIN) {
    if (loginUserAccess !== accessEnum.ADMIN) {
      return false;
    }
  }
  return true;
};
export default checkAccess;
