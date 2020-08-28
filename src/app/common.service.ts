import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private) { }
  createUser(user){
    return this.http.post("",user)

  }
  getAllUser(){
    return this.http.get("")
  }
  updateUser(){}
  deleteUser(user){
    return this.http.delete("",+user.id)
  }
}
