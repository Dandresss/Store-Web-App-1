import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedorService } from '../../services/proveedor.service';

@Component({
  selector: 'app-up-proveedor',
  templateUrl: './up-proveedor.component.html',
  styleUrls: ['./up-proveedor.component.css']
})
export class UpProveedorComponent implements OnInit {
  proveedorId: number = 0;
  proveedor: any; // Usando 'any' para el proveedor

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private proveedorService: ProveedorService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.proveedorId = +params.get('id')!;
      this.obtenerDetalleProveedor();
    });
  }

  obtenerDetalleProveedor(): void {
    this.proveedorService.getProveedor(this.proveedorId).subscribe(
      (proveedor): void => { // Usando 'any' para el proveedor
        this.proveedor = proveedor;
      },
      error => {
        console.error('Error al obtener detalle del proveedor:', error);
        // Manejar el error apropiadamente (p. ej., redirigir a una página de error)
      }
    );
  }

  actualizarProveedor(): void {
    this.proveedorService.updateProveedor(this.proveedorId, this.proveedor).subscribe(
      () => {
        console.log('Proveedor actualizado con éxito');
        // Redirigir a la página de detalle del proveedor actualizado
        this.router.navigate(['/proveedores']);
      },
      error => {
        console.error('Error al actualizar proveedor:', error);
        // Manejar el error apropiadamente (p. ej., mostrar un mensaje de error al usuario)
      }
    );
  }

  cancelar(): void {
    // Redirigir a la página anterior o a cualquier otra página deseada
    this.router.navigate(['/proveedores']);}

}