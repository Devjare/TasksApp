from django.shortcuts import render
from rest_framework import viewsets
# from rest_framework.views import APIView
from .serializer import TaskSerializer
from .models import Task

# Create your views here.
# class TaskView(APIView):
# REVIEW: Disadvantage NO1. with viewsets: Cannot debug explicitly on each request type.
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
   
