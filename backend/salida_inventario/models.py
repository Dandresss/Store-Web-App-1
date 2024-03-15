from django.db import models

# Create your models here.

from django.db import models
from producto.models import Producto

class SalidaInventario(models.Model):
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    fecha = models.DateField()
    cantidad_vendida = models.IntegerField()
