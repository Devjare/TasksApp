from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        # fields = ("id", "title", "description", "done")
        model = Task
