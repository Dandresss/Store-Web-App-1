from django.shortcuts import render

# Create your views here.

from rest_framework import generics, status
from rest_framework.response import Response
from .models import Producto
from .serializers import ProductoSerializer

class ProductoListCreate(generics.ListCreateAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
    def get_queryset(self):
        queryset = super().get_queryset()
        nombre = self.request.query_params.get('nombre', None)
        if nombre:
            queryset = queryset.filter(nombre__icontains=nombre)
        return queryset
    
    def perform_create(self, serializer):
        # Obtener los datos enviados en la solicitud POST
        nombre = self.request.data.get('nombre')
        # Verificar si ya existe un producto con el mismo nombre
        if Producto.objects.filter(nombre=nombre).exists():
            return Response({"error": "Ya existe un producto con este nombre."}, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer.save()

class ProductoRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
