from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response


class Show(APIView):
    def get(self,request):
        return Response({'f':'s'})