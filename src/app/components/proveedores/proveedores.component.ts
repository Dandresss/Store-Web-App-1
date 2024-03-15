import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../services/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores: any[] = [];
  proveedoresFiltrados: any[] = [];
  terminoBusqueda: string = '';

  constructor(private proveedorService: ProveedorService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerProveedores();
  }

  obtenerProveedores(): void {
    this.proveedorService.getProveedores().subscribe(
      data => {
        this.proveedores = data;
        this.proveedoresFiltrados = data; // Inicialmente, los proveedores filtrados son todos los proveedores
      },
      error => {
        console.log(error);
      }
    );
  }

  eliminarProveedor(id: number): void {
    this.proveedorService.deleteProveedor(id).subscribe(
      () => {
        // Actualizar la lista de proveedores después de la eliminación
        this.obtenerProveedores();
      },
      error => {
        console.log(error);
      }
    );
  }

  actualizarProveedor(id: number): void {
    // Navegar al componente UpProveedorComponent con el ID del proveedor como parámetro
    this.router.navigate(['/actualizarprov', id]);
  }

  buscarProveedores(): void {
    this.proveedoresFiltrados = this.proveedores.filter(proveedor =>
      proveedor.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
    );
  }
}


