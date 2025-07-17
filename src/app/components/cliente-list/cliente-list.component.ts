import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cliente-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  clientes: Cliente[] = [];
  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'telefone', 'acoes'];
  isLoading = true;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes(): void {
    this.isLoading = true;
    this.clienteService.getClientes().subscribe(data => {
      this.clientes = data;
      this.isLoading = false;
    });
  }

  excluirCliente(idCliente: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clienteService.deleteCliente(idCliente).subscribe(() => {
          this.loadClientes();
        });
      }
    });
  }

  verDetalhes(clienteId: number): void {
    this.router.navigate(['/clientes', clienteId]);
  }
}