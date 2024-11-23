import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../Client';
import { ClientService } from '../../services/client.service';
@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent {
  client: Client = new Client();

  constructor(private clientService: ClientService, private router: Router) {}

  addClient(): void {
    this.clientService.createClient(this.client).subscribe(() => {
      this.router.navigate(['/clients']);
    });
  }
}
