from django.contrib import admin

from .models import Test, TestResult


class TestResultAdmin(admin.ModelAdmin):
    list_display = ['test', 'student_firstname', 'student_lastname', 'student_class', 'points']
    search_fields = ['test__title']


admin.site.register(Test)
admin.site.register(TestResult, TestResultAdmin)