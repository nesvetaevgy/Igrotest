from django.urls import path

from . import views

urlpatterns = [
    path('login', views.login),
    path('cross', views.cross),
    path('result', views.result)
]