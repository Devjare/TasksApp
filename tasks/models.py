from django.db import models


class Task(models.Model):
    title: models.CharField = models.CharField(max_length=100)
    description: models.TextField = models.TextField(blank=True)
    done: models.BooleanField = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title}: {self.description}"
