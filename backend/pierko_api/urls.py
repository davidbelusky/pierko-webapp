from django.urls import path
from pierko_api import views


urlpatterns = [
    path('gallery/', views.GalleryImageView.as_view()),
    path('gallery/category/', views.GalleryCategoryView.as_view()),
    path('articles/', views.ArticleView.as_view())
]
