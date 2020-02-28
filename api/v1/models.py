from django.db import models as m


class Article(m.Model):
    title = m.CharField(max_length=100)
    body = m.CharField(max_length=500)
    create_time = m.DateTimeField(auto_now_add=True)
