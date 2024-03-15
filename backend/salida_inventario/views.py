from django.shortcuts import render

# Create your views here.
from rest_framework import generics, status
from rest_framework.response import Response
from .models import SalidaInventario
from .serializers import SalidaInventarioSerializer

class SalidaInventarioListCreate(generics.ListCreateAPIView):
    queryset = SalidaInventario.objects.all()
    serializer_class = SalidaInventarioSerializer
    def perform_create(self, serializer):
        # Guardar la entrada en inventario
        entrada = serializer.save()

        # Obtener el producto correspondiente a la entrada
        producto = entrada.producto

        # Calcular la cantidad resultante después de la resta
        cantidad_restante = producto.cantidad_disponible - entrada.cantidad_vendida

        # Verificar si la cantidad resultante es menor que cero
        if cantidad_restante < 0:
            # Si es menor que cero, devolver un error de respuesta
            return Response({"error": "La cantidad disponible del producto no puede ser menor que cero."}, status=status.HTTP_400_BAD_REQUEST)

        # Restar la cantidad de la entrada del valor guardado en el producto
        producto.cantidad_disponible = cantidad_restante
        producto.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

class SalidaInventarioRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = SalidaInventario.objects.all()
    serializer_class = SalidaInventarioSerializer
