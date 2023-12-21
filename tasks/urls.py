from django.urls import path, include
from .views import TaskView
from rest_framework import routers
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r"tasks", TaskView, "tasks")

# One of the main differences between using APIView vs viewset
# is that viewset creates all GET, POST, PUT, etc. responsed by default
# Whilst with APIView they must be defined manually.
# There's also the generics but I don't know yet how good or bad are they
# in comparison.

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="Tasks API")),
   # path("api/v1/tasks/", TaskView.as_view()),
]
