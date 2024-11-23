import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Client } from '../Client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = 'http://localhost:8081/api/clients'; // Your Spring Boot API base URL

  constructor(private http: HttpClient) { }

  // Fetch all clients
  getClients(): Observable<Client[]> {  // Observable of an array of Clients
    return this.http.get<Client[]>(this.baseUrl);  // Type the Observable to expect Client[]
  }

  // Fetch a single client by ID
  getClient(id: number): Observable<Client> {  // Observable of a single Client
    return this.http.get<Client>(`${this.baseUrl}/${id}`);  // Type the Observable to expect a single Client
  }

  // Create a new client
  createClient(client: Client): Observable<Client> {  // Observable of a single Client
    return this.http.post<Client>(this.baseUrl, client);  // Type the Observable to expect a single Client
  }

  // Update a client
  updateClient(id: number, client: Client): Observable<Client> {  // Observable of a single Client
    return this.http.put<Client>(`${this.baseUrl}/${id}`, client);  // Type the Observable to expect a single Client
  }

  // Delete a client
  deleteClient(id: number): Observable<void> {  // Observable that returns void (no content)
    return this.http.delete<void>(`${this.baseUrl}/${id}`);  // Type the Observable to expect void for delete
  }
}
