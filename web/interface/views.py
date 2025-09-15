from django.http import JsonResponse
from django.core.serializers import serialize
from json import loads as json_loads

from data.models import Test, TestResult
    

def get_test(request):

    test = Test.objects.get(pk=request.GET.get('pk'))
    test_json = json_loads(serialize('json', [test]))[0]
    test_json['fields']['_tasks_quantity'] = len(test.tasks)

    return JsonResponse({
        'ok': True,
        'result': test_json
    })


def create_test_result(request):

    test_pk = request.GET.get('testPk')
    student_firstname = request.GET.get('studentFirstname')
    student_lastname = request.GET.get('studentLastname')
    student_class = request.GET.get('studentClass')
    _answers = json_loads(request.GET.get('answers'))

    test = Test.objects.get(pk=test_pk)

    points = 0
    answers = []
    for task_i, answer in enumerate(_answers):
        
        if task_i > len(test.tasks) - 1:
            break

        task = test.tasks[task_i]

        answers.append({
            'type': task['type'],
            'task': task['text'],
            'answer': list(filter(lambda answer_: answer_ != "", answer))
        })

        right = True
        for task_answer_i, task_answer in enumerate(task['answers']):
            if task_answer['right'] and answer[task_answer_i] != task_answer['text'] or answer[task_answer_i] and not task_answer['right']:
                right = False
        
        if right:
            answers[-1]['right'] = True
            points += 1
        else:
            answers[-1]['right'] = False

    TestResult.objects.filter(
        test=test,
        student_firstname=student_firstname,
        student_lastname=student_lastname,
        student_class=student_class
    ).delete()
    
    TestResult.objects.create(
        test=test,
        student_firstname=student_firstname,
        student_lastname=student_lastname,
        student_class=student_class,
        points=points,
        answers=answers
    )

    return JsonResponse({
        'ok': True
    })
