from rest_framework import serializers
from .models import EntradaInventario

class EntradaInventarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = EntradaInventario
        fields = '__all__'
