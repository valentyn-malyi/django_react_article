from django.urls import path, include
from article.views import Init

urlpatterns = [
    path("", Init.as_view())
]
