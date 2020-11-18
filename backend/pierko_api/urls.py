from django.urls import path,include
from pierko_api import views


urlpatterns = [
    path('', views.Show.as_view()),
]
