import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  login(username: string, password: string): Observable<boolean> {
    if (username === 'usuario' && password === 'senha') {
      console.log("entrei")
      this.isLoggedIn = true;
      return of(true); // Usuário autenticado com sucesso
    } else {
      console.log("entrei não")
      this.isLoggedIn = false;
      return of(false); // Falha na autenticação
    }
  }

  isAuthenticated(): boolean {
    // Implemente a lógica para verificar se o usuário está autenticado
    // Por exemplo, você pode verificar se há um token de autenticação armazenado no localStorage
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
