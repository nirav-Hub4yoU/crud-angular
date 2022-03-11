import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }
userData:any
  getUsers(){
    return this.http.get('https://62288b1e9fd6174ca82758da.mockapi.io/users')
  }
  postUser(postData:any){
    return this.http.post('https://62288b1e9fd6174ca82758da.mockapi.io/users',postData)
  }
  putUser(user:any){
    return this.http.put('https://62288b1e9fd6174ca82758da.mockapi.io/users',user )
  }
  deleteUser(id:any){
    return this.http.delete('https://62288b1e9fd6174ca82758da.mockapi.io/users/'+id)
  }
  getCurrentData(id:any){
    return this.http.get('https://62288b1e9fd6174ca82758da.mockapi.io/users/'+id)
  }
  updateUser(id:any,data:any){
  return this.http.put('https://62288b1e9fd6174ca82758da.mockapi.io/users/'+id,data )
  }

}
