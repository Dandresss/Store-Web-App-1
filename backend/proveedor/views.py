from django.shortcuts import render

# Create your views here.
from rest_framework import generics, status
from rest_framework.response import Response
from .models import Proveedor
from .serializers import ProveedorSerializer

class ProveedorListCreate(generics.ListCreateAPIView):
    queryset = Proveedor.objects.all()
    serializer_class = ProveedorSerializer
    def get_queryset(self):
        queryset = super().get_queryset()
        nombre = self.request.query_params.get('nombre', None)
        if nombre:
            queryset = queryset.filter(nombre__icontains=nombre)
        return queryset
    
    def perform_create(self, serializer):
        # Obtener los datos enviados en la solicitud POST
        nombre = self.request.data.get('nombre')
        # Verificar si ya existe un Proveedor con el mismo nombre
        if Proveedor.objects.filter(nombre=nombre).exists():
            return Response({"error": "Ya existe un proveedor con este nombre."}, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer.save()

class ProveedorRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Proveedor.objects.all()
    serializer_class = ProveedorSerializer
