from rest_framework import generics
from pierko_api.models import GalleryImage, GalleryCategory, Articles
from pierko_api.serializers import GalleryImageSerializer, GalleryCategorySerializer, ArticleSerializer
from rest_framework import permissions

class GalleryImageView(generics.ListAPIView):
    queryset = GalleryImage.objects.filter(show=True)
    serializer_class = GalleryImageSerializer

class GalleryCategoryView(generics.ListAPIView):
    queryset = GalleryCategory.objects.all()
    serializer_class = GalleryCategorySerializer

class ArticleView(generics.ListAPIView):
    queryset = Articles.objects.all()
    serializer_class = ArticleSerializer