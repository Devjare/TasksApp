from django.db import models


class Taks(models.Model):
    title: models.CharField = models.CharField(max_length=100)
