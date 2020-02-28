from django.http import JsonResponse
from django.views import View
from django.core.handlers.wsgi import WSGIRequest
from api.v1.models import Article


class ShowArticles(View):
    # noinspection PyMethodMayBeStatic
    def get(self, request: WSGIRequest):
        articles = Article.objects.values()
        return JsonResponse(data=list(articles), safe=False)
