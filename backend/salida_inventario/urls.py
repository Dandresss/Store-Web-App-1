from django.urls import path
from .views import SalidaInventarioListCreate, SalidaInventarioRetrieveUpdateDestroy

urlpatterns = [
    path('salidas-inventario/', SalidaInventarioListCreate.as_view(), name='salida-inventario-list-create'),
    path('salidas-inventario/<int:pk>/', SalidaInventarioRetrieveUpdateDestroy.as_view(), name='salida-inventario-retrieve-update-destroy'),
]
