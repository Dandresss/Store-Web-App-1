from rest_framework import serializers
from .models import SalidaInventario

class SalidaInventarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = SalidaInventario
        fields = '__all__'
