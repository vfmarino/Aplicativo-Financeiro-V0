import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user/user';
import { Wallet } from 'src/app/models/wallet/wallet';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiUrl = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user);
  }

  getUserData(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.httpClient.get<any>('http://localhost:3000/user/getUserData', { headers: headers });
  }

  getUserWallets(userID: number){
    return this.httpClient.get<Wallet[]>(`http://localhost:3000/carteira/carteiraByUserId/${userID}`);

  }

  /*
  updateUser()
  findUserById()
  findUserByEmail()
  deleteUser()
  */
}
