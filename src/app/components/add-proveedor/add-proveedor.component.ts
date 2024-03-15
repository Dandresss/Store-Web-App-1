import { Component } from '@angular/core';
import { ProveedorService } from '../../services/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css']
})
export class AddProveedorComponent {
  nuevoProveedor = { nombre: '', contacto: '' };

  constructor(private proveedorService: ProveedorService, private router: Router) { }

  agregarProveedor(): void {
    this.proveedorService.addProveedor(this.nuevoProveedor).subscribe(
      () => {
        console.log('Proveedor agregado con éxito');
        this.nuevoProveedor = { nombre: '', contacto: '' };
        // Navegar de regreso a la lista de proveedores
        this.router.navigate(['/proveedores']);
      },
      error => {
        console.error('Error al agregar proveedor:', error);
      }
    );
  }
}