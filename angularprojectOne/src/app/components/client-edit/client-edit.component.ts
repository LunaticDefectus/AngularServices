import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../Client';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  client: Client = new Client();

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.clientService.getClient(id).subscribe((data: Client) => {
      this.client = data;
    });
  }

  updateClient(): void {
    const id = this.route.snapshot.params['id'];
    this.clientService.updateClient(id, this.client).subscribe(() => {
      this.router.navigate(['/clients']);
    });
  }
}
