
/**
 * check empty 
 * if empty return true
 * not empty return false
 */
 function IsEmpty (value) {
    if (value == "" || value == null || value == undefined || (value != null && typeof value == "object" && !Object.keys(value).length)) {
        return true;
    } else {
        return false;
    }
};
