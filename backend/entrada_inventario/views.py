from django.shortcuts import render

# Create your views here.
from rest_framework import generics, status
from .models import EntradaInventario
from rest_framework.response import Response
from .serializers import EntradaInventarioSerializer

class EntradaInventarioListCreate(generics.ListCreateAPIView):
    queryset = EntradaInventario.objects.all()
    serializer_class = EntradaInventarioSerializer
    
    def perform_create(self, serializer):
        # Guardar la entrada en inventario
        entrada = serializer.save()

        # Obtener el producto correspondiente a la entrada
        
        producto = entrada.producto
        print(producto)
        # Calcular la cantidad resultante después de la resta
        cantidad_restante = producto.cantidad_disponible + entrada.cantidad_recibida

        # Restar la cantidad de la entrada del valor guardado en el producto
        producto.cantidad_disponible = cantidad_restante
        producto.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

class EntradaInventarioRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = EntradaInventario.objects.all()
    serializer_class = EntradaInventarioSerializer
