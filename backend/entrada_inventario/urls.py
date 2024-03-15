from django.urls import path
from .views import EntradaInventarioListCreate, EntradaInventarioRetrieveUpdateDestroy

urlpatterns = [
    path('entradas-inventario/', EntradaInventarioListCreate.as_view(), name='entrada-inventario-list-create'),
    path('entradas-inventario/<int:pk>/', EntradaInventarioRetrieveUpdateDestroy.as_view(), name='entrada-inventario-retrieve-update-destroy'),
]
