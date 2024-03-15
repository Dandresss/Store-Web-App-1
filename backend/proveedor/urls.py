from django.urls import path
from .views import ProveedorListCreate, ProveedorRetrieveUpdateDestroy

urlpatterns = [
    path('proveedores/', ProveedorListCreate.as_view(), name='proveedor-list-create'),
    path('proveedores/<int:pk>/', ProveedorRetrieveUpdateDestroy.as_view(), name='proveedor-retrieve-update-destroy'),
]
