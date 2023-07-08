export interface register {
    name:string,
    email:string,
    password:string,
    birth:string,
    gender:string,
    phonenumber:string
}
export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
  }
  export interface InsertedSuccess {
    lastRowid: String;
    rowsAffected: Number;
  }
  export interface Read {
    Result: [];
  }
 