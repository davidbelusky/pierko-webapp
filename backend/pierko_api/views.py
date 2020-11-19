from rest_framework import generics
from pierko_api.models import GalleryImage, GalleryCategory
from pierko_api.serializers import GalleryImageSerializer, GalleryCategorySerializer
from rest_framework import permissions

class GalleryImageView(generics.ListAPIView):
    queryset = GalleryImage.objects.filter(show=True)
    serializer_class = GalleryImageSerializer
    #permission_classes = [permissions.IsAdminUser]

class GalleryCategoryView(generics.ListAPIView):
    queryset = GalleryCategory.objects.all()
    serializer_class = GalleryCategorySerializer