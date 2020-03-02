from django.http import JsonResponse
from django.views import View
from django.core.handlers.wsgi import WSGIRequest
from api.v1.models import Article
from time import sleep
import random


class ShowArticles(View):
    # noinspection PyMethodMayBeStatic
    def get(self, request: WSGIRequest):
        articles = Article.objects.values()
        sleep(0.5)
        if random.choice([True, False]):
            return JsonResponse(data=list(articles), safe=False)
        else:
            return JsonResponse({"error": "this is error"})
