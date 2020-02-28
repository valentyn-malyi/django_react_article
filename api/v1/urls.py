from django.urls import path
from api.v1.views import ShowArticles

urlpatterns = [
    path("articles/", ShowArticles.as_view())
]
