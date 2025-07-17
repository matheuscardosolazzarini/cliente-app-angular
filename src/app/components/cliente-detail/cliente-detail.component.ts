import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';
import { Pedido } from '../../models/pedido';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cliente-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.scss']
})
export class ClienteDetailComponent implements OnInit {
  cliente: Cliente | undefined;
  pedidos: Pedido[] = [];
  isLoading = true;
  displayedColumns: string[] = ['id', 'dataPedido', 'descricao', 'valor'];

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.clienteService.getCliente(id).subscribe(clienteData => {
        this.cliente = clienteData;
        this.clienteService.getPedidosDoCliente(id).subscribe(pedidosData => {
          this.pedidos = pedidosData;
          this.isLoading = false;
        });
      });
    }
  }
}