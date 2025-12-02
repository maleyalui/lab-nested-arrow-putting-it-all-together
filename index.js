


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
function createLoginTracker(userInfo){
  let attemptCount = 0;
  let isLocked = false;

  return (passwordAttempt) => {
     //If you locked it always return the locked message
     if (isLocked) {
      return "Account locked due to too many failed login attempts";
}
     //correct password -> success
     if (passwordAttempt === userInfo.password){
      return"Login successful";
}
//wrong password
attemptCount = attemptCount + 1;
//if 3 failures -> lock account after returning the fail message
if (attemptCount >= 3) {
  isLocked = true;
}

return `Attempt ${attemptCount}: Login failed`;

  };
}