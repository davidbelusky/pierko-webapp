from pierko_api.models import GalleryImage, GalleryCategory
from rest_framework import serializers

class GalleryImageSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.category_name')
    class Meta:
        model = GalleryImage
        fields = "__all__"


class GalleryCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryCategory
        fields = "__all__"
