from rest_framework import generics
from pierko_api.models import GalleryImage
from pierko_api.serializers import GalleryImageSerializer
from rest_framework import permissions

class GalleryImageView(generics.ListAPIView):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer
    #permission_classes = [permissions.IsAdminUser]