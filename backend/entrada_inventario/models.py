from django.db import models
from producto.models import Producto

class EntradaInventario(models.Model):
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    fecha = models.DateField()
    cantidad_recibida = models.IntegerField()
