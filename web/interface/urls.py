from django.urls import path

from . import views

urlpatterns = [
    path('getTest', views.get_test),
    path('createTestResult', views.create_test_result)
]