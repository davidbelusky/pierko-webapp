from pierko_api.models import GalleryImage
from rest_framework import serializers

class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = "__all__"