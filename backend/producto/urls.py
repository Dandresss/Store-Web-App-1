from django.urls import path
from .views import ProductoListCreate, ProductoRetrieveUpdateDestroy

urlpatterns = [
    path('productos/', ProductoListCreate.as_view(), name='producto-list-create'),
    path('productos/<int:pk>/', ProductoRetrieveUpdateDestroy.as_view(), name='producto-retrieve-update-destroy'),
]

