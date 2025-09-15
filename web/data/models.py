from django.db import models
from django_jsonform.models.fields import JSONField


class Test(models.Model):
    title = models.CharField(max_length=32, verbose_name="Название")
    scene = models.CharField(max_length=16, choices={
        'office': "Офис",
        'workshop': "Мастерская"
    }, default='office', verbose_name="Сцена")
    timer = models.PositiveSmallIntegerField(default=0, verbose_name="Таймер (секунды)")
    tasks = JSONField(schema={
        'type': 'array',
        'items': {
            'type': 'object',
            'keys': {
                'type': {
                    'type': 'string',
                    'choices': [
                        {
                            'value': 'choice_one',
                            'title': "Выбор одного"
                        },
                        {
                            'value': 'choice_multiple',
                            'title': "Выбор нескольких"
                        },
                        {
                            'value': 'input',
                            'title': "Ввод"
                        }
                    ],
                    'default': 'choice_one',
                    'required': True,
                    'title': "Тип"
                },
                'text': {
                    'type': 'string',
                    'widget': 'textarea',
                    'required': True,
                    'title': "Текст"
                },
                'answers': {
                    'type': 'array',
                    'items': {
                        'type': 'object',
                        'keys': {
                            'text': {
                                'type': 'string',
                                'required': True,
                                'title': "Текст"
                            },
                            'right': {
                                'type': 'boolean',
                                'default': False,
                                'title': "Правильный"
                            }
                        }
                    },
                    'minItems': 1,
                    'maxItems': 4,
                    'title': "Ответы"
                }
            }
        },
        'minItems': 1,
        'maxItems': 8
    }, default=list, verbose_name="Задания")

    def __str__(self):
        return str(self.title)
    
    class Meta:
        verbose_name = "Тест"
        verbose_name_plural = "Тесты"


class TestResult(models.Model):
    test = models.ForeignKey(Test, models.CASCADE, verbose_name="Тест")
    student_firstname = models.CharField(max_length=32, verbose_name="Имя студента")
    student_lastname = models.CharField(max_length=32, verbose_name="Фамилия студента")
    student_class = models.CharField(max_length=3, verbose_name="Класс студента")
    points = models.PositiveSmallIntegerField(verbose_name="Баллы")
    answers = JSONField(schema={
        'type': 'array',
        'items': {
            'type': 'object',
            'keys': {
                'type': {
                    'type': 'string',
                    'choices': [
                        {
                            'value': 'choice_one',
                            'title': "Выбор одного"
                        },
                        {
                            'value': 'choice_multiple',
                            'title': "Выбор нескольких"
                        },
                        {
                            'value': 'input',
                            'title': "Ввод"
                        }
                    ],
                    'default': 'choice_one',
                    'required': True,
                    'title': "Тип"
                },
                'task': {
                    'type': 'string',
                    'widget': 'textarea',
                    'required': True,
                    'title': "Задание"
                },
                'answer': {
                    'type': 'array',
                    'items': {
                        'type': 'string',
                        'required': True
                    },
                    'minItems': 1,
                    'maxItems': 4,
                    'title': "Ответ"
                },
                'right': {
                    'type': 'boolean',
                    'title': "Правильный"
                }
            }
        },
        'minItems': 1,
        'maxItems': 8
    }, default=list, verbose_name="Ответы")
    timestamp = models.DateTimeField(auto_now_add=True, verbose_name="Дата прохождения")

    def __str__(self):
        return self.test.title

    class Meta:
        verbose_name = "Результат теста"
        verbose_name_plural = "Результаты тестов"
